<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];

$password = $_POST['password'];
$password1 = md5($password);
$k = 1;
$updatePasswod = mysqli_query($connect, "UPDATE `users` SET `password` = '$password1', `redactPassword` = '$k' WHERE `id` = '$userid'") or die('Error add password: ' . mysqli_error($connect));
if($updatePasswod){
    $response = [
        "status" => true
    ];
    $_SESSION['user']['redactPassword'] = 1;
} else {
    $response = [
        "status" => false
    ];
}
echo json_encode($response);
?>