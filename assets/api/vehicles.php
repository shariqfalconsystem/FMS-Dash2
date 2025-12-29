<?php
require_once "xirgo.php";

$data = xirgoRequest("/devices/live");

$vehicles = [];

foreach ($data as $v) {
    $vehicles[] = [
        "deviceId" => $v["deviceId"],
        "vehicleNo" => $v["vehicle"]["name"],
        "lat" => $v["location"]["lat"],
        "lng" => $v["location"]["lng"],
        "speed" => $v["location"]["speed"],
        "status" => $v["location"]["speed"] > 0 ? "MOVING" : "STOPPED"
    ];
}

header("Content-Type: application/json");
echo json_encode($vehicles);
