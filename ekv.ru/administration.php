<?php
session_start();
$title = "ВКВ - Главная страница";
include './components/top.php';
require_once './db.php';
mysqli_query($connect, "SET NAMES UTF8");
?>

<div class="requests">
    <h1 class="requestTitle">Запросы</h1>
    <table>
        <thead>
            <th style="width: 5px;">id</th>
            <th style="width:200px;">Фамилия пользователя</th>
            <th style="width:200px;">Имя пользователя</th>
            <th style="width:200px;">Отчество пользователя</th>
            <th style="width:200px;">Место работы</th>
            <th style="width:200px;">Должность</th>
            <th style="width:200px;">Email</th>
            <th style="width: 100px;">Дата регистрации</th>
            <th style="border: none;"></th>
        </thead>
        <?php
        $selectRequests = mysqli_query($connect, "SELECT * FROM `requests`");
        for ($i = 1; $i <= mysqli_num_rows($selectRequests); ++$i) {
            $reqRow = mysqli_fetch_array($selectRequests);
        ?>
            <tr class="stroka" id="<?php echo $i; ?>">
                <td style="text-align: center; padding: 0 5px;" id="idRequest"><?php echo $reqRow['id']; ?></td>
                <td style="padding: 0 5px;" id="surname<?php echo $i; ?>"><?php echo $reqRow['user_surname']; ?></td>
                <td style="padding: 0 5px;" id="name<?php echo $i; ?>"><?php echo $reqRow['user_name']; ?></td>
                <td style="padding: 0 5px;" id="fatherName<?php echo $i; ?>"><?php echo $reqRow['user_fatherName']; ?></td>
                <td style="padding: 0 5px;" id="jobPlace<?php echo $i; ?>"><?php echo $reqRow['user_jobPlace']; ?></td>
                <td style="padding: 0 5px;" id="job<?php echo $i; ?>"><?php echo $reqRow['user_job']; ?></td>
                <td style="padding: 0 5px;" id="email<?php echo $i; ?>"><?php echo $reqRow['user_email']; ?></td>
                <td style="padding: 0 5px;" id="date<?php echo $i; ?>"><?php echo $reqRow['date']; ?></td>
                <td style="border: none;"><button style=" width:250px; border:none;" class="generator" id="<?php echo $i; ?>">Сгенерировать логин и пароль и отправить</button></td>
            </tr>
        <?php } ?>
        <template id="addUser">
            <tr>
                <td class="idReq id"></td>
                <td class="login"><input type="text" name="login" id="loginUser" value=""></td>
                <td class="surname"><input type="text" name="surnameUser" id="surnameUser" value=""></td>
                <td class="name"><input type="text" name="nameUser" id="nameUser" value=""></td>
                <td class="fatherName"><input type="text" name="fatherNameUser" id="fatherNameUser" value=""></td>
                <td class="jobPlace"><input type="text" name="jobPlace" id="jobPlace" value=""></td>
                <td class="job"><input type="text" name="job" id="job" value=""></td>
                <td class="email"><input type="text" name="email" id="email" value=""></td>
                <td class="date"></td>
                <td class="access"><input type="checkbox" name="access" id="access"></td>
                <td class="adminAccess"><input type="checkbox" name="admin" id="admin"></td>
            </tr>
        </template>
    </table>
</div>
<div class="users">
    <div class="headcontainer">
        <h1 class="usersTitle">Пользователи</h1>
        <input type="text" name="searchUser" id="searchUser" placeholder="Поиск" class="searchUser">
        <select name="selectSearchUser" id="selectSearchUser">
            <option value="default">Критерии поиска</option>
            <option value="id">По id</option>
            <option value="login">По логину</option>
            <option value="surname">По фамилии</option>
            <option value="name">По имени</option>
            <option value="jobPlace">По месту работы</option>
        </select>
        <button style="margin-left: 20px; height:45px; width:30%;" id="searchUserClearBtn">Сбросить</button>
    </div>
    <form method="post">
        <div class="scrollTable">
            <table id="usersTable">
                <thead style="position:sticky; top:0;">
                    <th style="width: 5px;">id</th>
                    <th>Логин</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Место работы</th>
                    <th>Должность</th>
                    <th>Email</th>
                    <th>Дата регистрации</th>
                    <th>Доступ к конструированию выставок</th>
                    <th>Админ</th>
                </thead>
                <?php
                $selectUsers = mysqli_query($connect, "SELECT * FROM `users`");
                for ($i = 1; $i <= mysqli_num_rows($selectUsers); ++$i) {
                    $rowUsers = mysqli_fetch_array($selectUsers); ?>

                    <tr class="us" id="<?php echo $rowUsers['id']; ?>">
                        <td class="idU id userId" id="<?php echo $rowUsers['id']; ?>"><?php echo $rowUsers['id']; ?></td>
                        <td class="login" id="<?php echo $rowUsers['id']; ?>"><input type="text" class="userLogin" name="login" id="loginUser" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['login'] ?>"><span style="display: none;"><?php echo $rowUsers['login'] ?></span></td>
                        <td class="surname" id="<?php echo $rowUsers['id']; ?>"><input type="text" class="userSurname" name="surnameUser" id="surnameUser" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['secondName']; ?>"></td>
                        <td class="name" id="<?php echo $rowUsers['id']; ?>"><input type="text" class="userName" name="nameUser" id="nameUser" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['firstName']; ?>"></td>
                        <td class="fatherName userFathername" id="<?php echo $rowUsers['id']; ?>"><input type="text" name="fatherNameUser" data-userid="<?php echo $rowUsers['id']; ?>" id="fatherNameUser" value="<?php echo $rowUsers['fatherName']; ?>">
                        </td>
                        <td class="jobPlace" id="<?php echo $rowUsers['id']; ?>"><input type="text" class="userJobPlace" name="jobPlace" id="jobPlace" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['jobPlace']; ?>"></td>
                        <td class="job userJob" id="<?php echo $rowUsers['id']; ?>"><input type="text" name="job" id="job" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['job']; ?>"></td>
                        <td class="email userEmail" id="<?php echo $rowUsers['id']; ?>"><input type="text" name="email" id="email" data-userid="<?php echo $rowUsers['id']; ?>" value="<?php echo $rowUsers['email']; ?>"></td>
                        <td id="<?php echo $rowUsers['id']; ?>"><?php echo $rowUsers['data']; ?></td>
                        <td class="access" data-userid="<?php echo $rowUsers['id']; ?>"><input type="checkbox" name="access" id="access" data-id="<?php echo $rowUsers['id']; ?>" <?php if ($rowUsers['access'] == '1') {
                                                                                                                                            echo 'checked';
                                                                                                                                            $data1 = 'checked';
                                                                                                                                        } else {
                                                                                                                                            echo '';
                                                                                                                                            $data1 = '';
                                                                                                                                        } ?> data-checked="<?php echo $data1 ?>"></td>
                        <td class="adminAccess" id="<?php echo $rowUsers['id']; ?>"><input type="checkbox" name="admin" id="admin" data-id="<?php echo $rowUsers['id']; ?>" <?php if ($rowUsers['adminAccess'] == '1') {
                                                                                                                                            echo 'checked';
                                                                                                                                            $data2 = 'checked';
                                                                                                                                        } else {
                                                                                                                                            echo '';
                                                                                                                                            $data2 = '';
                                                                                                                                        } ?> data-checked="<?php echo $data2 ?>"></td>
                    </tr>
                <?php } ?>
            </table>
        </div>
    </form>
</div>
<?php
require_once './components/bottom.php';
?>