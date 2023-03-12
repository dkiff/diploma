<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$loginL = $_POST['login'];
$passwordL = $_POST['password'];

$errorFields = [];

if ($loginL == '') {
  $errorFields[] = 'login';
}

if ($passwordL == '') {
  $errorFields[] = 'password';
}

if (!empty($errorFields)) {
  $response = [
    "status" => false,
    "type" => 1,
    "message" => 'Проверте правильность запонения полей!',
    "fields" => $errorFields
  ];

  echo json_encode($response);
  die();
}

$passwordL = md5($passwordL); 

$checkUser = mysqli_query($connect, "SELECT * FROM `users` WHERE `login` = '$loginL' AND `password` = '$passwordL'") or die("Error: " . mysqli_error($connect));

if (mysqli_num_rows($checkUser) > 0) {
  $user = mysqli_fetch_assoc($checkUser);
  $_SESSION['user'] = [
    "id" => $user['id'],
    "login" => $user['login'],
    "email" => $user['email'],
    "firstName" => $user['firstName'],
    "secondName" => $user['secondName'],
    "fatherName" => $user['fatherName'],
    "dataReg" => $user['data'],
    "jobPlace" => $user['jobPlace'],
    "job" => $user['job'],
    "imgPath" => substr($user['img_path'], 3),
    "access" => $user['access'],
    "adminAccess" => $user['adminAccess'],
    "redactPassword" => $user['redactPassword']
  ];
  
  $response = [
    "status" => true
  ];

  echo json_encode($response);

  
} else {
  $response = [
    "status" => false,
    "message" => 'Неверный логин или пароль!' . $passwordL
  ];
  echo json_encode($response);
}
?>