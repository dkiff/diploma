<?php
session_start();
require_once '../db.php';
mysqli_query($connect, "SET NAMES UTF8");
$userid = $_POST['userId'];

$access = $_POST['access'];
$updateAccess = mysqli_query($connect, "UPDATE `users` SET `access` = '$access' WHERE `id` = '$userid'") or ("Error add access: " . mysqli_error($connect));

$accessAdmin = $_POST['accessAdmin'];
$updateAccessAdmin = mysqli_query($connect, "UPDATE `users` SET `adminAccess` = '$accessAdmin' WHERE `id` = '$userid'") or ("Error add accessAdmin: " . mysqli_error($connect));

$newLogin = $_POST['newLogin'];
$newSurname = $_POST['newSurname'];
$newName = $_POST['newName'];
$newFatherName = $_POST['newFatherName'];
$newJobPlace = $_POST['newJobPlace'];
$newJob = $_POST['newJob'];
$newEmail = $_POST['newEmail'];
$useridInputing = $_POST['useridInputing'];

$updateUserData = mysqli_query($connect, "UPDATE `users` SET `login` = '$newLogin', `firstName` = '$newName', `secondName` = '$newSurname', `fatherName` = '$newFatherName', `jobPlace` = '$newJobPlace', `job` = '$newJob', `email` = '$newEmail' WHERE `id` = '$useridInputing'") or ("Error update user data: " . mysqli_error($connect));
