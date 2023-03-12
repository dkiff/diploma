<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];
$numButt = $_POST['numButton'];
$numRazdel = $_POST['numRazdel'];

$selectBooksOld = mysqli_query($connect, "SELECT * FROM `books` WHERE `numEx` = '$numEx' AND `numRazdel` = '$numRazdel' AND `id_user` = '$userid'") or die("Error select book: " . mysqli_error($connect));
$delete = mysqli_query($connect, "DELETE FROM `books` WHERE `numEx` = '$numEx' AND `numRazdel` = '$numRazdel' AND `id_user` = '$userid' AND `numBook` = '$numButt'") or die("Error delete book: " . mysqli_error($connect));
$selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `numEx` = '$numEx' AND `numRazdel` = '$numRazdel' AND `id_user` = '$userid'") or die("Error select book: " . mysqli_error($connect));
 
if($delete && mysqli_num_rows($selectBooks)!=0){
    for($i = 1; $i<=mysqli_num_rows($selectBooks); ++$i){
        $row =mysqli_fetch_array($selectBooks);
            $updateNumBook = mysqli_query($connect, "UPDATE `books` SET `numBook` = '$i' WHERE `numEx` = '$numEx' AND `numRazdel` = '$numRazdel' AND `id_user` = '$userid' AND `numBook`= '{$row['numBook']}' ") or die("Error update book: " . mysqli_error($connect));
    }
    $response = [
        "type" => 1
    ];
} else{
    $response = [
        "type" => 0
    ];
}

 echo json_encode($response);
