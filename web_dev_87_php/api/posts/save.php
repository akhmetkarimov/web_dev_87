<?php
include "../../config/database.php";

$title = $_POST['title'];
$description = $_POST['description'];
$uid = $_POST['uid'];
$category_id = $_POST['category'];

$db->query("INSERT INTO post (title, description, author_id, views, category_id) VALUES ('$title', '$description', '$uid', 0, '$category_id');");

// header("Location: $BASE_URL/main.php");

$result = [
    'success' => true
];

echo json_encode($result);