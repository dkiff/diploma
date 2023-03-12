<form method="post">

  <!-- Фамилия автора -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput1" name="authorFamil" value="<?php echo $_SESSION['book']["$x"]['authorFamil'] ?>">
    <label for="floatingInput1">Фамилия автора</label>
  </div>

  <!-- Имя автора -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput2" name="authorName" value="<?php echo $_SESSION['book']["$x"]['authorName'] ?>">
    <label for="floatingInput2">Имя автора</label>
  </div>

  

  <!-- Заглавие -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput3" name="titleBook" value="<?php echo $_SESSION['book']["$x"]['titleBook'] ?>">
    <label for="floatingInput3">Название книги</label>
  </div>

  <!-- Сведения относящиеся к заглавию -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput4" name="textFacts" value="<?php echo $_SESSION['book']["$x"]['textFacts'] ?>">
    <label for="floatingInput4">Сведения относящиеся к заглавию</label>
  </div>

  <!-- Город -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput5" name="city" value="<?php echo $_SESSION['book']["$x"]['city'] ?>">
    <label for="floatingInput5">Город издания</label>
  </div>

  <!-- Издательство -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput6" name="izdatel" value="<?php echo $_SESSION['book']["$x"]['izdatel'] ?>">
    <label for="floatingInput6">Издательство</label>
  </div>

  <!-- Год издания -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput7" name="year" value="<?php echo $_SESSION['book']["$x"]['year'] ?>">
    <label for="floatingInput7">Год издания</label>
  </div>

  <!-- Серия -->
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput8" name="seria" value="<?php echo $_SESSION['book']["$x"]['seria'] ?>">
    <label for="floatingInput8">Серия</label>
  </div>


  <!-- Аннотация -->

  <textarea class="form-control" placeholder="Leave a comment here" id="Textarea" name="annotation" style="margin-bottom: 20px; min-height:150px; max-height:200px;" title="Аннотация"><?php echo $_SESSION['book']["$x"]['annotation'] ?></textarea>

  <button type="submit" class="btnChangeCoverBook" id="btnSelectCoverBook" name="file">Изменить обложку книги</button>

  <button type="submit" class="btnAccept" id="btnAccept" name="accept">Применить</button>

</form>