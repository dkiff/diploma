</div>
<?php
$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$trimurl = mb_substr($url, 0, 28)
?>
<footer style="">
    <div class="containerFoot">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start hed flex-wrap-nowrap">
            <div class="titleBox d-flex flex-nowrap align-items-center justify-content-center justify-content-lg-start hed">
                <div class="logo"></div>
                <a href="/index.php" class="mb-2 mb-lg-0 text-dark text-decoration-none headerTitle">
                    <span style="font-size: 16pt; color: white;">Электронные<br> </span>
                    <span style="font-size: 18pt; color: white;">Книжные</span><br>
                    <span style="font-size: 10pt; text-transform: uppercase; color: white;">выставки</span>
                </a>
            </div>
            <ul class="headerMenu nav col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style="margin-left:150px;">
                <li class="hedlink"><a href="index.php" class="nav-link px-2 text-white ">Главная
                        страница</a>
                </li>
                <li class="hedlink"><a href="profile.php" class="nav-link px-2 text-white">Профиль</a></li>
                <li class="hedlink"><a href="#" class="nav-link px-2 text-white">Помощь</a></li>
            </ul>
            <p class="cop">©Никифоров Даниил</p>
        </div>


</footer>
</div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<!-- <script src="./modules/toggle_theme.js"></script> -->
<script src="./modules/modal.js"></script>
<script src="./modules/ajax.js"></script>
<script src="./modules/addAva.js"></script>
<script src="./modules/ajaxFile.js"></script>
<script src="./modules/style.js"></script>
<script src="./modules/less.js"></script>
<script src="./modules/siteBar.js"></script>
<script src="./modules/redactRazdels.js"></script>
<script src="./modules/dragAndDrop.js"></script>
<script src="./modules/generator.js"></script>
</body>

</html>