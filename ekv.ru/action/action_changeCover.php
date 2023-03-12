<?php 

session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];
$uploadPath = '../media/img/'.$userid.'/'.'exhibitions/'.$numEx.'/cover'.'/';
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

    $target = $_SESSION['ex']['cover'];
    if(!empty($target)){
       unlink("../$target");
    }
    

    if(move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadPath. $_FILES['userfile']['name'])){
      $updateQ = mysqli_query($connect, "UPDATE `exhibitions` SET `cover_path` = 'media/img/{$userid}/exhibitions/{$numEx}/cover/{$_FILES['userfile']['name']}' WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error:" .mysqli_error($connect));
      $response=array("answer"=>"Фотография успешно загружена!", "file"=>$file);
      $_SESSION['ex']['cover'] = "media/img/{$userid}/exhibitions/{$numEx}/cover/{$_FILES['userfile']['name']}";
      exit(json_encode($response));
    }else{
      $response = array("answer"=>"Ошибка загрузки!", "file"=>$file);
      exit(json_encode($response));
    }
    
  }

?>