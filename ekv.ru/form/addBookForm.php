<form method="post" class="formAdd">

    <!-- Фамилия автора -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput9" name="authorFamil<?php echo $i + 1; ?>">
        <label for="floatingInput9">Фамилия автора</label>
    </div>

    <!-- Имя автора -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput10" name="authorName<?php echo $i + 1; ?>">
        <label for="floatingInput10">Имя автора</label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput1" name="authorFathername<?php echo $i + 1; ?>">
        <label for="floatingInput1">Отчество автора</label>
    </div>

    <!-- Заглавие -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput11" name="titleBook<?php echo $i + 1; ?>">
        <label for="floatingInput11">Название книги</label>
    </div>

    <!-- Сведения относящиеся к заглавию -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput12" name="textFacts<?php echo $i + 1; ?>">
        <label for="floatingInput12">Сведения относящиеся к заглавию</label>
    </div>

    <!-- Город -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput13" name="city<?php echo $i + 1; ?>">
        <label for="floatingInput13">Город издания</label>
    </div>

    <!-- Издательство -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput14" name="izdatel<?php echo $i + 1; ?>">
        <label for="floatingInput14">Издательство</label>
    </div>

    <!-- Год издания -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput15" name="year<?php echo $i + 1; ?>">
        <label for="floatingInput15">Год издания</label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput17" name="volume<?php echo $i + 1; ?>">
        <label for="floatingInput17">Количество страниц</label>
    </div>

    <!-- Серия -->
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput16" name="seria<?php echo $i + 1; ?>">
        <label for="floatingInput16">Серия</label>
    </div>


    <!-- Аннотация -->

    <textarea class="form-control" placeholder="Аннотация" id="Textarea" name="annotation<?php echo $i + 1; ?>" style="margin-bottom: 20px; min-height:150px; max-height:200px;" title="Аннотация"></textarea>

    <input type="text" class="razdelForForm<?php echo $i + 1; ?>" value="<?php echo $i + 1; ?>">

    <button type="submit" class="btnAccept" id="btnAccept<?php echo $i + 1; ?>" name="accept<?php echo $i + 1; ?>" data-index="<?php echo $i; ?>">Применить</button>

</form>