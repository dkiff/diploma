<?php
session_start();
$title = "ЭКВ - Главная страница";
include './components/top.php';
require_once './db.php';
mysqli_query($connect, "SET NAMES UTF8");
?>

<div class="container">
  <div class="exhibpanel">
    <h1>Выставки</h1>
    <div class="exhibBox" style="border: 1px solid red; display:flex; flex-direction:row;">
      <?php
      $result = mysqli_query($connect, "SELECT * FROM `exhibitions`") or die("Error:" . mysqli_error($connect));


      $numrows = mysqli_num_rows($result);

      for ($i = 1; $i <= $numrows; ++$i) {
        $row = mysqli_fetch_array($result);
        if ($row['publishing'] == 1) { ?>
          <a class="exhibBtn" href="exhibition.php?composer=<?php echo "{$row['id_user']}"; ?>&numEx=<?php echo "{$row['id']}" ?>&root=0">
            <div class="exhibitionCover">
              <img src="<?php echo "{$row['cover_path']}"; ?>" alt="" width="100%" class="exhImg">
              <div class="exhibTitle"><?php echo "{$row['exhibTitle']}" ?></div>
            </div>
          </a>
        <?php }
        ?>

      <?php }
      ?>
    </div>
  </div>
</div>

<?php
require_once './components/bottom.php';
?>