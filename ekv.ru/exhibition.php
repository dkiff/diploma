<?php
session_start();

require_once './db.php';
mysqli_query($connect, "SET NAMES UTF8");
/* if (isset($_SESSION['exhibition']['title'])) {
  $title = "ЭКВ - {$_SESSION['exhibition']['title']}";
} */

$numEx = $_GET['numEx'];
$root = $_GET['root'];
$selectExh = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select exhibition: " . mysqli_error($connect));
for ($i = 0; $i < mysqli_num_rows($selectExh); ++$i) {
  $rowExh = mysqli_fetch_array($selectExh);
  $_SESSION['exhib']['title'] = $rowExh['exhibTitle'];
}

$title = $_SESSION['exhib']['title'];
require_once './components/topEx.php';
$_SESSION['numEx'] = $numEx;

?>

<div class="sitebarButton"><img class="arrow" src="./img/arrowSitebarR.svg" alt=""></div>

<?php
$selectRazdels = mysqli_query($connect, "SELECT * FROM `razdels` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select razdels: " . mysqli_error($connect));
$selectExh = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select exhibition: " . mysqli_error($connect));
for ($i = 0; $i < mysqli_num_rows($selectExh); ++$i) {
  $rowExh = mysqli_fetch_array($selectExh);
  $_SESSION['ex']['cover'] = $rowExh['cover_path'];
  $_SESSION['ex']['positionY'] = $rowExh['titlePY'];
  $_SESSION['ex']['positionX'] = $rowExh['titlePX'];
  $_SESSION['ex']['fontSize'] = $rowExh['titleFontSize'];
  $_SESSION['ex']['bg'] = $rowExh['titleBg'];
  $_SESSION['ex']['height'] = $rowExh['titleHeight'];
  $_SESSION['ex']['width'] = $rowExh['titleWidth'];
  $_SESSION['ex']['align'] = $rowExh['titleAlign'];
  $_SESSION['ex']['fontColor'] = $rowExh['titleFontColor'];
  $_SESSION['ex']['opacity'] = $rowExh['titleOpacity'];
  $_SESSION['ex']['fontFamily'] = $rowExh['titleFontFamily'];
  $_SESSION['ex']['titleBold'] = $rowExh['titleBold'];
  $_SESSION['ex']['titleItalic'] = $rowExh['titleItalic'];
  $_SESSION['ex']['titleUnderline'] = $rowExh['titleUnderline'];
  $_SESSION['ex']['titleRazdels'] = $rowExh['titleRazdels'];
}

