<form method="POST" class="clearfix formL" id="formReg">
    <input type="text" name="nameUserF" id="nameUserF" class="form-control" placeholder="Имя">
    <input type="text" name="surnameUserF" id="surnameUserF" class="form-control" placeholder="Фамилия">
    <input type="text" name="fatherNameUserF" id="fatherNameUserF" class="form-control" placeholder="Отчество">
    <input type="email" name="emailR" id='register_email' placeholder="Ваша электронная почта (E-mail):" class="form-control" title="На указанный E-mail будут отправлены логин и пароль" require>
    <input type="text" name="jobPlaceF" id="jobPlaceF" class="form-control" placeholder="Место работы">
    <input type="text" name="jobF" id="jobF" class="form-control" placeholder="Должность">
    <button type="submit" class="btn-primary btnReg" name="btnRegistr">Зарегистрироваться</button>
    <p class="none alert alert-danger" id="msgR" role="alert" style="position: relative; width:60%; margin:20px auto; margin-bottom:0;"></p>
</form>
<div class="msgbox">
    <p class="none alert alert-success" id="msgs" role="alert"></p>
</div>