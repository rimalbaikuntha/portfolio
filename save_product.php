<?php
// api/save_product.php — saves new product with all fields
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']); exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || empty($input['name'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Product name required']); exit;
}

$file     = __DIR__ . '/../data/products.json';
$products = file_exists($file) ? (json_decode(file_get_contents($file), true) ?? []) : [];

$product = [
    'id'        => time(),
    'name'      => htmlspecialchars($input['name']      ?? ''),
    'emoji'     => htmlspecialchars($input['emoji']     ?? '🚀'),
    'category'  => htmlspecialchars($input['category']  ?? 'tech'),
    'desc'      => htmlspecialchars($input['desc']      ?? ''),
    'started'   => htmlspecialchars($input['started']   ?? ''),
    'customers' => htmlspecialchars($input['customers'] ?? ''),
    'role'      => htmlspecialchars($input['role']      ?? ''),
    'features'  => array_map('htmlspecialchars', (array)($input['features'] ?? [])),
    'status'    => htmlspecialchars($input['status']    ?? 'live'),
    'url'       => filter_var($input['url'] ?? '#', FILTER_SANITIZE_URL),
    'color'     => htmlspecialchars($input['color']     ?? '#D4A853'),
    'added_at'  => date('Y-m-d H:i:s'),
];

array_unshift($products, $product);
if (!is_dir(dirname($file))) mkdir(dirname($file), 0755, true);
file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode(['success' => true, 'product' => $product]);
