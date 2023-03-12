<?php
session_start();
require_once '../db.php';
mysqli_query($connect,"SET NAMES UTF8");
$userid = $_SESSION['user']['id'];
$numEx = $_SESSION['numEx'];

$title = $_POST['title'];
$pX = $_POST['pX'];
$pY = $_POST['pY'];
$bg = $_POST['bg'];
$width = $_POST['widht'];
$height = $_POST['height'];
$fontSize = $_POST['fontSize'];
$align = $_POST['align'];
$fontColor = $_POST['fontColor'];
$opacity = $_POST['opacity'];
$fontFamily = $_POST['fontFamily'];
$bold = $_POST['bold'];
$italic = $_POST['italic'];
$underline = $_POST['line'];
$selector = mysqli_query($connect, "UPDATE `exhibitions` SET `exhibTitle` = '$title', `titlePX` = '$pX', `titlePY` = '$pY', `titleFontSize` = '$fontSize', `titleBg` = '$bg', `titleHeight` = '$height', `titleWidth` = '$width', `titleAlign` = '$align', `titleFontColor` = '$fontColor', `titleOpacity` = '$opacity', `titleFontFamily` = '$fontFamily', `titleBold` = '$bold', `titleItalic` = '$italic', `titleUnderline` = '$underline'  WHERE `id_user` = '$userid' AND `numEx` = '$numEx' ") or die("Error save title: " . mysqli_error($connect));
if($selector){
    $response=[
        "type" => 1
    ];

    $_SESSION['exhib']['title'] = $title;
} else{
    $response=[
        "type" => 0
    ];
}

echo json_encode($response);

?>