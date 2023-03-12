<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_POST['numEx'];
$numRazdel = $_POST['numRazdel'];
$numBook = $_POST['numBook'];


$uploadPath = '../media/img/'.$userid.'/exhibitions'.'/'.$numEx.'/books'.'/';
  if(isset($_POST['file'])){
    
    $types = array("image/jpg, image/png, image/jpeg, image/webp");
    $size=1048576;
    $file = $_FILES['userfile']['name'];
    $response = array();
    if(!isset($file)){
      $response = array("answer"=>"Ошибка: максимальный вес файла не должен привышать 1 Мб");
      exit(json_encode($response));
      exit('file');
      
    }
    if(!in_array($_FILES['userfile']['type'],$types)){
      $response = array("answer"=>"Ошибка: недопустимое расширение файла!");
    }

    
    /* $protect = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user`") */
   /*  $target = $_SESSION['user']['imgPath'];
    if(!empty($target)){
       unlink($target);
    }
    */

    if(move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadPath. $_FILES['userfile']['name'])){
      $updateQ = mysqli_query($connect, "UPDATE `books` SET `img` = '$uploadPath/{$_FILES['userfile']['name']}' WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numBook` = '$numBook' AND `numRazdel` = '$numRazdel' AND `numEx`='$numEx'") or die("Error upload cover:" .mysqli_error($connect));
      if($updateQ){
        $response=array("answer"=>"Файл успешно загружена!", "file"=>$file);
      } else{
        $response=array("answer"=>"Файл НЕ успешно загружена!", "file"=>$file);
      }
      
      exit(json_encode($response));
    }else{
      $response = array("answer"=>"Ошибка загрузки!", "file"=>$file);
      echo json_encode($response);
    }
  }

?>