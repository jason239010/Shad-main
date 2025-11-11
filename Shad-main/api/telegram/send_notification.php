<?php
// api/telegram/send_notification.php
// Funciones para enviar mensajes a Telegram. Usa el config (api/config.php) para obtener bot_token y chat_id.

function telegram_send_message($botToken, $chatId, $text, $reply_markup = null) {
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $post = [
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => 'HTML'
    ];
    if ($reply_markup) {
        $post['reply_markup'] = json_encode($reply_markup);
    }

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $res = curl_exec($ch);
    curl_close($ch);
    return $res;
}

function notify_admins_new_reservation($config, $reservation_code, $info) {
    $botToken = $config['telegram']['bot_token'];
    $chatId = $config['telegram']['chat_id'];

    $total = $info['total'] ?? 'N/A';
    $email = $info['contact']['email'] ?? 'no-email';
    $adults = $info['adults'] ?? 0;
    $children = $info['children'] ?? 0;
    $summary = "🆕 <b>Nueva reserva</b>\nCode: <code>{$reservation_code}</code>\nCliente: {$email}\nTotal: {$total}\nPasajeros: {$adults} adultos, {$children} niños";

    $keyboard = [
        'inline_keyboard' => [
            [
                ['text' => 'Finalizar', 'callback_data' => "action:finalizar:{$reservation_code}"],
                ['text' => 'Marcar error', 'callback_data' => "action:error:{$reservation_code}"],
                ['text' => 'Ver', 'url' => "https://tu-dominio.com/admin/reservation.php?code={$reservation_code}"]
            ]
        ]
    ];

    return telegram_send_message($botToken, $chatId, $summary, $keyboard);
}
