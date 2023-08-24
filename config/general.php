<?php

$config = [
    '*' => [
        'securityKey'                      => getenv('SECURITY_KEY'),
        'pageTrigger'                      => 'side-',
        'errorTemplatePrefix'              => 'errors/_',
        'maxUploadFileSize'                => 67108864,
        'defaultWeekStartDay'              => 1,
        'omitScriptNameInUrls'             => true,
        'limitAutoSlugsToAscii'            => true,
        'convertFilenamesToAscii'          => true,
        'generateTransformsBeforePageLoad' => true,
        'defaultSearchTermOptions'         => [
            'subLeft'  => true,
            'subRight' => true,
        ],
        'aliases' => [
            'baseUrl'   => getenv('BASE_URL'),
            'basePath'  => getenv('BASE_PATH')
        ],
        'extraAllowedFileExtensions' => 'kml, json, gpx',
        'useEmailAsUsername' => true
    ],
    'dev' => [
        'devMode'               => true,
        'enableTemplateCaching' => false
    ],
    'staging' => [
        'devMode'               => true,
        'enableTemplateCaching' => false,
        'allowAdminChanges'     => true
    ],
    'production' => [
        'allowAdminChanges' => false
    ],
];

$isCpRequest = false;
$uri = getenv('REQUEST_URI');
$uriParts = explode('/', trim($uri, '/'));
if (count($uriParts) && $uriParts[0] === 'admin') {
    $isCpRequest = true;
}

if (!$isCpRequest) {
    $config['*']['enableCsrfProtection'] = false;
    $config['*']['autoLoginAfterAccountActivation'] = true;
    $config['*']['setPasswordSuccessPath'] = 'kart#login';
}

return $config;