<!DOCTYPE html>
<html lang='ru'>

<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" type="text/css" />
    <link rel='stylesheet/less' type='text/css' href='./css/style.less' />
    <link rel="stylesheet" href="../css/sitebar.css">
    <link rel="stylesheet" href="../css/styleAdmin.css">
    <title><?php echo $title; ?></title>
    <style>
        @keyframes red {
            0% {
                background-color: lightpink;
            }

            50%{
                background-color: red;
            }

            100% {
                background-color: lightpink;
            }
        }
    </style>
</head>

<body>
    <div class="body">

        <header class="p-3 text-bg-white">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start hed flex-wrap-nowrap">
                    <div class="titleBox d-flex flex-nowrap align-items-center justify-content-center justify-content-lg-start hed">
                        <div class="logo"></div>
                        <a href="/index.php" class="mb-2 mb-lg-0 text-dark text-decoration-none headerTitle">
                            <span style="font-size: 16pt; color: white;">Электронные<br> </span>
                            <span style="font-size: 18pt; color: white;">Книжные</span><br>
                            <span style="font-size: 10pt; text-transform: uppercase; color: white;">выставки</span>
                        </a>
                    </div>
                    <ul class="headerMenu nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li class="hedlink"><a href="index.php" class="nav-link px-2 text-white ">Главная
                                страница</a>
                        </li>
                        <li class="hedlink"><a href="profile.php" class="nav-link px-2 text-white">Профиль</a></li>
                        <li class="hedlink"><a href="#" class="nav-link px-2 text-white">Помощь</a></li>
                        <?php if ($_SESSION['user']['adminAccess'] == 1) { ?>
                            <li class="hedlink"><a href="administration.php" class="nav-link px-2 text-white">Административная панель</a></li>
                        <?php } ?>
                    </ul>
                    <div class="buttons">
                        <?php
                        if (isset($_SESSION['user'])) { ?>
                            <div class="btn hello"><span><?php echo $_SESSION['user']['firstName'] ?></span></div>
                            <a class="btn btn-outline-dark exit" href="./action/action_logout.php" name='a'>Выйти</a>
                        <?php } else {
                        ?>
                            <div class="btn btn-outline-dark log" href="#">Войти</div>
                            <div class="btn btn-outline-dark reg">Регистрация</div>
                        <?php } ?>

                    </div>
                    <div class="modalk_login">

                        <div class="board">

                            <div class="header_modal">

                                <h1 class="modal_title">Авторизация</h1>
                                <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
                            </div>
                            <div class="content_modal">
                                <?php require_once './form/login_form.php' ?>

                            </div>
                        </div>

                    </div>

                    <div class="modalk_register">
                        <div class="board">
                            <div class="header_modal">
                                <h1 class="modal_title">Регистрация</h1>
                                <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
                            </div>
                            <div class="content_modal">
                                <?php require_once './form/register_form.php' ?>
                            </div>
                        </div>
                    </div>
                    <!--
                    
                    <span class="hello">Добро пожаловать, !</span>
                     <a class="btn btn-outline-dark log" href="{% url 'logout' %}">Выйти</a> -->

                    <!-- 
                     -->

                </div>
            </div>
    </div>

    </header>