<?php
include "varibales.php";
$db = new mysqli('localhost', 'root', 'root', 'webdev87');

if ($db->connect_error) {
    echo $db->connect_error;
}