<?php
require_once "xirgo.php";

// Example: fetch live vehicles
$data = xirgoRequest("/devices/live");

// 🔽 SIMPLIFY SMARTAPI RESPONSE
$response = [
    "totalVehicles" => count($data),
    "moving" => 0,
    "idle" => 0,
    "stopped" => 0
];

foreach ($data as $v) {
    if ($v["speed"] > 5) {
        $response["moving"]++;
    } elseif ($v["speed"] > 0) {
        $response["idle"]++;
    } else {
        $response["stopped"]++;
    }
}

header("Content-Type: application/json");
echo json_encode($response);
