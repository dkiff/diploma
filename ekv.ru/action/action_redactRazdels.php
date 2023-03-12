<?php
session_start();
require_once '../db.php';
mysqli_query($connect, "SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];
$k = 0;

for ($i = 1; $i <= 3; ++$i) {
    $razdel = $_POST['razdel' . $i];
    $z = $i;
    if ($razdel == '' && ($i == 1 || $i == 2 || $i == 3)) {
        $selector = mysqli_query($connect, "UPDATE `razdels` SET `titleRazdel` = 'Раздел'  WHERE `id_user` = '$userid' AND `numEx` = '$numEx' AND `numRazdel` = '$z'") or die("Error save titleRazdel: " . mysqli_error($connect));
        $_SESSION['razdels']["$i"]['title'] = $razdel;
    } else {
        $selector = mysqli_query($connect, "UPDATE `razdels` SET `titleRazdel` = '$razdel'  WHERE `id_user` = '$userid' AND `numEx` = '$numEx' AND `numRazdel` = '$z'") or die("Error save titleRazdel: " . mysqli_error($connect));
        $_SESSION['razdels']["$i"]['title'] = $razdel;
    }


    if ($selector) {
        $k = $k + 1;
    }
}
//фон
$propBgBlock = $_POST['propBgBlock'];

//заголовок блока
$propPositionTX = $_POST['proppositionTX'];
$propPositionTY = $_POST['proppositionTY'];
$propTBg = $_POST['propTBg'];
$propHeigthT = $_POST['propHeigthT'];
$propWidthT = $_POST['propWidthT'];
$propTextAlignT = $_POST['propTextAlignT'];
$propOpacityT = $_POST['propOpacityT'];
$propFontSizeT = $_POST['propFontSizeT'];
$propColorT = $_POST['propColorT'];
$propFontWeightT = $_POST['propFontWeightT'];
$propFontStyleT = $_POST['propFontStyleT'];
$propTextDecorationT = $_POST['propTextDecorationT'];
$propFontFamilyT = $_POST['propFontFamilyT'];
$propBorderRad1 = $_POST['propBorderRad1'];
$propBorderRad2 = $_POST['propBorderRad2'];
$propBorderRad3 = $_POST['propBorderRad3'];
$valT = $_POST['titleRazdels'];
$updaterT = mysqli_query($connect, "UPDATE `exhibitions` SET `titleRazdels` = '$valT', `titlePXR` = '$propPositionTX', `titlePYR` = '$propPositionTY', `titleFontSizeR` = '$propFontSizeT', `titleBgR` = '$propTBg', `titleWidthR` = '$propWidthT', `titleHeightR` = '$propHeigthT', `titleAlignR` = '$propTextAlignT', `titleFontColorR` = '$propColorT', `titleOpacityR`='$propOpacityT', `titleFontFamilyR` = '$propFontFamilyT', `titleBoldR` = '$propFontWeightT', `titleItalicR` = '$propFontStyleT', `titleUnderlineR` = '$propTextDecorationT', `propBgBlock` = '$propBgBlock' WHERE `id_user` = '$userid' AND `numEx` = '$numEx'") or die("Error save titleRsECT: " . mysqli_error($connect));
//заголовки разделов
/* 
$propBg1 = $_POST['propBg1'];
$propBg2 = $_POST['propBg2'];
$propBg3 = $_POST['propBg3'];
$propHeight1 = $_POST['propHeight1'];
$propHeight2 = $_POST['propHeight2'];
$propHeight3 = $_POST['propHeight3'];
$propWidth1 = $_POST['propWidth1'];
$propWidth2 = $_POST['propWidth2'];
$propWidth3 = $_POST['propWidth3'];
$propTextAlign1 = $_POST['propTextAlign1'];
$propTextAlign2 = $_POST['propTextAlign2'];
$propTextAlign3 = $_POST['propTextAlign3'];
$propOpacity1 = $_POST['propOpacity1'];
$propOpacity2 = $_POST['propOpacity2'];
$propOpacity3 = $_POST['propOpacity3'];
$propFontSize1 = $_POST['propFontSize1'];
$propFontSize2 = $_POST['propFontSize2'];
$propFontSize3 = $_POST['propFontSize3'];
$propFontColor1 = $_POST['propFontColor1'];
$propFontColor2 = $_POST['propFontColor2'];
$propFontColor3 = $_POST['propFontColor3'];
$propFontWeight1 = $_POST['propFontWeight1'];
$propFontWeight2 = $_POST['propFontWeight2'];
$propFontWeight3 = $_POST['propFontWeight3'];
$propFontStyle1 = $_POST['propFontStyle1'];
$propFontStyle2 = $_POST['propFontStyle2'];
$propFontStyle3 = $_POST['propFontStyle3'];
$propTextDecoration1 = $_POST['propTextDecoration1'];
$propTextDecoration2 = $_POST['propTextDecoration2'];
$propTextDecoration3 = $_POST['propTextDecoration3'];
$propFontFamily1 = $_POST['propFontFamily1'];
$propFontFamily2 = $_POST['propFontFamily2'];
$propFontFamily3 = $_POST['propFontFamily3'];
$propBorderRadius1 = $_POST['propBorderRadius1'];
$propBorderRadius2 = $_POST['propBorderRadius2'];
$propBorderRadius3 = $_POST['propBorderRadius3']; */


for ($i = 1; $i <= 3; ++$i) {
    $propRazdPositionX = $_POST['propRazdPositionX' . $i];
    $propRazdPositionY = $_POST['propRazdPositionY' . $i];
    $propBg = $_POST['propBg' . $i];
    $propHeight = $_POST['propHeight' . $i];
    $propWidth = $_POST['propWidth' . $i];
    $propTextAlign = $_POST['propTextAlign' . $i];
    $propOpacity = $_POST['propOpacity' . $i];
    $propFontSize = $_POST['propFontSize' . $i];
    $propFontColor = $_POST['propFontColor' . $i];
    $propFontWeight = $_POST['propFontWeight' . $i];
    $propFontStyle = $_POST['propFontStyle' . $i];
    $propTextDecoration = $_POST['propTextDecoration' . $i];
    $propFontFamily = $_POST['propFontFamily' . $i];
    $propBorderRadius = $_POST['propBorderRadius' . $i];
    $updater = mysqli_query($connect, "UPDATE `razdels` SET `id_user`='$userid', `numEx`='$numEx', `razdelBg`='$propBg', `razdelHeight`='$propHeight', `razdelWidth`='$propWidth', `razdelTextAlign`='$propTextAlign', `razdelOpacity`='$propOpacity', `razdelFontSize`='$propFontSize', `razdelFonColor`='$propFontColor', `razdelFontWeight`='$propFontWeight', `razdelFontStyle`='$propFontStyle', `razdelTextDecoration`='$propTextDecoration', `razdelFontFamily`='$propFontFamily', `razdelBorderRadius`='$propBorderRadius', `positionX` = '$propRazdPositionX', `positionY` = '$propRazdPositionY' WHERE `id_user` = '$userid' AND `numEx` = '$numEx' AND `numRazdel` = '$i'") or die("Error save titleRazdels: " . mysqli_error($connect));


}




if ($k == 3) {
    $response = [
        "type" => 1
    ];

    $k = 0;
} else {
    $response = [
        "type" => 0
    ];
    $k = 0;
}

echo json_encode($response);
