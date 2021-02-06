<?php
include "../../config/database.php";

$title = $_POST['newTitle'];
$description = $_POST['newDescription'];
$pid = $_POST['pid'];

$db->query("UPDATE post SET title='$title', description='$description' WHERE id = $pid; ");

header("Location: $BASE_URL/profile.php");