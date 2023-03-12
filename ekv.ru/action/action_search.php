<?php session_start();
require_once '../db.php';
mysqli_query($connect, "SET NAMES UTF8");

$request = $_POST['searchRequest'];

$search = mysqli_query($connect, "SELECT * FROM `users` WHERE MATCH (`login`) AGAINST ('$request')") or die("Error search: " . mysqli_error($connect));
$response = [];
if ($result) {
    $numrows = mysqli_num_rows($result);
    for ($i = 0; $i < $numrows; ++$i) {
        $row = mysqli_fetch_array($result);
        $count = $i;
        $id[$i] = $row['id'];
        $login[$i] = $row['login'];
        echo $id[$i];
        echo $login[$i];
    }
}
