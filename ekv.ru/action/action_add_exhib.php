<?php
session_start();
require_once '../db.php';
mysqli_query($connect, "SET NAMES UTF8");
$result = mysqli_query($connect, "SELECT * FROM `exhibitions`");
$numrows = mysqli_num_rows($result) + 1;
$userid = $_SESSION['user']['id'];

$uploadPath = '../media/img/' . $userid . '/exhibitions' . '/' . $numrows . '/cover' . '/';
$exhibTitle = $_POST['exhibTitle'];
$cover = $_POST['cover'];




  if(isset($_POST['cover'])){
    $errorFields = [];
if ($exhibTitle === '') {
  $errorFields[] = 'exhibTitle';
  $mess = 'Определите название выставки!';
  $response = array("answer" => "$mess", "type" => 1);
  echo json_encode($response);
  die();
} 
    $size = 1048576;
    $file = $_FILES['exhibFile']['name'];
    $response = array();
    if (!isset($file)) {
      $response = array("answer" => "Ошибка: максимальный вес файла не должен привышать 1 Мб");
      echo json_encode($response);
      die();
    } else {
      
        mkdir("../media/img/{$_SESSION['user']['id']}/exhibitions/{$numrows}");
        mkdir("../media/img/{$_SESSION['user']['id']}/exhibitions/{$numrows}/books");
        mkdir("../media/img/{$_SESSION['user']['id']}/exhibitions/{$numrows}/cover");
        if (move_uploaded_file($_FILES['exhibFile']['tmp_name'], $uploadPath . $_FILES['exhibFile']['name'])) {
          $result = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}'");
          $numEx = mysqli_num_rows($result) + 1;
          $updateQ = mysqli_query($connect, "INSERT INTO `exhibitions`(`id`, `id_user`, `numEx`, `exhibTitle`, `cover_path`, `countRazdel`) VALUES ('$numrows', '{$_SESSION['user']['id']}', '$numEx', '$exhibTitle', 'media/img/{$userid}/exhibitions/{$numrows}/cover/{$_FILES['exhibFile']['name']}', '3') ") or die("Error:" . mysqli_error($connect));
          $razdels = mysqli_query($connect, "INSERT INTO `razdels`(`id_user`, `numEx`, `numRazdel`, `titleRazdel`) VALUES ('{$_SESSION['user']['id']}', '$numEx', '1', 'Название раздела')") or die("Error:" . mysqli_error($connect));
          $razdels2 = mysqli_query($connect, "INSERT INTO `razdels`(`id_user`, `numEx`, `numRazdel`, `titleRazdel`) VALUES ('{$_SESSION['user']['id']}', '$numEx', '2', 'Название раздела')") or die("Error:" . mysqli_error($connect));
          $razdels3 = mysqli_query($connect, "INSERT INTO `razdels`(`id_user`, `numEx`, `numRazdel`, `titleRazdel`) VALUES ('{$_SESSION['user']['id']}', '$numEx', '3', 'Название раздела')") or die("Error:" . mysqli_error($connect));
          $response = array("answer" => "Обложка выставки успешно загружена!", "file" => $file);
          echo json_encode($response);
        } else {
          $response = array("answer" => "Ошибка загрузки!", "file" => $file);
          echo json_encode($response);
        }
      }
    }
  ?>
