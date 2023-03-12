<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];

  if(!$_SESSION['user']['email'] AND !$_SESSION['user']['login']){

  } else{
    $email = $_SESSION['user']['email'];
    $login = $_SESSION['user']['login'];
    $queryU = mysqli_query($connect, "SELECT id FROM users WHERE id='{$_SESSION['user']['id']}'");
    $resultU = mysqli_fetch_array($queryU);
  }
 
$uploadPath = '../media/img/'.$userid.'/';
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

    
    $target = $_SESSION['user']['imgPath'];
    if(!empty($target)){
       unlink($target);
    }
   

    if(move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadPath. $_FILES['userfile']['name'])){
      $updateQ = mysqli_query($connect, "UPDATE `users` SET `img_path` = '../media/img/{$userid}/{$_FILES['userfile']['name']}' WHERE `id` = '{$_SESSION['user']['id']}'") or die("Error:" .mysqli_error($connect));
      $response=array("answer"=>"Фотография успешно загружена!", "file"=>$file);
      $_SESSION['user']['imgPath'] = substr($uploadPath. $_FILES['userfile']['name'], 3);
      exit(json_encode($response));
    }else{
      $response = array("answer"=>"Ошибка загрузки!", "file"=>$file);
      exit(json_encode($response));
    }
  }

?>