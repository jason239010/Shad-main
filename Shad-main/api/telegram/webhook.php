<?php
// api/telegram/webhook.php
// Webhook que recibe callback_query cuando se pulsan los botones inline en Telegram.
// Configura en Telegram: https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=https://tu-dominio.com/api/telegram/webhook.php

$config = require __DIR__ . '/../config.php';
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(200);
    exit;
}

$pdo = new PDO($config['db']['dsn'], $config['db']['user'], $config['db']['pass'], $config['db']['options']);

if (isset($body['callback_query'])) {
    $callback = $body['callback_query'];
    $data = $callback['data'] ?? '';
    // Formato esperado: action:finalizar:RES-xxxx
    $parts = explode(':', $data);
    if (count($parts) >= 3 && $parts[0] === 'action') {
        $action = $parts[1];
        $reservation_code = $parts[2];

        if ($action === 'finalizar') {
            $stmt = $pdo->prepare("UPDATE reservations SET status='paid' WHERE reservation_code = :code");
            $stmt->execute([':code' => $reservation_code]);

            $resp = [
                'callback_query_id' => $callback['id'],
                'text' => "Reserva {$reservation_code} marcada como Finalizada",
                'show_alert' => false
            ];
            file_get_contents("https://api.telegram.org/bot{$config['telegram']['bot_token']}/answerCallbackQuery?" . http_build_query($resp));
        } elseif ($action === 'error') {
            $stmt = $pdo->prepare("UPDATE reservations SET status='error' WHERE reservation_code = :code");
            $stmt->execute([':code' => $reservation_code]);

            $resp = [
                'callback_query_id' => $callback['id'],
                'text' => "Reserva {$reservation_code} marcada como Error",
                'show_alert' => false
            ];
            file_get_contents("https://api.telegram.org/bot{$config['telegram']['bot_token']}/answerCallbackQuery?" . http_build_query($resp));
        }
    }
}

// Responder 200 OK
http_response_code(200);