for ($i = 0; $i < mysqli_num_rows($selectRazdels); ++$i) {
  $rowRazdelsNav = mysqli_fetch_array($selectRazdels);
  $_SESSION['razdelsNav'][$i] = $rowRazdelsNav['titleRazdel'];
}
?>
<div style="display: none" id="title"><?php echo $title; ?></div>
<div style="display: none" id="numEx"><?php echo $numEx; ?></div>
<div style="display: none" id="root"><?php echo $root; ?></div>
<div style="display: none" id="iduser"><?php echo $_SESSION['user']['id']; ?></div>
<div class="exhibCont" style=" margin:0; display:block;  padding:0;">


  <div class="headerExhibition">
    <div class="successMessage"></div>
    <span id="navTop" style="position: absolute; top:0; left:0;"></span>
    <?php
    if ($root == 1) {
    ?>
      <form action="" method="post" id="header">
      <?php } ?>
      <?php
      if ($root == 1) {
      ?>
        <div class="redactBox" style="left: calc(50vw - 23.9%);">
          <div class="titleRedactButtons">
            <label for="bg" class="changeBackground btnChange" title="Фон заголовка"></label>
            <label for="height" class="changeHeight btnChange" title="Высота заголовка"></label>
            <label for="width" class="changeWidth btnChange" title="Ширина заголовка"></label>
            <label for="align" class="changeAlign1 btnChange" data-left="left" title="Выравнивание заголовка по левому краю"></label>
            <label for="align" class="changeAlign2 btnChange" data-left="center" title="Выравнивание заголовка по центру"></label>
            <label for="align" class="changeAlign3 btnChange" data-left="right" title="Выравнивание заголовка по правому краю"></label>
            <label for="opacity" class="changeOpacity btnChange" title="Прозрачность фона заголовка"></label>
            <label for="fontSize" class="changeFont btnChange" title="Размер шрифта заголовка"></label>
            <label for="fontColor" class="changeFontColor btnChange" title="Цвет шрифта заголовка"></label>
            <label for="bold" class="changeBold btnChange" title="Жирное начертание шрифта заголовка"><b>Ж</b></label>
            <label for="italic" class="changeItalic btnChange" title="Курсивное начертание шрифта заголовка"><i>К</i></label>
          </div>
          <div class="titleRedactInputs">
            <input type="color" name="bg" id="bg" class="inputChange" value="<?php echo $_SESSION['ex']['bg']; ?>">
            <input type="text" name="height" id="height" class="inputChange" value="<?php echo $_SESSION['ex']['height']; ?>">
            <input type="text" name="width" id="width" class="inputChange" value="<?php echo $_SESSION['ex']['width']; ?>">
            <input type="text" name="align" id="align" class="inputChange align" value="<?php echo $_SESSION['ex']['align']; ?>">
            <div class="inputChange"></div>
            <div class="inputChange"></div>
            <input type="text" name="opacity" id="opacity" class="inputChange" value="<?php echo $_SESSION['ex']['opacity']; ?>">
            <input type="text" name="fontSize" id="fontSize" class="inputChange" value="<?php echo $_SESSION['ex']['fontSize']; ?>">
            <input type="color" name="fontColor" id="fontColor" class="inputChange" value="<?php echo $_SESSION['ex']['fontColor']; ?>">
            <input type="text" name="bold" id="bold" class="inputChange" value="<?php echo $_SESSION['ex']['titleBold']; ?>">
            <input type="text" name="italic" id="italic" class="inputChange" value="<?php echo $_SESSION['ex']['titleItalic']; ?>">
            <div class="dropdown" title="Подчеркивание заголовка">
              <button class="dropdown-toggle textDecorBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <u>Ч</u>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="dropdown-item" id="none">Нет</li>
                <li class="dropdown-item" style="text-decoration: underline;" id="underline">Образец</li>
                <li class="dropdown-item" style="text-decoration: dashed underline;" id="dashed underline">Образец</li>
                <li class="dropdown-item" style="text-decoration: dotted underline;" id="dotted underline">Образец</li>
                <li class="dropdown-item" style="text-decoration: wavy underline;" id="wavy underline">Образец</li>
              </ul>
            </div>
            <input type="text" name="textDecor" id="textDecor" style="display: none;" value="<?php echo $_SESSION['ex']['titleUnderline']; ?>">
            <select class="form-select inputFontFamily" aria-label="Default select example" id="fontFamily" style=" width:150px; border-color: black; border-radius:0; width:100px;">
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Courier New") {
                        echo 'selected';
                      } ?> class="inputFontFamily" value="Courier New" style=" width:150px; font-family:'Courier New';">Courier New</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Sofia Sans Extra Condensed") {
                        echo 'selected';
                      } ?> value="Sofia Sans Extra Condensed" class="inputFontFamily" style="font-family: 'Sofia Sans Extra Condensed'; font-weight:bold; font-size:24pt;">Sofia Sans Extra Condensed</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Pacifico") {
                        echo 'selected';
                      } ?> value="Pacifico" class="inputFontFamily" style="font-family: 'Pacifico'; font-size:20pt;">Pacifico</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Amatic SC") {
                        echo 'selected';
                      } ?> value="Amatic SC" class="inputFontFamily" style="font-family: 'Amatic SC';">Amatic SC</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Caveat") {
                        echo 'selected';
                      } ?> value="Caveat" class="inputFontFamily" style="font-family: 'Caveat';">Caveat</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Comfortaa") {
                        echo 'selected';
                      } ?> value="Comfortaa" class="inputFontFamily" style="font-family: 'Comfortaa';">Comfortaa</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Press Start 2P") {
                        echo 'selected';
                      } ?> value="Press Start 2P" class="inputFontFamily" style="font-family: 'Press Start 2P';">Press Start 2P</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Rubik Mono One") {
                        echo 'selected';
                      } ?> value="Rubik Mono One" class="inputFontFamily" style="font-family: 'Rubik Mono One';">Rubik Mono One</option>
              <option <?php if ($_SESSION['ex']['fontFamily'] == "Russo One") {
                        echo 'selected';
                      } ?> value="Russo One" class="inputFontFamily" style="font-family: 'Russo One';">Russo One</option>
            </select>
          </div>
        </div>
        <div class="change">
          Изменить обложку
        </div>
        <button class="saveTitle" title="Сохранить название выставки"></button>
      <?php } ?>
      <div class="coverEx">
        <!-- ./media/img/3/exhibitions/1/cover/Cover.png -->
        <img src="<?php echo $_SESSION['ex']['cover'];  ?>" alt="Обложка выставки">
      </div>
      <?php
      if ($root == 1) {
      ?>
        <div class="warning alert alert-info">

        </div>

        <div class="bg" style="opacity:<?php echo $_SESSION['ex']['opacity'] ?>; background-color:<?php echo $_SESSION['ex']['bg']; ?>; width:<?php echo $_SESSION['ex']['width']; ?>px; heigth:<?php echo $_SESSION['ex']['height']; ?>;top:<?php echo $_SESSION['ex']['positionY']; ?>%; left:<?php echo $_SESSION['ex']['positionX']; ?>%;""></div>
        
        <div class=" textareaBoxing" style="width:<?php echo $_SESSION['ex']['width']; ?>px; heigth:<?php echo $_SESSION['ex']['height']; ?>px; top:<?php echo $_SESSION['ex']['positionY']; ?>%; left:<?php echo $_SESSION['ex']['positionX']; ?>%;">
          <textarea name="title" class="exTitleInput" maxlength="60" style="font-style:'<?php echo $_SESSION['ex']['titleUnderline']; ?>'; font-weight:'<?php echo $_SESSION['ex']['titleBold']; ?>'; font-family: '<?php echo $_SESSION['ex']['fontFamily'] ?>'; color: <?php echo $_SESSION['ex']['fontColor']; ?>; font-size: <?php echo $_SESSION['ex']['fontSize']; ?>px; height:<?php echo $_SESSION['ex']['height']; ?>px; width:<?php echo $_SESSION['ex']['width']; ?>px;"><?php echo $_SESSION['exhib']['title']; ?></textarea>
        </div>
        <input type="text" name="pointX" id="pointX" value="<?php echo $_SESSION['ex']['positionX']; ?>" title="X" style="display: none;">
        <input type="text" name="pointY" id="pointY" value="<?php echo $_SESSION['ex']['positionY']; ?>" title="Y" style="display: none;">

      <?php } else { ?>
        <h1 class="exTitle"><?php echo $title; ?></h1>
      <?php } ?>

      <div class="sitebarNav">
        <ol class="navSiteBar">
          <a href="#navTop" class="titleRazdelNav">Начало</a>
          <a href="#navRazd" class="titleRazdelNav">Разделы</a>
          <li class="navItem">
            <a href="#razdelTitle0" class="titleRazdelNav"><?php echo $_SESSION['razdelsNav']['0'] ?></a>
            <ul class="books">
              <?php
              $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' AND `numRazdel` = '1'") or die("Error select books: " . mysqli_error($connect));
              for ($i = 0; $i < mysqli_num_rows($selectBooks); ++$i) {
                $rowBooksNav = mysqli_fetch_array($selectBooks);
              ?>
                <li class="bookItem"><a href="#razdel1Book<?php echo $i; ?>" class="navLinkSiteBar"><?php echo "{$rowBooksNav['titleBook']}" ?></a></li>
              <?php
              }
              ?>
            </ul>
          </li>
          <li class="navItem">
            <a href="#razdelTitle1" class="titleRazdelNav"><?php echo $_SESSION['razdelsNav']['1'] ?></a>
            <ul class="books">

              <?php
              $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' AND `numRazdel` = '2'") or die("Error select books: " . mysqli_error($connect));
              for ($i = 0; $i < mysqli_num_rows($selectBooks); ++$i) {
                $rowBooksNav = mysqli_fetch_array($selectBooks);
              ?>
                <li class="bookItem"><a href="#razdel2Book<?php echo $i; ?>" class="navLinkSiteBar"><?php echo "{$rowBooksNav['titleBook']}" ?></a></li>
              <?php
              }
              ?>
            </ul>
          </li>
          <li class="navItem">
            <a href="#razdelTitle2" class="titleRazdelNav"><?php echo $_SESSION['razdelsNav']['2'] ?></a>
            <ul class="books">
              <?php
              $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' AND `numRazdel` = '3'") or die("Error select books: " . mysqli_error($connect));
              for ($i = 0; $i < mysqli_num_rows($selectBooks); ++$i) {
                $rowBooksNav = mysqli_fetch_array($selectBooks);
              ?>
                <li class="bookItem"><a href="#razdel3Book<?php echo $i; ?>" class="navLinkSiteBar"><?php echo "{$rowBooksNav['titleBook']}" ?></a></li>
              <?php
              }
              ?>
            </ul>
          </li>
          <a href="#navAllBooks" class="titleRazdelNav">Все книги</a>

        </ol>
      </div>
      <?php if ($root == 1) { ?>
      </form>
    <?php } ?>
  </div>
  <?php
  $selectRazdelsTitle = mysqli_query($connect, "SELECT * FROM `exhibitions` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select razdels: " . mysqli_error($connect));

  $rowRazdelsTitle = mysqli_fetch_array($selectRazdelsTitle);
  $_SESSION['razdels']['titleT'] = $rowRazdelsTitle['titleRazdels'];
  $_SESSION['razdels']['razdelBgT'] = $rowRazdelsTitle['titleBgR'];
  $_SESSION['razdels']['razdelHeightT'] = $rowRazdelsTitle['titleHeightR'];
  $_SESSION['razdels']['razdelWidthT'] = $rowRazdelsTitle['titleWidthR'];
  $_SESSION['razdels']['razdelTextAlignT'] = $rowRazdelsTitle['titleAlignR'];
  $_SESSION['razdels']['razdelOpacityT'] = $rowRazdelsTitle['titleOpacityR'];
  $_SESSION['razdels']['razdelFontSizeT'] = $rowRazdelsTitle['titleFontSizeR'];
  $_SESSION['razdels']['razdelFontColorT'] = $rowRazdelsTitle['titleFontColorR'];
  $_SESSION['razdels']['razdelFontWeightT'] = $rowRazdelsTitle['titleBoldR'];
  $_SESSION['razdels']['razdelFontStyleT'] = $rowRazdelsTitle['titleItalicR'];
  $_SESSION['razdels']['razdelTextDecorationT'] = $rowRazdelsTitle['titleUnderlineR'];
  $_SESSION['razdels']['razdelFontFamilyT'] = $rowRazdelsTitle['titleFontFamilyR'];
  $_SESSION['razdels']['razdelPositionXT'] = $rowRazdelsTitle['titlePXR'];
  $_SESSION['razdels']['razdelPositionYT'] = $rowRazdelsTitle['titlePYR'];
  $_SESSION['razdels']['propBgBlock'] = $rowRazdelsTitle['propBgBlock'];
  ?>


  <div class="razdelsMenu" data-bgblock="<?php echo $_SESSION['razdels']['propBgBlock']; ?>" style="position: relative; background-color:<?php echo $_SESSION['razdels']['propBgBlock']; ?>;">
    <div class="btnChangeBg" style="margin-left: 35px;">Изменить цвет фона</div>

    <input type="text" name="pointX1" id="pointX1" value="<?php echo $_SESSION['razdels']["$i"]['razdelPositionX']; ?>" title="X" style=" display:none;position:absolute; top:0; left:0;">
    <input type="text" name="pointY1" id="pointY1" value="<?php echo $_SESSION['razdels']["$i"]['razdelPositionY']; ?>" title="Y" style="display:none;position:absolute; top:0; left:150px;">

    <span id="navRazd" style="position: absolute; top:0; left:0;"></span>




    <?php if ($root == 1) { ?>
      <form method="post">
        <button class="saveTitleRazdel" title="Сохранить названия разделов"></button>
        <input type="text" style="display: none;" id="selectEl">
        <div class="redactBoxRazdels" style=" left: calc(50vw - 27.5%);">
          <div class="titleRedactButtons">
            <label for="bgRT" class="changeBackground2 btnChange" title="Фон заголовка"></label>
            <label class="changeBgImgR btnChange" title="Картинка, как фон фигуры раздела"></label>
            <label for="heightRT" class="changeHeight2 btnChange" title="Высота заголовка"></label>
            <label for="widthRT" class="changeWidth2 btnChange" title="Ширина заголовка"></label>
            <label for="alignRT" class="changeAlign4 btnChange" data-left="left" title="Выравнивание заголовка по левому краю"></label>
            <label for="alignRT" class="changeAlign5 btnChange" data-left="center" title="Выравнивание заголовка по центру"></label>
            <label for="alignRT" class="changeAlign6 btnChange" data-left="right" title="Выравнивание заголовка по правому краю"></label>
            <label for="opacityRT" class="changeOpacity2 btnChange" title="Прозрачность фона заголовка"></label>
            <label for="fontSizeRT" class="changeFont2 btnChange" title="Размер шрифта заголовка"></label>
            <label for="fontColorRT" class="changeFontColor2 btnChange" title="Цвет шрифта заголовка"></label>
            <label for="boldRT" class="changeBold2 btnChange" title="Жирное начертание шрифта заголовка"><b>Ж</b></label>
            <label for="italicRT" class="changeItalic2 btnChange" title="Курсивное начертание шрифта заголовка"><i>К</i></label>
          </div>
          <div class="titleRedactInputs">
            <input type="color" name="bg" id="bgRT" class="inputChange" value="rgb(255, 0, 0)">
            <div class="inputChange"></div>
            <input type="text" name="height" id="heightRT" class="inputChange">
            <input type="text" name="width" id="widthRT" class="inputChange">
            <input type="text" name="align" id="alignRT" class="inputChange align">
            <div class="inputChange"></div>
            <div class="inputChange"></div>
            <input type="text" name="opacityRT" id="opacityRT" class="inputChange">
            <input type="text" name="fontSizeRT" id="fontSizeRT" class="inputChange">
            <input type="color" name="fontColorRT" id="fontColorRT" class="inputChange">
            <input type="text" name="bold" id="boldRT" class="inputChange">
            <input type="text" name="italic" id="italicRT" class="inputChange">
            <div class="dropdown" title="Подчеркивание заголовка">
              <button class="dropdown-toggle textDecorBtn2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <u>Ч</u>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li class="dropdown-item dropdown-item2" id="none">Нет</li>
                <li class="dropdown-item dropdown-item2" style="text-decoration: underline;" id="underline">Образец</li>
                <li class="dropdown-item dropdown-item2" style="text-decoration: dashed underline;" id="dashed underline">Образец</li>
                <li class="dropdown-item dropdown-item2" style="text-decoration: dotted underline;" id="dotted underline">Образец</li>
                <li class="dropdown-item dropdown-item2" style="text-decoration: wavy underline;" id="wavy underline">Образец</li>
              </ul>
            </div>
            <input type="text" name="textDecor" id="textDecorRT" style="display: none;">
            <select class="form-select inputFontFamily2" aria-label="Default select example" id="fontFamily" style=" width:150px; border-color: black; border-radius:0; width:100px;">
              <option class="inputFontFamily2" value="Courier New" style=" width:150px; font-family:'Courier New';">Courier New</option>
              <option value="Sofia Sans Extra Condensed" class="inputFontFamily2" style="font-family: 'Sofia Sans Extra Condensed'; font-weight:bold; font-size:24pt;">Sofia Sans Extra Condensed</option>
              <option value="Pacifico" class="inputFontFamily2" style="font-family: 'Pacifico'; font-size:20pt;">Pacifico</option>
              <option value="Amatic SC" class="inputFontFamily2" style="font-family: 'Amatic SC';">Amatic SC</option>
              <option value="Caveat" class="inputFontFamily2" style="font-family: 'Caveat';">Caveat</option>
              <option value="Comfortaa" class="inputFontFamily2" style="font-family: 'Comfortaa';">Comfortaa</option>
              <option value="Press Start 2P" class="inputFontFamily2" style="font-family: 'Press Start 2P';">Press Start 2P</option>
              <option value="Rubik Mono One" class="inputFontFamily2" style="font-family: 'Rubik Mono One';">Rubik Mono One</option>
              <option value="Russo One" class="inputFontFamily2" style="font-family: 'Russo One';">Russo One</option>
            </select>
            <div class="dropdown" title="Фигура">
              <button class="dropdown-toggle textDecorBtn2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="width:auto;">Выбрать фигуру</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="width: auto;">
                <li class="dropdown-item dropdown-item3" style="height:100px; color:white;" id="rectangle">
                  <svg width="100%" height="auto" style="border:1px solid red; display:flex; justify-content:center; align-items:center">
                    <rect y="25" width="100%" height="50%" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
                  </svg>
                </li>
                <li class="dropdown-item dropdown-item3" style="color:white;" id="oval">
                  <svg width="100%" height="auto" style="border:1px solid red; display:flex; justify-content:center; align-items:center">
                    <rect y="25" rx="100%" ry="100%" width="100%" height="50%" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
                  </svg>
                </li>
                <li class="dropdown-item dropdown-item3" style="color:white;" id="petal">
                  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 512" width="100%" height="auto" style="border:1px solid red; display:flex; justify-content:center; align-items:center">
                    <path width="100%" height="50%" style="fill:rgb(0,0,255);stroke-width:3px;stroke:rgb(0,0,0)" d="m0 0h650c82.8 0 150 67.2 150 150v362h-650c-82.8 0-150-67.2-150-150z" />
                  </svg>
                </li>
              </ul>
            </div>
            <input type="text" name="figure" id="figure" style="display: none;">
          </div>
        </div>


        <div class="textareaBoxingRazdels" data-razdels="title" style="z-index:-10000;">
          <textarea name="titleRazdels" id="titleRazdels" style='max-height: 250px; height: <?php echo $_SESSION['razdels']['razdelHeightT']; ?>px; width: <?php echo $_SESSION['razdels']['razdelWidthT']; ?>px; font-family:<?php echo $_SESSION['razdels']['razdelFontFamilyT']; ?>; text-decoration: <?php echo $_SESSION['razdels']['razdelTextDecorationT']; ?>; font-style: <?php echo $_SESSION['razdels']['razdelFontStyleT']; ?>; font-weight: <?php echo $_SESSION['razdels']['razdelFontWeightT']; ?>; text-align: <?php echo $_SESSION['razdels']['razdelTextAlignT']; ?>; font-size:<?php echo $_SESSION['razdels']['razdelFontSizeT']; ?>px; color:<?php echo $_SESSION['razdels']['razdelFontColorT']; ?>;' data-clr="<?php echo $_SESSION['razdels']['razdelFontColorT']; ?>"><?php echo $_SESSION['razdels']['titleT']; ?></textarea>
          <div class="bgRazdelsTitle" style="max-height: 250px; background-color: <?php echo $_SESSION['razdels']['razdelBgT']; ?>;  height: <?php echo $_SESSION['razdels']['razdelHeightT']; ?>px; width: <?php echo $_SESSION['razdels']['razdelWidthT']; ?>px; opacity: <?php echo $_SESSION['razdels']['razdelOpacityT']; ?>;" data-bgr="<?php echo $_SESSION['razdels']['razdelBgT']; ?>"></div>
        </div>
      <?php } else { ?>
        <h1 class="pageTitle" id="titlePageRazdel">Разделы</h1>
      <?php } ?>
      <div class="warning2 alert alert-info"></div>
      <div class="razdelMenuButonns">
        <?php
        $selectRazdels = mysqli_query($connect, "SELECT * FROM `razdels` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select razdels: " . mysqli_error($connect));
        for ($i = 0; $i < mysqli_num_rows($selectRazdels); ++$i) {
          $rowRazdels = mysqli_fetch_array($selectRazdels);
          $_SESSION['razdels']["$i"]['title'] = $rowRazdels['titleRazdel'];
          $_SESSION['razdels']["$i"]['razdelBg'] = $rowRazdels['razdelBg'];
          $_SESSION['razdels']["$i"]['razdelHeight'] = $rowRazdels['razdelHeight'];
          $_SESSION['razdels']["$i"]['razdelWidth'] = $rowRazdels['razdelWidth'];
          $_SESSION['razdels']["$i"]['razdelTextAlign'] = $rowRazdels['razdelTextAlign'];
          $_SESSION['razdels']["$i"]['razdelOpacity'] = $rowRazdels['razdelOpacity'];
          $_SESSION['razdels']["$i"]['razdelFontSize'] = $rowRazdels['razdelFontSize'];
          $_SESSION['razdels']["$i"]['razdelFontColor'] = $rowRazdels['razdelFonColor'];
          $_SESSION['razdels']["$i"]['razdelFontWeight'] = $rowRazdels['razdelFontWeight'];
          $_SESSION['razdels']["$i"]['razdelFontStyle'] = $rowRazdels['razdelFontStyle'];
          $_SESSION['razdels']["$i"]['razdelTextDecoration'] = $rowRazdels['razdelTextDecoration'];
          $_SESSION['razdels']["$i"]['razdelFontFamily'] = $rowRazdels['razdelFontFamily'];
          $_SESSION['razdels']["$i"]['razdelBorderRadius'] = $rowRazdels['razdelBorderRadius'];
          $_SESSION['razdels']["$i"]['razdelPositionX'] = $rowRazdels['positionX'];
          $_SESSION['razdels']["$i"]['razdelPositionY'] = $rowRazdels['positionY'];
          if ($_SESSION['razdels']["$i"]['razdelPositionX'] != '') {
            $position = 'absolute';
          } else {
            $position = 'relative';
          }

        ?>

          <div class="razdelMenuButton" id="<?php echo $i + 1; ?>" style="/* width:388px; height:432px; */">
            <!-- <div class="razdelMenuBG" id="<?php echo $i + 1; ?>" style="border-radius:0px;"></div> -->
            <div class="razdelMenuImg">
              <img src="<?php echo $_SESSION['ex']['cover']; ?>" alt="" class="razdImg" id='<?php echo $i + 1; ?>' style="border-radius:0px;">
            </div>
            <?php
            if ($root == 1) { ?>
              <!-- bgRazdels -->
              <div style="top: <?php echo $_SESSION['razdels']["$i"]['razdelPositionY']; ?>%; left: <?php echo $_SESSION['razdels']["$i"]['razdelPositionX']; ?>%; border-radius:<?php echo $_SESSION['razdels']["$i"]['razdelBorderRadius'] ?>; height: <?php echo $_SESSION['razdels']["$i"]['razdelHeight']; ?>px; width:<?php echo $_SESSION['razdels']["$i"]['razdelWidth']; ?>px; opacity:<?php echo $_SESSION['razdels']["$i"]['razdelOpacity']; ?>; background-color:<?php echo $_SESSION['razdels']["$i"]['razdelBg']; ?>;" class="bgRazdels" id="<?php echo $i + 1; ?>" data-bgr1="<?php echo  $_SESSION['razdels']["$i"]['razdelBg']; ?>"></div>
              <!-- razdTitleInput -->

              <textarea style="z-index:1000000; position:absolute; top: <?php echo $_SESSION['razdels']["$i"]['razdelPositionY']; ?>%; left: <?php echo $_SESSION['razdels']["$i"]['razdelPositionX']; ?>%; border-radius:<?php echo $_SESSION['razdels']["$i"]['razdelBorderRadius'] ?>; height: <?php echo $_SESSION['razdels']["$i"]['razdelHeight']; ?>px; width:<?php echo $_SESSION['razdels']["$i"]['razdelWidth']; ?>px; font-size:<?php echo $_SESSION['razdels']["$i"]['razdelFontSize']; ?>px ; font-family:<?php echo $_SESSION['razdels']["$i"]['razdelFontFamily']; ?>; text-align: <?php echo $_SESSION['razdels']["$i"]['razdelTextAlign']; ?>; color:<?php echo $_SESSION['razdels']["$i"]['razdelFontColor']; ?>; font-weight: <?php echo $_SESSION['razdels']["$i"]['razdelFontWeight']; ?>; font-style: <?php echo $_SESSION['razdels']["$i"]['razdelFontStyle']; ?>; text-decoration: <?php echo $_SESSION['razdels']["$i"]['razdelTextDecoration']; ?>;" name="titleRazdel<?php echo $i; ?>" class="razdTitleInput razdelItem item<?php echo $i; ?>" maxlength="35" id="<?php echo $i; ?>" data-clr2="<?php echo $_SESSION['razdels']["$i"]['razdelFontColor']; ?>"><?php echo $_SESSION['razdels']["$i"]['title']; ?></textarea>
            <?php } else { ?>
              <a href="#razdelTitle<?php echo $i; ?>" class="nameRazd"><?php echo $_SESSION['razdels']["$i"]['title']; ?></a>
            <?php }
            ?>

          </div>
        <?php } ?>

      </div>
      <?php if ($root == 1) { ?>
      </form>
    <?php } ?>

  </div>
  <?php
  $selectRazdels = mysqli_query($connect, "SELECT * FROM `razdels` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx'") or die("Error select razdels: " . mysqli_error($connect));

  for ($i = 0; $i < mysqli_num_rows($selectRazdels); ++$i) {
    $rowRazdels = mysqli_fetch_array($selectRazdels);
    $_SESSION['razdels']["$i"]['title'] = $rowRazdels['titleRazdel'];
    if ($i % 2 != 0) {
      $style = "white";
    } else {
      $style = "lightgray";
    }
  ?>

    <div class="razdel" id="<?php echo $i + 1; ?>" style="background-color: <?php echo $style; ?>;">
      <div class="modalkAddBo">
        <div class="board">
          <div class="header_modal">
            <h1 class="modal_title">Добавление Библиографической записи новой книги:</h1>
            <span class="modal_close" style="align-self: center; margin-top: 5px; margin-right: 15px;">×</span>
          </div>
          <div class="content_modal">
            <?php include './form/addBookForm.php'; ?>

          </div>
        </div>
      </div>
      <?php if ($root == 1) {
        $border = "2px solid black;"; ?>
        <form method="post">
          <input type="text" class="hiddenInput" value="<?php echo $i + 1; ?>" id="<?php echo $i + 1 ?>" disabled="true">
        <?php } ?>

        <h1 class="razdelTitle" id="razdelTitle<?php echo $i; ?>"><?php echo $_SESSION['razdels']["$i"]['title']; ?></h1>
        <div class="books">
          <?php
          $k = $i + 1;
          $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' AND `numRazdel` = '$k'") or die("Error select books: " . mysqli_error($connect));


          for ($j = 0; $j < 15; ++$j) {
            $rowBooks = mysqli_fetch_array($selectBooks);
            if ($i != 0) {
              $koff = $i + 1;
            }


          ?>

            <a href="#razdel<?php echo $i + 1; ?>Book<?php echo $j; ?>" class="book<?php echo $koff; ?> booksNone<?php echo $koff; ?>" id="<?php echo $j; ?>" data-num="<?php echo $j; ?>">
              <?php
              if ($rowBooks['img'] === "Добавить обложку") {
                $display = 'flex';
              } else {
                $display = 'none';
              }
              $display2 = "block";
              if ($root == 1) { ?>

                <div class="krestik<?php echo $koff; ?>" id="<?php echo $j; ?>" data-num="<?php echo $j; ?>">x</div>
                <div class="fishText<?php echo $koff; ?> fishTextNone<?php echo $i + 1; ?>" style="display:<?php echo  $display; ?>;" id="<?php echo $j; ?>"><span class="fishSpan<?php echo $koff; ?> fishSpanNone<?php echo $i + 1; ?>" id="<?php echo $j; ?>" data-razdel="<? echo $i + 1; ?>"><?php echo  $rowBooks['img']; ?></span></div>
              <?php }  ?>

              <img style="display: <?php echo $display2; ?> ;" src="<?php echo  $rowBooks['img']; ?>" alt="<?php echo $rowBooks['titleBook']; ?>" class="imgBook imgBook<?php echo $i + 1; ?> imgNone<?php echo $i + 1; ?>" id="<?php echo $j; ?>">
            </a>

          <?php
          } ?>

          <?php
          if ($root == 1) { ?>
            <div class="buttonAddBook<?php echo $i + 1; ?>" id="<?php echo $i; ?>"></div>
          <?php }  ?>

        </div>
        <?php
        if ($root == 1) { ?>
        </form>
      <?php } ?>

    </div>



    <div class="desc" style="background-color: <?php echo $style; ?>;">
      <?php


      $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' AND `numRazdel` = '$k'") or die("Error select books2: " . mysqli_error($connect));
      for ($r = 0; $r < 15; ++$r) {
        $rowBooks2 = mysqli_fetch_array($selectBooks);
      ?>

        <div class="bookDesc<?php echo $koff; ?> bookDescNone<?php echo $i + 1; ?>" id="<?php echo $r; ?>">
          <span id="razdel<?php echo $i + 1 ?>Book<?php echo $r; ?>" style="position:absolute; top:0; left:0;"></span>
          <div class="bookCover">
            <?php if ($root == 1) { ?>
              <div class="fishTextDesc<?php echo $koff; ?> fishTextDescNone<?php echo $i + 1; ?>" style="display:<?php echo  $display; ?>;" id="<?php echo $r; ?>"><span class="fishSpanDesc<?php echo $koff; ?> fishSpanDescNone<?php echo $i + 1; ?>" id="<?php echo $r; ?>" data-razdel="<? echo $i + 1; ?>"><?php echo  $rowBooks2['img']; ?></span></div>
            <?php } ?>
            <img src="<?php echo  $rowBooks2['img']; ?>" alt="<?php echo $rowBooks2['titleBook']; ?>" class="imgForDesc<?php echo $koff; ?> imgForDescNone<?php echo $i + 1; ?>" id="<?php echo $r; ?>">
          </div>

          <div class="description">
            <?php if ($root == 1) { ?>
              <form action="" method="post">

              <?php } ?>
              <?php if ($root != 1) { ?>
                <h1 class="titleDescription<?php echo $koff; ?> titleDescriptionNone<?php echo $i + 1; ?>"><?php echo $rowBooks2['titleBook'] ?></h1>
                <h3 class="author authorNone<?php echo $i + 1; ?>"><?php echo $rowBooks2['authorName']; ?> <?php echo $rowBooks2['authorFamil'] ?></h3>
              <?php } ?>


              <div class="bo<?php echo $koff; ?> boNone<?php echo $i + 1; ?>">

                <?php
                if ($root == 1) { ?>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput1" name="authorFamilBo" value="<?php echo $rowBooks2['authorFamil']; ?>" style="width:max-content;" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput1">Фамилия автора</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput2" name="authorNameBo" value="<?php echo $rowBooks2['authorName']; ?>" style="width:auto;" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput2">Имя автора</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput1" name="authorFathernameBo" value="<?php echo $rowBooks2['fatherName']; ?>" style="width:auto;" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput1">Отчество автора</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput3" name="titleBookBo" value="<?php echo $rowBooks2['titleBook'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput3">Заглавие</label>
                  </div>
                  <div class="redactBoInp">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput4" name="textFactsBo" value="<?php echo $rowBooks2['textFacts']; ?>" style="display:inline; width:334px;" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                      <label for="floatingInput4">Сведения относящиеся к заглавию</label>
                    </div>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput5" name="cityBo" value="<?php echo $rowBooks2['city'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput5">Город издания</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput6" name="izdatelBo" value="<?php echo $rowBooks2['izdatel'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput6">Издательство</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput8" name="seriaBo" value="<?php echo $rowBooks2['seria'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput8">Серия</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput7" name="yearBo" value="<?php echo $rowBooks2['year'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput7">Год издания</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput7" name="volumeBo" value="<?php echo $rowBooks2['volume'] ?>" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>">
                    <label for="floatingInput7">Количество страниц</label>
                  </div>
                  <br>






                <?php
                } else {
                  if ($rowBooks2['authorFamil'] != "" and $rowBooks2['authorName'] != "") {
                    if ($rowBooks2['fatherName'] != "") {
                      echo "{$rowBooks2['authorFamil']} {$rowBooks2['authorName']} {$rowBooks2['fatherName']}.";
                    } else {
                      echo "{$rowBooks2['authorFamil']} {$rowBooks2['authorName']}.";
                    }
                  }

                  echo " {$rowBooks2['titleBook']}";

                  if ($rowBooks2['textFacts'] != "") {
                    echo ": {$rowBooks2['textFacts']}";
                  } else {
                    echo " / ";
                  }

                  if ($rowBooks2['authorFamil'] != "" and  $rowBooks2['authorName'] != "") {
                    if ($rowBooks2['fatherName'] != "") {
                      echo " / {$rowBooks2['authorName']} {$rowBooks2['fatherName']} {$rowBooks2['authorFamil']}. — ";
                    } else {
                      echo " / {$rowBooks2['authorName']} {$rowBooks2['authorFamil']}. — ";
                    }
                  } else {
                    echo " / ";
                  }

                  if ($rowBooks2['city'] != "") {
                    echo "{$rowBooks2['city']} : {$rowBooks2['izdatel']}, ";
                  }

                  if ($rowBooks2['year'] != "") {
                    echo "{$rowBooks2['year']}";
                  }

                  if ($rowBooks2['seria'] != "") {
                    echo ". — ({$rowBooks2['seria']}).";
                  } else {
                    echo ".";
                  }
                }

                ?>
              </div>
              <?php if ($root == 1) { ?>
                <div class="textarea">
                  <label for="Textarea">Аннотация: </label>
                  <textarea class="form-control redactBoInp" placeholder="Leave a comment here" id="Textarea" name="annotationBo" style="margin-bottom: 20px; min-height:150px; max-height:200px;" title="Аннотация" data-razdel="<?php echo $i + 1; ?>" data-numbook="<?php echo $r + 1; ?>"><?php echo $rowBooks2['annotation'] ?></textarea>
                </div>
              <?php
              } else {
              ?>
                <p class="annotation<?php echo $koff; ?> annotationNone<?php echo $i + 1; ?>"><?php echo $rowBooks2['annotation']; ?></p>
              <?php } ?>
              <?php if ($root == 1) { ?>
                <span class="redactCoverBookDesc" id="<?php echo $r; ?>" data-razdel="<? echo $i + 1; ?>">Изменить обложку</span>
              <?php } ?>
              <?php if ($root == 1) { ?>
                <button class="saveBo" title="Сохранить библиографическую запись" id="<?php echo $r + 1; ?>" data-razdel="<?php echo $i + 1; ?>"></button>
              </form>
            <?php } ?>
          </div>
        </div>
      <?php }
      ?>

    </div><?php } ?>

  <div class="allBooks">
    <span id="navAllBooks" style="position: absolute; top:0; left:0;"></span>
    <h1 class="pageTitle" style="height: auto !important; margin-top:35px;">Все книги</h1>
    <div class="books" style="margin-top: 0;">
      <?php
      $selectBooks = mysqli_query($connect, "SELECT * FROM `books` WHERE `id_user` = '{$_SESSION['user']['id']}' AND `numEx` = '$numEx' ORDER BY `numRazdel`") or die("Error select books: " . mysqli_error($connect));
      for ($i = 0; $i < mysqli_num_rows($selectBooks); ++$i) {
        $rowAllBooks = mysqli_fetch_array($selectBooks);
        /*    if($rowAllBooks['numRazdel']=='1'){
          $razdelForNav = 1;
        }
        if($rowAllBooks['numRazdel']=='2'){
          $razdelForNav = 2;
        }
        if($rowAllBooks['numRazdel']=='3'){
          $razdelForNav = 3;
        } */
      ?>

        <a href="#razdel<?php echo "{$rowAllBooks['numRazdel']}" ?>Book<?php echo $rowAllBooks['numBook'] - 1 ?>" class="book" style="display:block;"><img src="<?php echo "{$rowAllBooks['img']}"; ?>" alt="" class="imgbook"></a>
      <?php
      }
      ?>
    </div>
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
    </div>
  </div>


  <?php
  include './components/bottom.php';
  ?>