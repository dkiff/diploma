<form method="post" class="formL">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput1" name="newName" value="<?php echo $_SESSION['user']['firstName'] ?>">
        <label for="floatingInput1">Имя:</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInpu2" name="newSurname" value="<?php echo $_SESSION['user']['secondName'] ?>">
        <label for="floatingInput2">Фамилия:</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput3" name="newJob" value="<?php echo $_SESSION['user']['job_title'] ?>">
        <label for="floatingInput3">Должность:</label>
    </div>
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput4" name="newEmail" value="<?php echo $_SESSION['user']['email'] ?>">
        <label for="floatingInput4">E-mail:</label>
    </div>
    <button type="submit" class="btn-primary btnRedact">Сохранить</button>
    <p class="none alert alert-danger" id="msgRe" role="alert" style="position: relative; width:60%; margin:20px auto; margin-bottom:0;"></p>
</form>

