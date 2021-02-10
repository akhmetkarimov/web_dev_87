<?php
include "../../config/database.php";

$content = $_POST['content'];
$mark = $_POST['mark'];
$uid = $_POST['uid'];
$pid = $_POST['pid'];

$db->query("INSERT INTO review (content, uid, mark, post_id) VALUES ('$content', '$uid', '$mark', '$pid');");

header("Location: $BASE_URL/detail.php?pid=$pid");

// $result = [
//     'success' => true
// ];

// echo json_encode($result);