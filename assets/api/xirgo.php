<?php
require_once "../config/xirgo-config.php";

function xirgoRequest($endpoint) {
    $ch = curl_init();

    curl_setopt_array($ch, [
        CURLOPT_URL => XIRGO_API_BASE . $endpoint,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer " . XIRGO_API_KEY,
            "Accept: application/json"
        ]
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}
