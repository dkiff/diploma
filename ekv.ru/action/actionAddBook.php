<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];
$authorFamil = $_POST['authorFamil'];
$authorName = $_POST['authorName'];
$fatherName = $_POST['authorFathername'];
$volume = $_POST['volume'];
$titleBook = $_POST['titleBook'];
$textFacts = $_POST['textFacts'];
$city = $_POST['city'];
$izdatel = $_POST['izdatel'];
$year = $_POST['year'];
$seria = $_POST['seria'];
$annotation = $_POST['annotation'];
$numButton = $_POST['numBut'];
$razdel= $_POST['razdel'];

$selectBooksRazdelMax = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numRazdel` = '$razdel' AND `numEx`='$numEx'") or die('Error in max: ' . mysqli_error($connect));

   $numRow = mysqli_num_rows($selectBooksRazdelMax);
   $newNumBook = $numRow + 1;



$insert = mysqli_query($connect, "INSERT INTO `books` (`id_user`, `numEx`,`numRazdel`, `numBook`, `authorName`,`fatherName`, `authorFamil`, `titleBook`, `textFacts`, `city`, `izdatel`, `year`, `volume`, `img`, `seria`, `annotation`) VALUES  ('$userid', '$numEx', '$razdel', '$newNumBook', '$authorName', '$fatherName', '$authorFamil', '$titleBook', '$textFacts', '$city', '$izdatel', '$year', '$volume', 'Добавить обложку', '$seria', '$annotation')") or die("Error add new book: " . mysqli_error($connect));

if($insert){
    $response = [
        "type" => 1
    ];
} else {
    $response = [
        "type" => 0
        
    ];
}
 echo json_encode($response);
