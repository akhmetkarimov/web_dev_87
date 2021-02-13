<?php
include "../../config/database.php";

$title = $_POST['title'];
$description = $_POST['description'];
$uid = $_POST['uid'];
$category_id = $_POST['category'];
$img_path = null;

if (isset($_FILES["post-img"]) && isset($_FILES["post-img"]["name"])) {
    $temp = explode(".", $_FILES["post-img"]["name"]); // png, jpg, pdf, jpeg, svg
    $file_name = time() . "." . end($temp); // 164515723.png
    move_uploaded_file($_FILES["post-img"]["tmp_name"], "../../images/posts/$file_name");
    $img_path = "images/posts/$file_name";
}


$db->query("INSERT INTO post (title, description, author_id, views, category_id, cover) VALUES ('$title', '$description', '$uid', 0, '$category_id', '$img_path');");

// // header("Location: $BASE_URL/main.php");

$result = [
    'success' => true
];

echo json_encode($result);