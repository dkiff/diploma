<?php

session_start();
require_once '../db.php';
mysqli_query($connect, "SET NAMES UTF8");

$nameUser = $_POST['nameUserF'];
$surnameUser = $_POST['surnameUserF'];
$fatherNameUserF = $_POST['fatherNameUserF'];
$email = $_POST['emailR'];
$jobPlace = $_POST['jobPlaceF'];
$job = $_POST['jobF'];

$errorFields = [];

if ($nameUser === '') {
  $errorFields[] = 'nameUserF';
  $mess = 'Обязательные поля должны быть заполнены!';
}
if ($surnameUser === '') {
  $errorFields[] = 'surnameUserF';
  $mess = 'Обязательные поля должны быть заполнены!';
}

if ($fatherNameUserF === '') {
  $errorFields[] = 'fatherNameUserF';
  $mess = 'Обязательные поля должны быть заполнены!';
}

if($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)){
    $errorFields[] = 'emailR';
    $mess = 'Адрес почты введен не корректно!';
}

if ($jobPlace === '') {
  $errorFields[] = 'jobPlaceF';
  $mess = 'Обязательные поля должны быть заполнены!';
}

if ($job === '') {
  $errorFields[] = 'jobF';
  $mess = 'Обязательные поля должны быть заполнены!';
}




if (!empty($errorFields)) {
  $response = [
    "status" => false,
    "type" => 1,
    "message" => $mess,
    "fields" => $errorFields
  ];

  echo json_encode($response);
  $errorFields = [];
  die();
}


$checkLogin = mysqli_query($connect, "SELECT * FROM `users` WHERE `email` = '$email'") or die("Error:".mysqli_error($connect));

if(mysqli_num_rows($checkLogin)>0){
    $response = [
        "status" => false,
        "type" => 2,
        "message" => "Пользователь с данным email уже существует!",
        "fields" => 'emailR'
    ];
    echo json_encode($response);
    die();
}



  $date = date('Y.m.d H:i:s');
 $result = mysqli_query($connect, "INSERT INTO `requests`(`user_name`, `user_surname`, `user_fatherName`, `user_jobPlace`, `user_job`, `user_email`, `date`) VALUES ('$nameUser','$surnameUser','$fatherNameUserF','$jobPlace','$job', '$email', '$date')") or die("Errr".mysqli_error($connect));
 if($result){
  $response = [
    "status" => true,
    "message" => "Запрос на регистрацию успешно отправлен! Через некоторое время на указанный адрес электронной почты будут высланы логин и пароль для входа в профиль."
 ];
  echo json_encode($response);
  

  die();
} else {
  $response = [
    "status" => false,
    "message" => "Произошла ошибка! Обратитесь к за помощью к администрации сайта через форму обратной связи на странице 'Помощь'."
  ];
  echo json_encode($response);
  die();
}


  /* $checkLogin = mysqli_query($connect, "SELECT * FROM `users` WHERE `login` = '$loginR'") or die("Errr:".mysqli_error($connect));
  $user = mysqli_fetch_assoc($checkLogin);
  $_SESSION['user'] = [
    "id" => $user['id'],
    "login" => $user['login'],
    "email" => $user['email'],
    "firstName" => $user['firstName'],
    "secondName" => $user['secondName'],
    "dataReg" => $user['data'],
    "job_title" => $user['job_title'],
    "imgPath" => substr($user['img_path'], 3),
    "access" => $user['access']
  ];

  mkdir("../media/img/{$_SESSION['user']['id']}");
  mkdir("../media/img/{$_SESSION['user']['id']}/exhibitions");
  
  $response = [
    "status" => true,
    "message" => "Регистрация успешно завершена!"/* "На Ваш почтовый ящик отправлено сообщение, содержащее ссылку для подтверждения правильности e-mail адреса. Пожалуйста, перейдите по ссылке для завершения подписки.\n\nЕсли письмо не пришло в течение 15 минут, проверьте папку «Спам». Если письмо вдруг попало в эту папку, откройте письмо, нажмите кнопку «Не спам» и перейдите по ссылке подтверждения. Если же письма нет и в папке «Спам», попробуйте зарегистрироваться ещё раз. Возможно, Вы ошиблись при вводе адреса." */
 /*  ];
  echo json_encode($response);
  

  die();
} else {
  $response = [
    "status" => false,
    "message" => "Пароли не совпадают!"
  ];
  echo json_encode($response);
  die();
}

?>
<br> */ 