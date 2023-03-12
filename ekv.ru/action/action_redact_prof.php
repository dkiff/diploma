<?php
session_start();
    require_once '../db.php';
    mysqli_query($connect, "SET NAMES UTF8");

    $newName = $_POST['newName'];
    $newSurname = $_POST['newSurname'];
    $newJob = $_POST['newJob'];
    $newEmail = $_POST['newEmail'];

    $errorFields = [];

    if($newName === ''){
        $errorFields[] = 'newName';
        $mess = 'Проверте правильность запонения полей!';
    }

    if($newSurname === ''){
        $errorFields[] = 'newSurname';
        $mess = 'Проверте правильность запонения полей!';
    }

    if($newJob === ''){
        $errorFields[] = 'newJob';
        $mess = 'Проверте правильность запонения полей!';
    }

    if($newEmail === '' || !filter_var($newEmail, FILTER_VALIDATE_EMAIL)){
        $errorFields[] = 'newEmail';
        $mess = 'Неверный формат e-mail!';
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
      } else{
         $resultRed = mysqli_query($connect, "UPDATE `users` SET `firstName` = '$newName', `secondName` = '$newSurname', `job_title` = '$newJob', `email` = '$newEmail' WHERE `id` = '{$_SESSION['user']['id']}'") or die("Error:". mysqli_error($connect));
        $_SESSION['user']['firstName'] = $newName;
        $_SESSION['user']['secondName'] = $newSurname;
        $_SESSION['user']['email'] = $newEmail;
        $_SESSION['user']['job_title'] = $newJob;

        $response = [
            "status" => true
        ];

        echo json_encode($response);
        die();
      }

       
    ?>
