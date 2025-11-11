<?php
// api/config.php
// Config base: usa variables de entorno o un archivo local api/config.local.php
// NO pongas tokens en este archivo si piensas subirlo al repo.

$config = [
  'db' => [
    'dsn' => getenv('DB_DSN') ?: 'mysql:host=localhost;dbname=mi_base;charset=utf8mb4',
    'user' => getenv('DB_USER') ?: 'mi_usuario',
    'pass' => getenv('DB_PASS') ?: 'mi_password',
    'options' => [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ],
  ],
  'telegram' => [
    'bot_token' => getenv('TELEGRAM_BOT_TOKEN') ?: '',
    'chat_id' => getenv('TELEGRAM_CHAT_ID') ?: '',
  ],
];

// Si existe config.local.php (en el servidor), lo carga y reemplaza valores
$localFile = __DIR__ . '/config.local.php';
if (file_exists($localFile)) {
    $local = require $localFile;
    $config = array_replace_recursive($config, $local);
}

return $config;
