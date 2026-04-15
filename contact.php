<?php
// api/contact.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars($input['name'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($input['subject'] ?? 'Portfolio Inquiry');
$message = htmlspecialchars($input['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Save to JSON log
$file = __DIR__ . '/../data/messages.json';
$messages = [];
if (file_exists($file)) {
    $messages = json_decode(file_get_contents($file), true) ?? [];
}
$messages[] = [
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'received_at' => date('Y-m-d H:i:s')
];
if (!is_dir(dirname($file))) {
    mkdir(dirname($file), 0755, true);
}
file_put_contents($file, json_encode($messages, JSON_PRETTY_PRINT));

// Send email (uncomment and configure for production)
/*
$to = 'baikuntha@addressgraph.com';
$headers  = "From: Portfolio Contact <noreply@yoursite.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
mail($to, "Portfolio: $subject", $body, $headers);
*/

echo json_encode(['success' => true, 'message' => 'Message received successfully']);
