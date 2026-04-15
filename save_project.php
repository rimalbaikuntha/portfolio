<?php
// api/save_project.php
// Dynamic project save endpoint
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

if (!$input || empty($input['title'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// Save to JSON file (works without a DB)
$file = __DIR__ . '/../data/projects.json';
$projects = [];

if (file_exists($file)) {
    $projects = json_decode(file_get_contents($file), true) ?? [];
}

$project = [
    'id' => time(),
    'title' => htmlspecialchars($input['title']),
    'emoji' => htmlspecialchars($input['emoji'] ?? '🚀'),
    'category' => htmlspecialchars($input['category'] ?? 'tech'),
    'desc' => htmlspecialchars($input['desc']),
    'features' => array_map('htmlspecialchars', $input['features'] ?? []),
    'year' => htmlspecialchars($input['year'] ?? date('Y')),
    'status' => htmlspecialchars($input['status'] ?? 'live'),
    'url' => filter_var($input['url'] ?? '#', FILTER_SANITIZE_URL),
    'color' => htmlspecialchars($input['color'] ?? '#D4A853'),
    'created_at' => date('Y-m-d H:i:s')
];

array_unshift($projects, $project);

if (!is_dir(dirname($file))) {
    mkdir(dirname($file), 0755, true);
}
file_put_contents($file, json_encode($projects, JSON_PRETTY_PRINT));

echo json_encode(['success' => true, 'project' => $project]);
