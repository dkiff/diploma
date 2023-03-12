<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];
$authorFamil = $_POST['authorFamil'];
$authorName = $_POST['authorName'];
$titleBook = $_POST['titlebook'];
$textFacts = $_POST['textFacts'];
$city = $_POST['city'];
$izdatel = $_POST['izdatel'];
$year = $_POST['year'];
$seria = $_POST['seria'];
$annotation = $_POST['annotation'];
$numBook = $_POST['numBook'];
$razdel= $_POST['razdel'];
$fatherName = $_POST['authorFatherName'];
$volume = $_POST['volume'];

$update = mysqli_query($connect, "UPDATE `books` SET `authorName` = '$authorName', `authorFamil` = '$authorFamil', `fatherName` = '$fatherName', `titleBook` = '$titleBook', `textFacts` = '$textFacts', `city` = '$city', `izdatel` = '$izdatel', `year` = '$year', `volume` = '$volume', `seria` = '$seria', `annotation` = '$annotation' WHERE `id_user` = '$userid' AND `numEx` = '$numEx' AND `numRazdel` = '$razdel' AND `numBook` = '$numBook'") or die("Error save titleRazdel: " . mysqli_error($connect));

if($update){
    $response = [
        "type" => 1
    ];
} else {
    $response = [
        "type" => 0
        
    ];
}
 echo json_encode($response);