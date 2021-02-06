<?php
include "../../config/database.php";
$login = $_POST['myLogin'];
$password = $_POST['myPassword'];
$hashPassword = sha1($password);
session_start();

// INSERT INTO table_name (col, col1, col2) VALUES (val, val1, val2);
// SELECT col, col1, col2 ... FROM table_name WHERE id = 2;

$exist = $db->query("SELECT * FROM account WHERE email = '$login';");


if ($exist->num_rows > 0) {
    $userDb = $exist->fetch_object();
    if ($userDb->password == $hashPassword) {
        $_SESSION['suser_id'] = $userDb->id;
        header("Location: $BASE_URL/main.php");
    } else {
        header("Location: $BASE_URL/main.php?error=not_match");
    }
} else {
    header("Location: $BASE_URL/main.php?error=not_found");
}

