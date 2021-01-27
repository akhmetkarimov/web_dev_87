<?php

include "database.php";

$name = $_POST['myName'];
$login = $_POST['myLogin'];
$password = $_POST['myPassword'];
$hashPassword = sha1($password);

// INSERT INTO table_name (col, col1, col2) VALUES (val, val1, val2);
// SELECT col, col1, col2 ... FROM table_name WHERE id = 2;

$exist = $db->query("SELECT * FROM account WHERE email = '$login';");

echo $exist->num_rows;

if ($exist->num_rows > 0) {
    header('Location: /web_dev_87_php/index.php?error=exist_account');
} else {
    $db->query("INSERT INTO account (name, email, password) VALUES ('$name', '$login', '$hashPassword');");
    header('Location: /web_dev_87_php/index.php');
}

