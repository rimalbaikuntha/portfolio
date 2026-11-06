<?php
// Contact form handler. Your email address is NOT stored in this file or in
// any public page: it lives in config.php (git-ignored, copied from config.example.php).
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) { http_response_code(400); echo json_encode(['error' => 'Bad request']); exit; }

// Honeypot: bots fill this in, people never see it.
if (!empty($input['website'])) { echo json_encode(['success' => true]); exit; }

// Strip control characters / newlines to prevent header injection.
$clean = fn($v, $max) => mb_substr(trim(preg_replace('/[\x00-\x1F\x7F]+/', ' ', (string)$v)), 0, $max);

$name    = $clean($input['name'] ?? '', 100);
$email   = filter_var($clean($input['email'] ?? '', 150), FILTER_VALIDATE_EMAIL);
$subject = $clean($input['subject'] ?? '', 150) ?: 'Portfolio enquiry';
$message = mb_substr(trim((string)($input['message'] ?? '')), 0, 4000);

if ($name === '' || !$email || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or invalid fields']);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Not configured']);
    exit;
}
$config = require $configFile;

// Simple rate limit: one message per IP per 60 seconds.
$ipKey = sys_get_temp_dir() . '/contact_' . md5($_SERVER['REMOTE_ADDR'] ?? 'x');
if (file_exists($ipKey) && time() - filemtime($ipKey) < 60) {
    http_response_code(429);
    echo json_encode(['error' => 'Please wait a moment']);
    exit;
}
touch($ipKey);

$headers  = "From: {$config['from']}\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body = "Name: {$name}\nEmail: {$email}\n\n{$message}\n";

$sent = mail($config['to'], '[Portfolio] ' . $subject, $body, $headers);
if (!$sent) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not send']);
    exit;
}
echo json_encode(['success' => true]);
