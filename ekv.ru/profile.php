<?php

session_start();
$title = "ЭКВ - Профиль";
require_once './components/top.php';

?>
<div class="container profileBox">
    <?php

    require_once './db.php';
    mysqli_query($connect, "SET NAMES UTF8");
    if (isset($_SESSION['user'])) { ?>
        <div class="nameAvatar clearfix">
            <div class="avaBox">
                <div class="ava"><img src="<?php echo $_SESSION['user']['imgPath']; ?>" alt="Аватар пользователя"></div>
                <button id="btnAva">Загрузить фото</button>
            </div>

            <div class="text">
                <p class="profileTitle"><?php echo $_SESSION['user']['firstName']; ?> <?php echo $_SESSION['user']['secondName']; ?></p><br>
                <p class="profileReg"><?php echo $_SESSION['user']['job_title'] ?></p><br>
                <p class="profileReg">Дата регистрации: <?php echo $_SESSION['user']['dataReg']; ?></p><br>
                <p class="profileReg">Электронная почта: <a href="mailto:<?php echo $_SESSION['user']['email']; ?>"><?php echo $_SESSION['user']['email']; ?></a></p>
                <p class="redactProf">Редактировать профиль</p>
                <button id="passwordBtn" class="btnRedPass" style="<?php
                                                                    if ($_SESSION['user']['redactPassword'] == 0) {
                                                                        echo "animation-name:red;";
                                                                        $bold = 'bold';
                                                                    } else {
                                                                        echo "background-color:lightcyan;";
                                                                        $bold = 'normal';
                                                                    }
                                                                    ?> font-weight:<?php echo $bold; ?>; animation-duration: 3s; animation-timing-function: ease;animation-iteration-count: infinite; display:block; background-color:lightcyan; width:175px; height:50px;">Изменить пароль</button>

                <a href="./"></a>
            </div>

        </div>
        <?php
        if ($_SESSION['user']['access'] == 1) { ?>
            <div class="exhibpanel">
                <h1>Выставки</h1>
                <div class="exhibBox" style="border: 1px solid red; ">
                    <?php
                    $result = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}'") or die("Error:" . mysqli_error($connect));


                    $numrows = mysqli_num_rows($result);

                    for ($i = 1; $i <= $numrows; ++$i) {
                        $row = mysqli_fetch_array($result);
                    ?>
                        <div style="width:30%; margin-bottom:20px; position:relative;">
                            <!-- <div class="krestikExhib">x</div> -->
                            <!-- <div class="form" style="border:1px solid red; width:30%; margin-bottom:20px;"> -->
                            <button type="submit" class="exhibBtn" name="exhib<?php echo $i ?>" id="<?php echo $i - 1; ?>" style="height: 100%; max-height:250px; width:100%;">
                                <div class="exhibitionCover">
                                    <img src="<?php echo "{$row['cover_path']}"; ?>" alt="" width="100%" class="exhImg">
                                    <div class="exhibTitle"><?php
                                                            echo "{$row['exhibTitle']}"
                                                            ?></div>
                                </div>
                                <div class="menuSel" id="<?php echo $i - 1; ?>">
                                    <ul class="hoverRange">
                                        <li><a class="selItem" href="exhibition.php?title=<?php echo "{$row['exhibTitle']}"; ?>&numEx=<?php echo "{$row['id']}" ?>&root=1">Редактировать</a></li>
                                        <li><a class="selItem" href="exhibition.php?title=<?php echo "{$row['exhibTitle']}"; ?>&numEx=<?php echo "{$row['id']}" ?>&root=0">Просмотреть</a></li>
                                        <li>
                                            <div>Опубликовать</div>
                                        </li>
                                        <li>
                                            <div>Удалить</div>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                            <!-- </div> -->


                        </div>
                        <!-- </form> -->
                    <?php }
                    ?>
                    <div style="width:30%; margin-bottom:20px; position:relative; height:219.16px;">
                        <div class="buttonAddVist"></div>
                    </div>
                    <?php
                    /* session_start();
                    require '../db.php';
                    mysqli_query($connect, "SET NAMES UTF8");
 *//* 
                    $result = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}'") or die("Error:" . mysqli_error($connect));
                    $numrows = mysqli_num_rows($result);


                    for ($i = 1; $i <= $numrows; ++$i) {
                        if (isset($_POST['exhib' . $i])) {
                            $result2 = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `numEx` = '$i'");
                            $row = mysqli_fetch_array($result2);
                            $_SESSION['exhibition']['title'] = $row['exhibTitle'];
                            $_SESSION['exhibition']['id'] = $row['numEx'];
                        }
                    }
 */
                    ?>
                </div>
            </div>
        <?php }
        ?>
        <div class="modalk_ava">
            <div class="board">
                <div class="header_modal">
                    <h1 class="modal_title">Изменение профиля: загрузка фотографии</h1>
                    <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
                </div>
                <div class="content_modal">
                    <?php
                    require_once './form/addAva_form.php'
                    ?>
                </div>
            </div>
        </div>
        <div class="modalk_redact">
            <div class="board">
                <div class="header_modal">
                    <h1 class="modal_title">Изменение профиля</h1>
                    <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
                </div>
                <div class="content_modal">
                    <?php
                    require_once './form/redact_form.php'
                    ?>
                </div>
            </div>
        </div>
        <div class="modalk_add">
            <div class="board">
                <div class="header_modal">
                    <h1 class="modal_title">Добавление новой выставки</h1>
                    <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
                </div>
                <div class="content_modal">
                    <?php
                    require_once './form/add_exhib_form.php';
                    ?>
                </div>

            </div>
        </div>
    <?php } else { ?>
        <div class="alert alert-danger" role="alert" style="width: 50%; margin:20px auto; text-align:center;">Для доступа к этой странице необходимо войти в профиль!</div>
    <?php } ?>
    <div class="modalk_password">
        <div class="board">
            <div class="header_modal">
                <h1 class="modal_title">Изменение пароля</h1>
                <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
            </div>
            <div class="content_modal">
                <?php
                require_once './form/addPassword.php';
                ?>
            </div>
        </div>
    </div>
    <?php

    require_once './components/bottom.php';

    ?>
</div>