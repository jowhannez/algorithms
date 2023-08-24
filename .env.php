<?php

use Dotenv\Dotenv;
/**
 * Using vanilla PHP to set the envirnoment variables.
 * Advantage of using this over the default .env: https://github.com/vlucas/phpdotenv:
 *  - Apply logic to our variables early, such as setting $baseUrl, $envirnoment, ...
 *  - Allow setting diffrent env for diffrent domains (As per Craft 2)
 *  - Allow keeping this file and overriding env variables from server config (Nginx, Apache...)
 */

$protocol = isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https': 'http';
$host = $_SERVER['HTTP_HOST'];

if (class_exists('Dotenv\Dotenv') && file_exists(CRAFT_BASE_PATH . '/.env')) {
    $dotenv = Dotenv::createImmutable(CRAFT_BASE_PATH);
    $dotenv->load();
}

$baseUrl  = $protocol . '://' . $host;
$basePath = CRAFT_BASE_PATH . '/web';

/**
 * Map a domain to an envirnoment
 * domain => env
 * @note: Matching happens from the end of the domain name as per Craft 2
 */
$environment  = 'production';
$environments = [
    '.ddev.site' => 'dev',
];

foreach ($environments as $domain => $env) {
    if ((strlen($baseUrl) - strlen($domain)) === strrpos($baseUrl, $domain)) {
        $environment = $env;
    }
}

/**
 * Set any envirnoment variables here.
 * These will be available across the system with getenv('VAR_NAME')
 */
$envVariables = [
    'ENVIRONMENT'     => $environment,
    'BASE_URL'        => $baseUrl,
    'BASE_PATH'       => $basePath,
    'SECURITY_KEY'    => 'o3B9qHEtfx7jOpiQ2Fg3fOfIIso_ZGBj',
    'DB_DRIVER'       => 'mysql',
    'DB_SERVER'       => 'localhost',
    'DB_USER'         => 'algorithms',
    'DB_PASSWORD'     => 'algorithms',
    'DB_DATABASE'     => 'algorithms',
    'DB_SCHEMA'       => 'public',
    'DB_TABLE_PREFIX' => '',
    'DB_PORT'         => '',
];

if (getenv('DB_DATABASE')) {
    $envVariables['DB_DATABASE'] = getenv('DB_DATABASE');
}
if (getenv('DB_SERVER')) {
    $envVariables['DB_SERVER']   = getenv('DB_SERVER');
}
if (getenv('DB_USER')) {
    $envVariables['DB_USER']     = getenv('DB_USER');
}
if (getenv('DB_PASSWORD')) {
    $envVariables['DB_PASSWORD'] = getenv('DB_PASSWORD');
}


/**
 * Check if the env variable is already set, and if not we set it.
 */
foreach ($envVariables as $key => $value) {
    if (getenv($key) === false) {
        putenv($key . '=' . $value);
    }
}