var good = document.getElementById('good')
var hidP = document.getElementById('msg')
var formR = document.getElementById('formReg')
console.log(window.innerHeight)
console.log(window.innerWidth)

/* Авторизация */

$('.btnLog').click(function (evt) {
    evt.preventDefault();

    $('input').removeClass('error');
    var login = $('input[name="login"]').val();
    var password = $('input[name="password"]').val();
    console.log(password)
    $.ajax({
        url: 'action/action_login.php',
        type: 'POST',
        dataType: 'json',
        data: {
            login: login,
            password: password
        },
        success: function (data) {

            if (data.status) {
                location.href = 'http://ekv.ru/profile.php'
            } else {
                if (data.type === 1) {

                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }
                $('#msg').removeClass('none').text(data.message);





            }
        }
    })
}

);

$('.btnReg').click(function (evt) {
    evt.preventDefault();
    $('#msgR').addClass('none')
    $('input').removeClass('error');
    /* var email = $('#register_email').val();
    var login = $('#register_login').val();
    var password = $('#register_password').val();
    var passwordConfirm = $('#register_password2').val();
    var select = $('#select option:selected').text();; */
    var nameUser = $('#nameUserF').val();
    var surnameUser = $('#surnameUserF').val();
    var fatherNameUser = $('#fatherNameUserF').val();
    var emailUser = $('#register_email').val();
    var jobPlace = $('#jobPlaceF').val();
    var job = $('#jobF').val();
    $.ajax({
        url: 'action/action_register.php',
        type: 'POST',
        dataType: 'json',
        data: {
            nameUserF: nameUser,
            surnameUserF: surnameUser,
            fatherNameUserF: fatherNameUser,
            emailR: emailUser,
            jobPlaceF: jobPlace,
            jobF: job
        },
        success: function (data) {

            console.log('успех');
            if (data.status) {
                $('#formReg').css('display', 'none');
                $('#msgs').text(data.message).removeClass('none')
                $('#msgR').addClass('none')
                setTimeout(function () {
                    location.href = 'http://ekv.ru/index.php'; /* http://localhost/ekv.ru/index.php - в техе. http://ekv.ru/index.php - дома*/
                }, 7 * 1000);
            } else {
                console.log(data.type)
                if (data.type === 2) {
                    $(`input[name="emailR"]`).addClass('error');
                    $('#msgR').removeClass('none').text(data.message);

                }
                if (data.type === 1) {

                    data.fields.forEach(function (field) {
                        if (field == 'select') {
                            $(`select`).addClass('error');
                        } else {
                            $(`input[name="${field}"]`).addClass('error');
                        }

                    });

                }
                /* if(data.type === 1 && data.fields == 'login'){
                    $(`input[name="login"]`).addClass('error');
                    $('#msgR').removeClass('none').text(data.message);
                }
*/


                $('#msgR').removeClass('none').text(data.message);





            }
        }
    })
}

);

$('.btnRedact').click(function (evt) {
    evt.preventDefault();
    $('#msgRe').addClass('none')
    $('input').removeClass('error');
    var newName = document.querySelector('input[name="newName"]').value;
    var newSurname = document.querySelector('input[name="newSurname"]').value;
    var newJob = document.querySelector('input[name="newJob"]').value;
    var newEmail = document.querySelector('input[name="newEmail"]').value;
    /*  var newEmail = $(`input[name="newEmail"]`).val();
     var newName = $(`input[name="newName"]`).val();
     var newJob = $(`input[name="newJob"]`).val();
     var newSurname = $(`input[name="newSurname"]`).val(); */


    $.ajax({
        url: 'action/action_redact_prof.php',
        type: 'POST',
        dataType: 'json',
        data: {
            newName: newName,
            newSurname: newSurname,
            newEmail: newEmail,
            newJob: newJob
        },
        success: function (data) {
            if (data.status) {
                location.href = 'http://ekv.ru/profile.php';
            } else {
                if (data.type == 1) {
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                    $('#msgRe').removeClass('none').text(data.message);
                }
            }
        }
    })


});


var saveTitle = document.querySelector('.saveTitle')
var titleVkladka = document.querySelector('title')
var warning = document.querySelector('.warning')

if (saveTitle) {
    saveTitle.addEventListener('click', function (evt) {
        evt.preventDefault();
        var exTitle = document.querySelector('.exTitleInput').value;
        var pointX = document.querySelector('#pointX').value
        var pointY = document.querySelector('#pointY').value
        var bg = document.querySelector('#bg').value
        var fontSize = document.querySelector('#fontSize').value
        var height = document.querySelector('#height').value
        var widht = document.querySelector('#width').value
        var align = document.querySelector('#align').value
        var opacity = document.querySelector('#opacity').value
        var fontColor = document.querySelector('#fontColor').value
        var fontFamily = document.querySelector('#fontFamily').value
        var bold = document.querySelector('#bold').value
        var italic = document.querySelector('#italic').value
        var line = document.querySelector('#textDecor').value
        console.log(bold)
        titleVkladka.textContent = exTitle;
        $.ajax({
            url: "action/action_redactTitleEx.php",
            type: 'POST',
            dataType: 'json',
            data: {
                title: exTitle,
                pX: pointX,
                pY: pointY,
                bg: bg,
                fontSize: fontSize,
                height: height,
                widht: widht,
                align: align,
                opacity: opacity,
                fontColor: fontColor,
                fontFamily: fontFamily,
                bold: bold,
                italic: italic,
                line: line
            },
            success: function (data) {
                if (data.type == 1) {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "block"
                    successMessage.classList.add('alert')
                    successMessage.classList.add('alert-success')
                    successMessage.textContent = "Сохранение успешно!"
                } else {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "block"
                    successMessage.classList.add('alert')
                    successMessage.classList.add('alert-danger')
                    successMessage.textContent = "Произошла ошибка!"
                }
                setTimeout(function () {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "none"
                }, 5 * 1000);

            }
        })
    })
}


var saveTitleRazdel = document.querySelector('.saveTitleRazdel')

var razdels = document.querySelectorAll('.razdelItem')


var warning2 = document.querySelector('.warning2')
if (saveTitleRazdel) {
    saveTitleRazdel.addEventListener('click', function (evt) {
        evt.preventDefault();

        var razdel1 = razdels[0].value
        var razdel2 = razdels[1].value
        var razdel3 = razdels[2].value

        //фон
        var bgrBlock = document.querySelector('.razdelsMenu')
        var propBgBlock = bgrBlock.dataset.bgblock


        //заголовок блока
        var propTitleRazdels = document.querySelector('#titleRazdels')
        var propBgTitleRazdels = document.querySelector('.bgRazdelsTitle')
        var cordinatesT = propTitleRazdels.getBoundingClientRect()

        var valT = propTitleRazdels.value
        console.log(valT)

        //position
        var proppositionTX = cordinatesT.x
        var proppositionTY = cordinatesT.y


        //backgrounds
        var propTBg = propBgTitleRazdels.dataset.bgr

        //heigth
        var propHeigthT = propTitleRazdels.style.height.slice(0, -2)

        //width
        var propWidthT = propTitleRazdels.style.width.slice(0, -2)

        //textAlign
        var propTextAlignT = propTitleRazdels.style.textAlign

        //opacity
        var propOpacityT = propBgTitleRazdels.style.opacity

        //fontSize
        var propFontSizeT = propTitleRazdels.style.fontSize.slice(0, -2)

        //color
        var propColorT = propTitleRazdels.dataset.clr

        //fontWeight
        var propFontWeightT = propTitleRazdels.style.fontWeight

        //fontStyle
        var propFontStyleT = propTitleRazdels.style.fontStyle

        //textDecoration
        var propTextDecorationT = propTitleRazdels.style.textDecoration

        //fontFamily
        var propFontFamilyT = propTitleRazdels.style.fontFamily


        //фигуры разделов
        var propRazdelButton1 = document.querySelector('.razdImg[id="1"]')
        var propRazdelButton2 = document.querySelector('.razdImg[id="2"]')
        var propRazdelButton3 = document.querySelector('.razdImg[id="3"]')

        var propBorderRad1 = propRazdelButton1.style.borderRadius
        var propBorderRad2 = propRazdelButton2.style.borderRadius
        var propBorderRad3 = propRazdelButton3.style.borderRadius



        //заголовки разделов
        var propBtn = document.querySelector('.razdelMenuButton[id="1"]')
        var propRazd1 = document.querySelector('.razdTitleInput[id="0"]')
        var coords1 = propRazd1.getBoundingClientRect();
        console.log(coords1.left)
        var propBgRazd1 = document.querySelector('.bgRazdels[id="1"]')
        var coordsBg1 = document.querySelector('.bgRazdels[id="1"]').getBoundingClientRect();
        var propRazd2 = document.querySelector('.razdTitleInput[id="1"]')
        var coords2 = document.querySelector('.razdTitleInput[id="1"]').getBoundingClientRect();
        var propBgRazd2 = document.querySelector('.bgRazdels[id="2"]')
        var propRazd3 = document.querySelector('.razdTitleInput[id="2"]')
        var coords3 = document.querySelector('.razdTitleInput[id="2"]').getBoundingClientRect();
        var propBgRazd3 = document.querySelector('.bgRazdels[id="3"]')

        //positions
        var propRazdPositionX1 = (coords1.left * 100) / window.innerWidth
        var propRazdPositionY1 = (coords1.top * 100) / window.innerHeight
        var propRazdPositionX2 = (coords2.left * 100) / window.innerWidth
        var propRazdPositionY2 = (coords2.top * 100) / window.innerHeight
        var propRazdPositionX3 = (coords3.left * 100) / window.innerWidth
        var propRazdPositionY3 = (coords3.top * 100) / window.innerHeight


        //backgrounds
        var propBg1 = propBgRazd1.dataset.bgr1
        var propBg2 = propBgRazd2.dataset.bgr1
        var propBg3 = propBgRazd3.dataset.bgr1

        //heights
        var propHeight1 = propRazd1.style.height.slice(0, -2)
        var propHeight2 = propRazd2.style.height.slice(0, -2)
        var propHeight3 = propRazd3.style.height.slice(0, -2)

        //widths
        var propWidth1 = propRazd1.style.width.slice(0, -2)
        var propWidth2 = propRazd2.style.width.slice(0, -2)
        var propWidth3 = propRazd3.style.width.slice(0, -2)

        //textAlign
        var propTextAlign1 = propRazd1.style.textAlign
        var propTextAlign2 = propRazd2.style.textAlign
        var propTextAlign3 = propRazd3.style.textAlign

        //opacity
        var propOpacity1 = propBgRazd1.style.opacity
        var propOpacity2 = propBgRazd2.style.opacity
        var propOpacity3 = propBgRazd3.style.opacity

        //fontSize
        var propFontSize1 = propRazd1.style.fontSize.slice(0, -2)
        var propFontSize2 = propRazd2.style.fontSize.slice(0, -2)
        var propFontSize3 = propRazd3.style.fontSize.slice(0, -2)

        //fontColor
        var propFontColor1 = propRazd1.dataset.clr2
        var propFontColor2 = propRazd2.dataset.clr2
        var propFontColor3 = propRazd3.dataset.clr2

        //fontWeight
        var propFontWeight1 = propRazd1.style.fontWeight
        var propFontWeight2 = propRazd2.style.fontWeight
        var propFontWeight3 = propRazd3.style.fontWeight

        //fontStyle
        var propFontStyle1 = propRazd1.style.fontStyle
        var propFontStyle2 = propRazd2.style.fontStyle
        var propFontStyle3 = propRazd3.style.fontStyle

        //textDecoration
        var propTextDecoration1 = propRazd1.style.textDecoration
        var propTextDecoration2 = propRazd2.style.textDecoration
        var propTextDecoration3 = propRazd3.style.textDecoration

        //fontFamily
        var propFontFamily1 = propRazd1.style.fontFamily
        var propFontFamily2 = propRazd2.style.fontFamily
        var propFontFamily3 = propRazd3.style.fontFamily

        //borderRadius
        var propBorderRadius1 = propRazd1.style.borderRadius
        var propBorderRadius2 = propRazd2.style.borderRadius
        var propBorderRadius3 = propRazd3.style.borderRadius


        $.ajax({
            url: "action/action_redactRazdels.php",
            type: 'POST',
            dataType: 'json',
            data: {
                razdel1: razdel1,
                razdel2: razdel2,
                razdel3: razdel3,

                //фон
                propBgBlock: propBgBlock,

                //заголовок блока
                propTBg: propTBg,
                propHeigthT: propHeigthT,
                propWidthT: propWidthT,
                propTextAlignT: propTextAlignT,
                propOpacityT: propOpacityT,
                propFontSizeT: propFontSizeT,
                propColorT: propColorT,
                propFontWeightT: propFontWeightT,
                propFontStyleT: propFontStyleT,
                propTextDecorationT: propTextDecorationT,
                propFontFamilyT: propFontFamilyT,
                propBorderRad1: propBorderRad1,
                propBorderRad2: propBorderRad2,
                propBorderRad3: propBorderRad3,
                proppositionTX: proppositionTX,
                proppositionTY: proppositionTY,
                titleRazdels: valT,

                //заголовки разделов
                propRazdPositionX1: propRazdPositionX1,
                propRazdPositionY1: propRazdPositionY1,
                propRazdPositionX2: propRazdPositionX2,
                propRazdPositionY2: propRazdPositionY2,
                propRazdPositionX3: propRazdPositionX3,
                propRazdPositionY3: propRazdPositionY3,
                propBg1: propBg1,
                propBg2: propBg2,
                propBg3: propBg3,
                propHeight1: propHeight1,
                propHeight2: propHeight2,
                propHeight3: propHeight3,
                propWidth1: propWidth1,
                propWidth2: propWidth2,
                propWidth3: propWidth3,
                propTextAlign1: propTextAlign1,
                propTextAlign2: propTextAlign2,
                propTextAlign3: propTextAlign3,
                propOpacity1: propOpacity1,
                propOpacity2: propOpacity2,
                propOpacity3: propOpacity3,
                propFontSize1: propFontSize1,
                propFontSize2: propFontSize2,
                propFontSize3: propFontSize3,
                propFontColor1: propFontColor1,
                propFontColor2: propFontColor2,
                propFontColor3: propFontColor3,
                propFontWeight1: propFontWeight1,
                propFontWeight2: propFontWeight2,
                propFontWeight3: propFontWeight3,
                propFontStyle1: propFontStyle1,
                propFontStyle2: propFontStyle2,
                propFontStyle3: propFontStyle3,
                propTextDecoration1: propTextDecoration1,
                propTextDecoration2: propTextDecoration2,
                propTextDecoration3: propTextDecoration3,
                propFontFamily1: propFontFamily1,
                propFontFamily2: propFontFamily2,
                propFontFamily3: propFontFamily3,
                propBorderRadius1: propBorderRadius1,
                propBorderRadius2: propBorderRadius2,
                propBorderRadius3: propBorderRadius3,

            },
            success: function (data) {
                if (data.type == 1) {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "block"
                    successMessage.classList.add('alert')
                    successMessage.classList.add('alert-success')
                    successMessage.textContent = "Сохранение успешно!"

                    var razdelTitle = document.querySelectorAll('.razdelTitle');
                    razdelTitle[0].textContent = razdel1
                    razdelTitle[1].textContent = razdel2
                    razdelTitle[2].textContent = razdel3

                    $('.titleRazdelNav[href="#razdelTitle0"]').text(razdel1)
                    $('.titleRazdelNav[href="#razdelTitle1"]').text(razdel2)
                    $('.titleRazdelNav[href="#razdelTitle2"]').text(razdel3)


                } else {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "block"
                    successMessage.classList.add('alert')
                    successMessage.classList.add('alert-danger')
                    successMessage.textContent = "Произошла ошибка!"
                }
                setTimeout(function () {
                    var successMessage = document.querySelector('.successMessage')
                    successMessage.style.display = "none"

                }, 2 * 1000);
            }
        })
    })
}



/* нонсы для первого раздела*/
var imgBook = document.querySelectorAll('.imgBook1')
var imgBook2 = document.querySelectorAll('.imgBook2')
var imgBook3 = document.querySelectorAll('.imgBook3')
var book = document.querySelectorAll('.book')
var book2 = document.querySelectorAll('.book2')
var book3 = document.querySelectorAll('.book3')
var k1 = 0;
var k2 = 0
var k3 = 0
var fishTextNone1 = document.querySelectorAll('.fishTextNone1')
var fishSpanNone1 = document.querySelectorAll('.fishSpanNone1')
var fishTextNone2 = document.querySelectorAll('.fishTextNone2')
var fishSpanNone2 = document.querySelectorAll('.fishSpanNone2')
var fishTextNone3 = document.querySelectorAll('.fishTextNone3')
var fishSpanNone3 = document.querySelectorAll('.fishSpanNone3')
var fishSpan = document.querySelectorAll('.fishSpan')
var fishSpan2 = document.querySelectorAll('.fishSpan2')
var fishSpan3 = document.querySelectorAll('.fishSpan3')
var fishText = document.querySelectorAll('.fishText')
var fishText2 = document.querySelectorAll('.fishText2')
var fishText3 = document.querySelectorAll('.fishText3')
var fishTextDescNone1 = document.querySelectorAll('.fishTextNone1')
var fishSpanDescNone1 = document.querySelectorAll('.fishSpanNone1')
var fishTextDescNone2 = document.querySelectorAll('.fishTextNone2')
var fishSpanDescNone2 = document.querySelectorAll('.fishSpanNone2')
var fishTextDescNone3 = document.querySelectorAll('.fishTextNone3')
var fishSpanDescNone3 = document.querySelectorAll('.fishSpanNone3')

for (var i = 0; i < imgBook.length; i++) {
    console.log(book)
    if (imgBook[i].getAttribute('alt') == "") {
        if (book[i]) {
            book[i].style.display = "none"
        }

    } else {
        if (book[i]) {
            book[i].style.display = "block"
            book[i].classList.remove('booksNone')
        }

        if (fishText[i]) {
            book[i].style.border = '2px dashed black'
        }
        if (fishSpan[i].textContent == "Добавить обложку") {
            imgBook[i].style.display = 'none'
        }


        imgBook[i].classList.remove('imgNone1')

        if (fishSpanNone1[i]) {
            fishSpanNone1[i].classList.toggle('fishSpanNone1')
            fishTextNone1[i].classList.toggle('fishTextNone1')
        }
        /*Убираем классы -None у существующих книг*/
        k1 = k1 + 1;
    }
}


for (var i = 0; i < imgBook2.length; i++) {
    if (imgBook2[i].getAttribute('alt') == "") {
        if (book2[i]) {
            book2[i].style.display = "none"
        }

    } else {
        if (book2[i]) {
            book2[i].style.display = "block"
            book2[i].classList.remove('booksNone2')
        }

        imgBook2[i].classList.remove('imgNone2')
        if (fishText2[i]) {
            book2[i].style.border = '2px dashed black'
        }
        if (fishSpan2[i].textContent == "Добавить обложку") {
            imgBook2[i].style.display = 'none'
        }
        if (fishSpanNone2[i]) {
            fishSpanNone2[i].classList.toggle('fishSpanNone2')
            fishTextNone2[i].classList.toggle('fishTextNone2')
        }
        k2 = k2 + 1
    }


}

for (var i = 0; i < imgBook3.length; i++) {
    if (imgBook3[i].getAttribute('alt') == "") {
        if (book3[i]) {
            book3[i].style.display = "none"
        }

    } else {
        if (book3[i]) {
            book3[i].style.display = "block"
            book3[i].classList.remove('booksNone3')
        }



        imgBook3[i].classList.remove('imgNone3')
        if (fishText3[i]) {
            book3[i].style.border = '2px dashed black'
        }
        if (fishSpan3[i].textContent == "Добавить обложку") {
            imgBook3[i].style.display = 'none'
        }
        if (fishSpanNone3[i]) {
            fishSpanNone3[i].classList.toggle('fishSpanNone3')
            fishTextNone3[i].classList.toggle('fishTextNone3')
        }
        k3 = k3 + 1;
    }
}

var imgForDesc = document.querySelectorAll('.imgForDesc')
var imgForDesc2 = document.querySelectorAll('.imgForDesc2')
var imgForDesc3 = document.querySelectorAll('.imgForDesc3')
var booksDesc = document.querySelectorAll('.bookDesc')
var booksDesc2 = document.querySelectorAll('.bookDesc2')
var booksDesc3 = document.querySelectorAll('.bookDesc3')
var titleDescription = document.querySelectorAll('.titleDescription')
var titleDescription2 = document.querySelectorAll('.titleDescription2')
var titleDescription3 = document.querySelectorAll('.titleDescription3')
var authorNone1 = document.querySelectorAll('.authorNone1')
var authorNone2 = document.querySelectorAll('.authorNone2')
var authorNone3 = document.querySelectorAll('.authorNone3')
var author = document.querySelectorAll('.author')
var bo = document.querySelectorAll('.bo')
var bo2 = document.querySelectorAll('.bo2')
var bo3 = document.querySelectorAll('.bo3')
var annotation = document.querySelectorAll('.annotation')
var annotation2 = document.querySelectorAll('.annotation2')
var annotation3 = document.querySelectorAll('.annotation3')
var fishTextDesc = document.querySelectorAll('.fishTextDesc')
var fishSpanDesc = document.querySelectorAll('.fishSpanDesc')
var fishTextDesc2 = document.querySelectorAll('.fishTextDesc2')
var fishSpanDesc2 = document.querySelectorAll('.fishSpanDesc2')
var fishTextDesc3 = document.querySelectorAll('.fishTextDesc3')
var fishSpanDesc3 = document.querySelectorAll('.fishSpanDesc3')

for (var i = 0; i < imgForDesc.length; i++) {
    console.log(imgForDesc[i].getAttribute('src'))
    if (imgForDesc[i].getAttribute('src') == "") {
        booksDesc[i].style.display = 'none'
    } else {
        booksDesc[i].classList.remove('bookDescNone1')
        if (titleDescription[i]) {
            titleDescription[i].classList.remove('titleDescriptionNone1')
        }


        if (authorNone1[i]) {
            authorNone1[i].classList.toggle('authorNone1')
        }

        bo[i].classList.remove('boNone1')
        if (annotation[i]) {
            annotation[i].classList.remove('annotationNone1')
        }

        if (imgForDesc[i].getAttribute('src') == "Добавить обложку" || imgForDesc[i].getAttribute('src') == "") {
            imgForDesc[i].style.display = 'none'
            fishSpanDesc[i].textContent = "Добавить обложку"
            fishTextDesc[i].style.display = "flex"
        } else {
            if (fishSpanDesc[i]) {
                fishSpanDesc[i].classList.remove('fishSpanDescNone1')
                fishTextDesc[i].classList.remove('fishTextDescNone1')
                imgForDesc[i].classList.remove('imgForDescNone1')
            }

        }

        /* Убираем классы -None у существующих описаний книг*/
    }
}
for (var i = 0; i < imgForDesc2.length; i++) {
    console.log(imgForDesc2[i].getAttribute('src'))
    if (imgForDesc2[i].getAttribute('src') == "") {
        booksDesc2[i].style.display = 'none'
    } else {
        booksDesc2[i].classList.remove('bookDescNone2')
        if (titleDescription2[i]) {
            titleDescription2[i].classList.remove('titleDescriptionNone2')
        }

        if (authorNone2[i]) {
            authorNone2[i].classList.toggle('authorNone2')
        }
        bo2[i].classList.remove('boNone2')
        if (annotation2[i]) {
            annotation2[i].classList.remove('annotationNone2')
        }


        if (imgForDesc2[i].getAttribute('src') == "Добавить обложку") {
            imgForDesc2[i].style.display = 'none'
            fishSpanDesc2[i].textContent = "Добавить обложку"
            fishTextDesc2[i].style.display = "flex"
        } else {

            if (imgForDesc2[i].getAttribute('src') != "Добавить обложку") {
                fishSpanDesc2[i].classList.remove('fishSpanDescNone2')
                fishTextDesc2[i].classList.remove('fishTextDescNone2')
                imgForDesc2[i].classList.remove('imgForDescNone2')
            }

        }

        /* Убираем классы -None у существующих описаний книг*/
    }
}
for (var i = 0; i < imgForDesc3.length; i++) {
    if (imgForDesc3[i].getAttribute('src') == "") {
        booksDesc3[i].style.display = 'none'
    } else {
        booksDesc3[i].classList.remove('bookDescNone1')
        booksDesc3[i].classList.remove('bookDescNone2')
        booksDesc3[i].classList.remove('bookDescNone3')
        if (titleDescription3[i]) {
            titleDescription3[i].classList.remove('titleDescriptionNone3')
        }

        if (authorNone3[i]) {
            authorNone3[i].classList.toggle('authorNone3')
        }

        bo3[i].classList.remove('boNone3')
        if (annotation3[i]) {
            annotation3[i].classList.remove('annotationNone3')
        }


        if (imgForDesc3[i].getAttribute('src') == "Добавить обложку") {
            imgForDesc3[i].style.display = 'none'

            /* $('.fishSpanDescNone').first().text('Добавить обложку')
            $('.fishTextDescNone').first().css('display', 'flex') */
            fishSpanDesc3[i].textContent = "Добавить обложку"
            fishTextDesc3[i].style.display = "flex"
        } else {

            if (imgForDesc3[i].getAttribute('src') != "Добавить обложку") {

                fishSpanDesc3[i].classList.remove('fishSpanDescNone3')
                fishTextDesc3[i].classList.remove('fishTextDescNone3')
                imgForDesc3[i].classList.remove('imgForDescNone3')
            }

        }

        /* Убираем классы -None у существующих описаний книг*/
    }
}

var titleDescription = document.querySelectorAll('.titleDescription')
var titleDescription2 = document.querySelectorAll('.titleDescription2')
var titleDescription3 = document.querySelectorAll('.titleDescription3')
// УДАЛЕНИЕ ДЛЯ ПЕРВОГО РАЗДЕЛА
var books = document.querySelectorAll('.book');
var krestik = document.querySelectorAll('.krestik')
var desc = document.querySelectorAll('.bookDesc')
var fishSpanDel = document.querySelectorAll('.fishSpan')
var fishTextDel = document.querySelectorAll('.fishText')
var fishSpanDescDel = document.querySelectorAll('.fishSpanDesc')
var fishTextDescDel = document.querySelectorAll('.fishTextDesc')
var fishSpanNoneDel = document.querySelectorAll('.fishSpanNone1')
var fishTextNoneDel = document.querySelectorAll('.fishTextNone1')
var imgForDescDel = document.querySelectorAll('.imgForDesc')
$('.razdel[id=1]').each(function () {
    $(this).find('.krestik').on('click', function (evt) {
        evt.preventDefault();
        k1 = k1 - 1;
        var maxI = 0

        books[this.id].style.display = "none"

        imgBook[this.id].setAttribute('src', 'Добавить обложку')
        imgBook[this.id].setAttribute('alt', '')
        imgBook[this.id].classList.add('imgNone1')

        books[this.id].classList.add('booksNone')

        fishSpanDel[this.id].classList.add('fishSpanNone1')
        fishTextDel[this.id].classList.add('fishTextNone1')
        desc[this.id].classList.add('bookDescNone1')
        fishTextDescDel[this.id].classList.add('fishTextDescNone1')
        fishSpanDescDel[this.id].classList.add('fishSpanDescNone1')
        fishSpanDescDel[this.id].textContent = 'Добавить обложку'
        imgForDescDel[this.id].classList.add('imgForDescNone1')
        if (titleDescription[this.id]) {
            titleDescription[this.id].classList.add('titleDescriptionNone1')
            author[this.id].classList.add('authorNone1')
            annotation[this.id].classList.add('annotationNone1')
        }


        bo[this.id].classList.add('boNone1')

        desc[this.id].style.display = "none"
        imgForDescDel[this.id].setAttribute('src', 'Добавить обложку')
        books = document.querySelectorAll('.book');
        krestik = document.querySelectorAll('.krestik')
        desc = document.querySelectorAll('.bookDesc')
        fishSpanDel = document.querySelectorAll('.fishSpan')
        fishTextDel = document.querySelectorAll('.fishText')
        fishSpanDescDel = document.querySelectorAll('.fishSpanDesc')
        fishSpanNoneDel = document.querySelectorAll('.fishSpanNone1')
        fishTextNoneDel = document.querySelectorAll('.fishTextNone1')
        imgBook = document.querySelectorAll('.imgBook1')
        fishTextDescDel = document.querySelectorAll('.fishTextDesc')
        imgForDescDel = document.querySelectorAll('.imgForDesc')

        $.ajax({
            url: 'action/action_DelBook.php',
            type: 'POST',
            dataType: 'json',
            data: {
                numButton: Number(this.id) + 1,
                numRazdel: 1
            },
            success: function (data) {
                if (data.type == 1) {
                    var booksClear1 = []
                    var booksNoClear1 = []

                    var krestikClear1 = []
                    var krestikNoClear1 = []

                    var fishSpanDelClear = []
                    var fishSpanDelNoClear = []

                    var fishTextDelClear = []
                    var fishTextDelNoClear = []

                    var descClear = []
                    var descNoClear = []

                    var fishSpanDescDelClear = []
                    var fishSpanDescDelNoClear = []

                    var fishSpanNoneDelClear = []
                    var fishSpanNoneDelNoClear = []

                    var fishTextNoneDelClear = []
                    var fishTextNoneDelNoClear = []

                    var imgBookClear = []
                    var imgBookNoClear = []

                    var fishTextDescClear = []
                    var fishTextDescNoClear = []

                    var imgForDescClear = []
                    var imgForDescNoClear = []

                    for (var i = 0; i < books.length; i++) {
                        if (books[i].classList.contains('booksNone')) {
                            booksNoClear1[i] = books[i]
                            krestikNoClear1[i] = krestik[i]
                            descNoClear[i] = desc[i]
                            fishSpanDelNoClear[i] = fishSpanDel[i]
                            fishTextDelNoClear[i] = fishTextDel[i]
                            fishSpanDescDelNoClear[i] = fishSpanDescDel[i]
                            fishSpanNoneDelNoClear[i] = fishSpanNoneDel[i]
                            fishTextNoneDelNoClear[i] = fishTextNoneDel[i]
                            imgBookNoClear[i] = imgBook[i]
                            fishTextDescNoClear[i] = fishTextDescDel[i]
                            imgForDescNoClear[i] = imgForDescDel[i]
                        } else {
                            booksClear1[i] = books[i]
                            krestikClear1[i] = krestik[i]
                            descClear[i] = desc[i]
                            fishSpanDelClear[i] = fishSpanDel[i]
                            fishTextDelClear[i] = fishTextDel[i]
                            fishSpanDescDelClear[i] = fishSpanDescDel[i]
                            fishSpanNoneDelClear[i] = fishSpanNoneDel[i]
                            fishTextNoneDelClear[i] = fishTextNoneDel[i]
                            imgBookClear[i] = imgBook[i]
                            fishTextDescClear[i] = fishTextDescDel[i]
                            imgForDescClear[i] = imgForDescDel[i]
                        }
                    }
                    for (var i = 0; i < booksClear1.length; i++) {
                        if (booksClear1[i]) {
                            booksClear1[i].setAttribute('id', i)

                        }
                        if (krestikClear1[i]) {
                            krestikClear1[i].setAttribute('id', i)
                        }
                        if (descClear[i]) {
                            descClear[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear[i]) {
                            fishSpanDelClear[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear[i]) {
                            fishTextDelClear[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear[i]) {
                            fishSpanDescDelClear[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear[i]) {
                            fishSpanNoneDelClear[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear[i]) {
                            fishTextNoneDelClear[i].setAttribute('id', i)
                        }
                        if (imgBookClear[i]) {
                            imgBookClear[i].setAttribute('id', i)
                        }
                        if (fishTextDescClear[i]) {
                            fishTextDescClear[i].setAttribute('id', i)
                        }

                        if (imgForDescClear[i]) {
                            imgForDescClear[i].setAttribute('id', i)
                        }
                    }
                    for (var i = 0; i < booksNoClear1.length; i++) {
                        if (booksNoClear1[i]) {
                            booksNoClear1[i].setAttribute('id', i)
                        }
                        if (krestikNoClear1[i]) {
                            krestikNoClear1[i].setAttribute('id', i)
                        }
                        if (descNoClear[i]) {
                            descNoClear[i].setAttribute('id', i)
                        }
                        if (fishSpanDelNoClear[i]) {
                            fishSpanDelNoClear[i].setAttribute('id', i)
                        }

                        if (fishTextDelNoClear[i]) {
                            fishTextDelNoClear[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelNoClear[i]) {
                            fishSpanDescDelNoClear[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelNoClear[i]) {
                            fishTextNoneDelNoClear[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelNoClear[i]) {
                            fishSpanNoneDelNoClear[i].setAttribute('id', i)
                        }
                        if (imgBookNoClear[i]) {
                            imgBookNoClear[i].setAttribute('id', i)
                        }

                        if (fishTextDescNoClear[i]) {
                            fishTextDescNoClear[i].setAttribute('id', i)
                        }
                        if (imgForDescNoClear[i]) {
                            imgForDescNoClear[i].setAttribute('id', i)
                        }
                    }



                    booksClear1 = booksClear1.filter(element => element !== 0)
                    krestikClear1 = krestikClear1.filter(element => element !== 0)
                    booksNoClear1 = booksNoClear1.filter(element => element !== 0)
                    krestikNoClear1 = krestikNoClear1.filter(element => element !== 0)
                    descClear = descClear.filter(element => element !== 0)
                    descNoClear = descNoClear.filter(element => element !== 0)
                    fishSpanDelClear = fishSpanDelClear.filter(element => element !== 0)
                    fishSpanDelNoClear = fishSpanDelNoClear.filter(element => element !== 0)
                    fishTextDelClear = fishTextDelClear.filter(element => element !== 0)
                    fishTextDelNoClear = fishTextDelNoClear.filter(element => element !== 0)
                    fishSpanDescDelClear = fishSpanDescDelClear.filter(element => element !== 0)
                    fishSpanDescDelNoClear = fishSpanDescDelNoClear.filter(element => element !== 0)
                    fishSpanNoneDelClear = fishSpanNoneDelClear.filter(element => element !== 0)
                    fishSpanNoneDelNoClear = fishSpanNoneDelNoClear.filter(element => element !== 0)
                    fishTextNoneDelClear = fishTextNoneDelClear.filter(element => element !== 0)
                    fishTextNoneDelNoClear = fishTextNoneDelNoClear.filter(element => element !== 0)
                    imgBookClear = imgBookClear.filter(element => element !== 0)
                    imgBookNoClear = imgBookNoClear.filter(element => element !== 0)
                    fishTextDescClear = fishTextDescClear.filter(element => element !== 0)
                    fishTextDescNoClear = fishTextDescNoClear.filter(element => element !== 0)
                    imgForDescClear = imgForDescClear.filter(element => element !== 0)
                    imgForDescNoClear = imgForDescNoClear.filter(element => element !== 0)
                    for (var i = 0; i < booksClear1.length; i++) {
                        if (booksClear1[i]) {
                            booksClear1[i].setAttribute('id', i)
                        }
                        if (krestikClear1[i]) {
                            krestikClear1[i].setAttribute('id', i)
                        }
                        if (descClear[i]) {
                            descClear[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear[i]) {
                            fishSpanDelClear[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear[i]) {
                            fishTextDelClear[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear[i]) {
                            fishSpanDescDelClear[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear[i]) {
                            fishSpanNoneDelClear[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear[i]) {
                            fishTextNoneDelClear[i].setAttribute('id', i)
                        }

                        if (imgBookClear[i]) {
                            imgBookClear[i].setAttribute('id', i)
                        }

                        if (fishTextDescClear[i]) {
                            fishTextDescClear[i].setAttribute('id', i)
                        }
                        if (imgForDescClear[i]) {
                            imgForDescClear[i].setAttribute('id', i)
                        }


                        maxI = i
                    }

                    for (var i = 0; i < booksNoClear1.length; i++) {
                        if (booksNoClear1[i]) {
                            booksNoClear1[i].setAttribute('id', maxI + i + 1)
                        }
                        if (krestikNoClear1[i]) {
                            krestikNoClear1[i].setAttribute('id', maxI + i + 1)
                        }
                        if (descNoClear[i]) {
                            descNoClear[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishSpanDelNoClear[i]) {
                            fishSpanDelNoClear[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextDelNoClear[i]) {
                            fishTextDelNoClear[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanDescDelNoClear[i]) {
                            fishSpanDescDelNoClear[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextNoneDelNoClear[i]) {
                            fishTextNoneDelNoClear[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanNoneDelNoClear[i]) {
                            fishSpanNoneDelNoClear[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgBookNoClear[i]) {
                            imgBookNoClear[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishTextDescNoClear[i]) {
                            fishTextDescNoClear[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgForDescNoClear[i]) {
                            imgForDescNoClear[i].setAttribute('id', maxI + i + 1)
                        }
                    }

                    var booksCom = []
                    var krestikCom = []
                    var descCom = []
                    var fishSpanDelCom = []
                    var fishTextDelCom = []
                    var fishSpanDescDelCom = []
                    var fishSpanNoneDelCom = []
                    var fishTextNoneDelCom = []
                    var imgBookCom = []
                    var fishTextDescCom = []
                    var imgForDescCom = []
                    booksCom = booksClear1.concat(booksNoClear1)
                    krestikCom = krestikClear1.concat(krestikNoClear1)
                    descCom = descClear.concat(descNoClear)
                    fishSpanDelCom = fishSpanDelClear.concat(fishSpanDelNoClear)
                    fishTextDelCom = fishTextDelClear.concat(fishTextDelNoClear)
                    fishSpanDescDelCom = fishSpanDescDelClear.concat(fishSpanDescDelNoClear)
                    fishSpanNoneDelCom = fishSpanNoneDelClear.concat(fishSpanNoneDelNoClear)
                    fishTextNoneDelCom = fishTextNoneDelClear.concat(fishTextNoneDelNoClear)
                    imgBookCom = imgBookClear.concat(imgBookNoClear)
                    fishTextDescCom = fishTextDescClear.concat(fishTextDescNoClear)
                    imgForDescCom = imgForDescClear.concat(imgForDescNoClear)
                    books = booksCom
                    krestik = krestikCom
                    desc = descCom
                    fishSpanDel = fishSpanDelCom
                    fishTextDel = fishTextDelCom
                    fishSpanDescDel = fishSpanDescDelCom
                    fishSpanNoneDel = fishSpanNoneDelCom
                    fishTextNoneDel = fishTextNoneDelCom
                    imgBook = imgBookCom
                    fishTextDescDel = fishTextDescCom
                    imgForDescDel = imgForDescCom


                } else {
                    console.log("Ошибка!")
                }
            }
        })
    })

})

// УДАЛЕНИЕ ДЛЯ ВТОРОГО РАЗДЕЛА
var books2 = document.querySelectorAll('.book2');
var krestik2 = document.querySelectorAll('.krestik2')
var desc2 = document.querySelectorAll('.bookDesc2')
var fishSpanDel2 = document.querySelectorAll('.fishSpan2')
var fishTextDel2 = document.querySelectorAll('.fishText2')
var fishSpanDescDel2 = document.querySelectorAll('.fishSpanDesc2')
var fishTextDescDel2 = document.querySelectorAll('.fishTextDesc2')
var fishSpanNoneDel2 = document.querySelectorAll('.fishSpanNone2')
var fishTextNoneDel2 = document.querySelectorAll('.fishTextNone2')
var imgForDescDel2 = document.querySelectorAll('.imgForDesc2')
$('.razdel[id=2]').each(function () {
    $(this).find('.krestik2').on('click', function (evt) {
        evt.preventDefault();
        k2 = k2 - 1;
        var maxI = 0

        books2[this.id].style.display = "none"

        imgBook2[this.id].setAttribute('src', 'Добавить обложку')
        imgBook2[this.id].setAttribute('alt', '')
        imgBook2[this.id].classList.add('imgNone2')

        books2[this.id].classList.add('booksNone2')

        fishSpanDel2[this.id].classList.add('fishSpanNone2')
        fishTextDel2[this.id].classList.add('fishTextNone2')
        desc2[this.id].classList.add('bookDescNone2')
        fishTextDescDel2[this.id].classList.add('fishTextDescNone2')
        fishSpanDescDel2[this.id].classList.add('fishSpanDescNone2')
        fishSpanDescDel2[this.id].textContent = 'Добавить обложку'
        imgForDescDel2[this.id].classList.add('imgForDescNone2')
        /* titleDescription[this.id].classList.add('titleDescriptionNone2') */
        /* author[this.id].classList.add('authorNone2') */
        bo[this.id].classList.add('boNone2')
        /* annotation[this.id].classList.add('annotationNone2') */
        desc2[this.id].style.display = "none"
        imgForDescDel2[this.id].setAttribute('src', 'Добавить обложку')
        books2 = document.querySelectorAll('.book2');
        krestik2 = document.querySelectorAll('.krestik2')
        desc2 = document.querySelectorAll('.bookDesc2')
        fishSpanDel2 = document.querySelectorAll('.fishSpan2')
        fishTextDel2 = document.querySelectorAll('.fishText2')
        fishSpanDescDel2 = document.querySelectorAll('.fishSpanDesc2')
        fishSpanNoneDel2 = document.querySelectorAll('.fishSpanNone2')
        fishTextNoneDel2 = document.querySelectorAll('.fishTextNone2')
        imgBook2 = document.querySelectorAll('.imgBook2')
        fishTextDescDel2 = document.querySelectorAll('.fishTextDesc2')
        imgForDescDel2 = document.querySelectorAll('.imgForDesc2')

        $.ajax({
            url: 'action/action_DelBook.php',
            type: 'POST',
            dataType: 'json',
            data: {
                numButton: Number(this.id) + 1,
                numRazdel: 2
            },
            success: function (data) {
                if (data.type == 1) {
                    var booksClear2 = []
                    var booksNoClear2 = []

                    var krestikClear2 = []
                    var krestikNoClear2 = []

                    var fishSpanDelClear2 = []
                    var fishSpanDelNoClear2 = []

                    var fishTextDelClear2 = []
                    var fishTextDelNoClear2 = []

                    var descClear2 = []
                    var descNoClear2 = []

                    var fishSpanDescDelClear2 = []
                    var fishSpanDescDelNoClear2 = []

                    var fishSpanNoneDelClear2 = []
                    var fishSpanNoneDelNoClear2 = []

                    var fishTextNoneDelClear2 = []
                    var fishTextNoneDelNoClear2 = []

                    var imgBookClear2 = []
                    var imgBookNoClear2 = []

                    var fishTextDescClear2 = []
                    var fishTextDescNoClear2 = []

                    var imgForDescClear2 = []
                    var imgForDescNoClear2 = []

                    for (var i = 0; i < books2.length; i++) {
                        if (books2[i].classList.contains('booksNone2')) {
                            booksNoClear2[i] = books2[i]
                            krestikNoClear2[i] = krestik2[i]
                            descNoClear2[i] = desc2[i]
                            fishSpanDelNoClear2[i] = fishSpanDel2[i]
                            fishTextDelNoClear2[i] = fishTextDel2[i]
                            fishSpanDescDelNoClear2[i] = fishSpanDescDel2[i]
                            fishSpanNoneDelNoClear2[i] = fishSpanNoneDel2[i]
                            fishTextNoneDelNoClear2[i] = fishTextNoneDel2[i]
                            imgBookNoClear2[i] = imgBook2[i]
                            fishTextDescNoClear2[i] = fishTextDescDel2[i]
                            imgForDescNoClear2[i] = imgForDescDel2[i]
                        } else {
                            booksClear2[i] = books2[i]
                            krestikClear2[i] = krestik2[i]
                            descClear2[i] = desc2[i]
                            fishSpanDelClear2[i] = fishSpanDel2[i]
                            fishTextDelClear2[i] = fishTextDel2[i]
                            fishSpanDescDelClear2[i] = fishSpanDescDel2[i]
                            fishSpanNoneDelClear2[i] = fishSpanNoneDel2[i]
                            fishTextNoneDelClear2[i] = fishTextNoneDel2[i]
                            imgBookClear2[i] = imgBook2[i]
                            fishTextDescClear2[i] = fishTextDescDel2[i]
                            imgForDescClear2[i] = imgForDescDel2[i]
                        }
                    }
                    for (var i = 0; i < booksClear2.length; i++) {
                        if (booksClear2[i]) {
                            booksClear2[i].setAttribute('id', i)

                        }
                        if (krestikClear2[i]) {
                            krestikClear2[i].setAttribute('id', i)
                        }
                        if (descClear2[i]) {
                            descClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear2[i]) {
                            fishSpanDelClear2[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear2[i]) {
                            fishTextDelClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear2[i]) {
                            fishSpanDescDelClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear2[i]) {
                            fishSpanNoneDelClear2[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear2[i]) {
                            fishTextNoneDelClear2[i].setAttribute('id', i)
                        }
                        if (imgBookClear2[i]) {
                            imgBookClear2[i].setAttribute('id', i)
                        }
                        if (fishTextDescClear2[i]) {
                            fishTextDescClear2[i].setAttribute('id', i)
                        }

                        if (imgForDescClear2[i]) {
                            imgForDescClear2[i].setAttribute('id', i)
                        }
                    }
                    for (var i = 0; i < booksNoClear2.length; i++) {
                        if (booksNoClear2[i]) {
                            booksNoClear2[i].setAttribute('id', i)
                        }
                        if (krestikNoClear2[i]) {
                            krestikNoClear2[i].setAttribute('id', i)
                        }
                        if (descNoClear2[i]) {
                            descNoClear2[i].setAttribute('id', i)
                        }
                        if (fishSpanDelNoClear2[i]) {
                            fishSpanDelNoClear2[i].setAttribute('id', i)
                        }

                        if (fishTextDelNoClear2[i]) {
                            fishTextDelNoClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelNoClear2[i]) {
                            fishSpanDescDelNoClear2[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelNoClear2[i]) {
                            fishTextNoneDelNoClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelNoClear2[i]) {
                            fishSpanNoneDelNoClear2[i].setAttribute('id', i)
                        }
                        if (imgBookNoClear2[i]) {
                            imgBookNoClear2[i].setAttribute('id', i)
                        }

                        if (fishTextDescNoClear2[i]) {
                            fishTextDescNoClear2[i].setAttribute('id', i)
                        }
                        if (imgForDescNoClear2[i]) {
                            imgForDescNoClear2[i].setAttribute('id', i)
                        }
                    }



                    booksClear2 = booksClear2.filter(element => element !== 0)
                    krestikClear2 = krestikClear2.filter(element => element !== 0)
                    booksNoClear2 = booksNoClear2.filter(element => element !== 0)
                    krestikNoClear2 = krestikNoClear2.filter(element => element !== 0)
                    descClear2 = descClear2.filter(element => element !== 0)
                    descNoClear2 = descNoClear2.filter(element => element !== 0)
                    fishSpanDelClear2 = fishSpanDelClear2.filter(element => element !== 0)
                    fishSpanDelNoClear2 = fishSpanDelNoClear2.filter(element => element !== 0)
                    fishTextDelClear2 = fishTextDelClear2.filter(element => element !== 0)
                    fishTextDelNoClear2 = fishTextDelNoClear2.filter(element => element !== 0)
                    fishSpanDescDelClear2 = fishSpanDescDelClear2.filter(element => element !== 0)
                    fishSpanDescDelNoClear2 = fishSpanDescDelNoClear2.filter(element => element !== 0)
                    fishSpanNoneDelClear2 = fishSpanNoneDelClear2.filter(element => element !== 0)
                    fishSpanNoneDelNoClear2 = fishSpanNoneDelNoClear2.filter(element => element !== 0)
                    fishTextNoneDelClear2 = fishTextNoneDelClear2.filter(element => element !== 0)
                    fishTextNoneDelNoClear2 = fishTextNoneDelNoClear2.filter(element => element !== 0)
                    imgBookClear2 = imgBookClear2.filter(element => element !== 0)
                    imgBookNoClear2 = imgBookNoClear2.filter(element => element !== 0)
                    fishTextDescClear2 = fishTextDescClear2.filter(element => element !== 0)
                    fishTextDescNoClear2 = fishTextDescNoClear2.filter(element => element !== 0)
                    imgForDescClear2 = imgForDescClear2.filter(element => element !== 0)
                    imgForDescNoClear2 = imgForDescNoClear2.filter(element => element !== 0)
                    for (var i = 0; i < booksClear2.length; i++) {
                        if (booksClear2[i]) {
                            booksClear2[i].setAttribute('id', i)
                        }
                        if (krestikClear2[i]) {
                            krestikClear2[i].setAttribute('id', i)
                        }
                        if (descClear2[i]) {
                            descClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear2[i]) {
                            fishSpanDelClear2[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear2[i]) {
                            fishTextDelClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear2[i]) {
                            fishSpanDescDelClear2[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear2[i]) {
                            fishSpanNoneDelClear2[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear2[i]) {
                            fishTextNoneDelClear2[i].setAttribute('id', i)
                        }

                        if (imgBookClear2[i]) {
                            imgBookClear2[i].setAttribute('id', i)
                        }

                        if (fishTextDescClear2[i]) {
                            fishTextDescClear2[i].setAttribute('id', i)
                        }
                        if (imgForDescClear2[i]) {
                            imgForDescClear2[i].setAttribute('id', i)
                        }


                        maxI = i
                    }

                    for (var i = 0; i < booksNoClear2.length; i++) {
                        if (booksNoClear2[i]) {
                            booksNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (krestikNoClear2[i]) {
                            krestikNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (descNoClear2[i]) {
                            descNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishSpanDelNoClear2[i]) {
                            fishSpanDelNoClear2[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextDelNoClear2[i]) {
                            fishTextDelNoClear2[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanDescDelNoClear2[i]) {
                            fishSpanDescDelNoClear2[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextNoneDelNoClear2[i]) {
                            fishTextNoneDelNoClear2[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanNoneDelNoClear2[i]) {
                            fishSpanNoneDelNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgBookNoClear2[i]) {
                            imgBookNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishTextDescNoClear2[i]) {
                            fishTextDescNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgForDescNoClear2[i]) {
                            imgForDescNoClear2[i].setAttribute('id', maxI + i + 1)
                        }
                    }

                    var booksCom2 = []
                    var krestikCom2 = []
                    var descCom2 = []
                    var fishSpanDelCom2 = []
                    var fishTextDelCom2 = []
                    var fishSpanDescDelCom2 = []
                    var fishSpanNoneDelCom2 = []
                    var fishTextNoneDelCom2 = []
                    var imgBookCom2 = []
                    var fishTextDescCom2 = []
                    var imgForDescCom2 = []
                    booksCom2 = booksClear2.concat(booksNoClear2)
                    krestikCom2 = krestikClear2.concat(krestikNoClear2)
                    descCom2 = descClear2.concat(descNoClear2)
                    fishSpanDelCom2 = fishSpanDelClear2.concat(fishSpanDelNoClear2)
                    fishTextDelCom2 = fishTextDelClear2.concat(fishTextDelNoClear2)
                    fishSpanDescDelCom2 = fishSpanDescDelClear2.concat(fishSpanDescDelNoClear2)
                    fishSpanNoneDelCom2 = fishSpanNoneDelClear2.concat(fishSpanNoneDelNoClear2)
                    fishTextNoneDelCom2 = fishTextNoneDelClear2.concat(fishTextNoneDelNoClear2)
                    imgBookCom2 = imgBookClear2.concat(imgBookNoClear2)
                    fishTextDescCom2 = fishTextDescClear2.concat(fishTextDescNoClear2)
                    imgForDescCom2 = imgForDescClear2.concat(imgForDescNoClear2)
                    books2 = booksCom2
                    krestik2 = krestikCom2
                    desc2 = descCom2
                    fishSpanDel2 = fishSpanDelCom2
                    fishTextDel2 = fishTextDelCom2
                    fishSpanDescDel2 = fishSpanDescDelCom2
                    fishSpanNoneDel2 = fishSpanNoneDelCom2
                    fishTextNoneDel2 = fishTextNoneDelCom2
                    imgBook2 = imgBookCom2
                    fishTextDescDel2 = fishTextDescCom2
                    imgForDescDel2 = imgForDescCom2


                } else {
                    console.log("Ошибка!")
                }
            }
        })
    })

})

// УДАЛЕНИЕ ДЛЯ ТРЕТЬЕГО РАЗДЕЛА
var books3 = document.querySelectorAll('.book3');
var krestik3 = document.querySelectorAll('.krestik3')
var desc3 = document.querySelectorAll('.bookDesc3')
var fishSpanDel3 = document.querySelectorAll('.fishSpan3')
var fishTextDel3 = document.querySelectorAll('.fishText3')
var fishSpanDescDel3 = document.querySelectorAll('.fishSpanDesc3')
var fishTextDescDel3 = document.querySelectorAll('.fishTextDesc3')
var fishSpanNoneDel3 = document.querySelectorAll('.fishSpanNone3')
var fishTextNoneDel3 = document.querySelectorAll('.fishTextNone3')
var imgForDescDel3 = document.querySelectorAll('.imgForDesc3')
$('.razdel[id=3]').each(function () {
    $(this).find('.krestik3').on('click', function (evt) {
        evt.preventDefault();
        k3 = k3 - 1;
        var maxI = 0
        console.log('idBut: ' + this.id)
        console.log('idbook: ' + books3[this.id].getAttribute('id'))
        books3[this.id].style.display = "none"

        imgBook3[this.id].setAttribute('src', 'Добавить обложку')
        imgBook3[this.id].setAttribute('alt', '')
        imgBook3[this.id].classList.add('imgNone3')

        books3[this.id].classList.add('booksNone3')

        fishSpanDel3[this.id].classList.add('fishSpanNone3')
        fishTextDel3[this.id].classList.add('fishTextNone3')
        desc3[this.id].classList.add('bookDescNone3')
        fishTextDescDel3[this.id].classList.add('fishTextDescNone3')
        fishSpanDescDel3[this.id].classList.add('fishSpanDescNone3')
        fishSpanDescDel3[this.id].textContent = 'Добавить обложку'
        imgForDescDel3[this.id].classList.add('imgForDescNone3')
        /* titleDescription[this.id].classList.add('titleDescriptionNone3')
        author[this.id].classList.add('authorNone3') */
        bo[this.id].classList.add('boNone3')
        /*  annotation[this.id].classList.add('annotationNone3') */
        desc3[this.id].style.display = "none"
        imgForDescDel3[this.id].setAttribute('src', 'Добавить обложку')
        books3 = document.querySelectorAll('.book3');
        krestik3 = document.querySelectorAll('.krestik3')
        desc3 = document.querySelectorAll('.bookDesc3')
        fishSpanDel3 = document.querySelectorAll('.fishSpan3')
        fishTextDel3 = document.querySelectorAll('.fishText3')
        fishSpanDescDel3 = document.querySelectorAll('.fishSpanDesc3')
        fishSpanNoneDel3 = document.querySelectorAll('.fishSpanNone3')
        fishTextNoneDel3 = document.querySelectorAll('.fishTextNone3')
        imgBook3 = document.querySelectorAll('.imgBook3')
        fishTextDescDel3 = document.querySelectorAll('.fishTextDesc3')
        imgForDescDel3 = document.querySelectorAll('.imgForDesc3')

        $.ajax({
            url: 'action/action_DelBook.php',
            type: 'POST',
            dataType: 'json',
            data: {
                numButton: Number(this.id) + 1,
                numRazdel: 3
            },
            success: function (data) {
                if (data.type == 1) {
                    var booksClear3 = []
                    var booksNoClear3 = []

                    var krestikClear3 = []
                    var krestikNoClear3 = []

                    var fishSpanDelClear3 = []
                    var fishSpanDelNoClear3 = []

                    var fishTextDelClear3 = []
                    var fishTextDelNoClear3 = []

                    var descClear3 = []
                    var descNoClear3 = []

                    var fishSpanDescDelClear3 = []
                    var fishSpanDescDelNoClear3 = []

                    var fishSpanNoneDelClear3 = []
                    var fishSpanNoneDelNoClear3 = []

                    var fishTextNoneDelClear3 = []
                    var fishTextNoneDelNoClear3 = []

                    var imgBookClear3 = []
                    var imgBookNoClear3 = []

                    var fishTextDescClear3 = []
                    var fishTextDescNoClear3 = []

                    var imgForDescClear3 = []
                    var imgForDescNoClear3 = []

                    for (var i = 0; i < books3.length; i++) {
                        if (books3[i].classList.contains('booksNone3')) {
                            booksNoClear3[i] = books3[i]
                            krestikNoClear3[i] = krestik3[i]
                            descNoClear3[i] = desc3[i]
                            fishSpanDelNoClear3[i] = fishSpanDel3[i]
                            fishTextDelNoClear3[i] = fishTextDel3[i]
                            fishSpanDescDelNoClear3[i] = fishSpanDescDel3[i]
                            fishSpanNoneDelNoClear3[i] = fishSpanNoneDel3[i]
                            fishTextNoneDelNoClear3[i] = fishTextNoneDel3[i]
                            imgBookNoClear3[i] = imgBook3[i]
                            fishTextDescNoClear3[i] = fishTextDescDel3[i]
                            imgForDescNoClear3[i] = imgForDescDel3[i]
                        } else {
                            booksClear3[i] = books3[i]
                            krestikClear3[i] = krestik3[i]
                            descClear3[i] = desc3[i]
                            fishSpanDelClear3[i] = fishSpanDel3[i]
                            fishTextDelClear3[i] = fishTextDel3[i]
                            fishSpanDescDelClear3[i] = fishSpanDescDel3[i]
                            fishSpanNoneDelClear3[i] = fishSpanNoneDel3[i]
                            fishTextNoneDelClear3[i] = fishTextNoneDel3[i]
                            imgBookClear3[i] = imgBook3[i]
                            fishTextDescClear3[i] = fishTextDescDel3[i]
                            imgForDescClear3[i] = imgForDescDel3[i]
                        }
                    }
                    for (var i = 0; i < booksClear3.length; i++) {
                        if (booksClear3[i]) {
                            booksClear3[i].setAttribute('id', i)

                        }
                        if (krestikClear3[i]) {
                            krestikClear3[i].setAttribute('id', i)
                        }
                        if (descClear3[i]) {
                            descClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear3[i]) {
                            fishSpanDelClear3[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear3[i]) {
                            fishTextDelClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear3[i]) {
                            fishSpanDescDelClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear3[i]) {
                            fishSpanNoneDelClear3[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear3[i]) {
                            fishTextNoneDelClear3[i].setAttribute('id', i)
                        }
                        if (imgBookClear3[i]) {
                            imgBookClear3[i].setAttribute('id', i)
                        }
                        if (fishTextDescClear3[i]) {
                            fishTextDescClear3[i].setAttribute('id', i)
                        }

                        if (imgForDescClear3[i]) {
                            imgForDescClear3[i].setAttribute('id', i)
                        }
                    }
                    for (var i = 0; i < booksNoClear3.length; i++) {
                        if (booksNoClear3[i]) {
                            booksNoClear3[i].setAttribute('id', i)
                        }
                        if (krestikNoClear3[i]) {
                            krestikNoClear3[i].setAttribute('id', i)
                        }
                        if (descNoClear3[i]) {
                            descNoClear3[i].setAttribute('id', i)
                        }
                        if (fishSpanDelNoClear3[i]) {
                            fishSpanDelNoClear3[i].setAttribute('id', i)
                        }

                        if (fishTextDelNoClear3[i]) {
                            fishTextDelNoClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelNoClear3[i]) {
                            fishSpanDescDelNoClear3[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelNoClear3[i]) {
                            fishTextNoneDelNoClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelNoClear3[i]) {
                            fishSpanNoneDelNoClear3[i].setAttribute('id', i)
                        }
                        if (imgBookNoClear3[i]) {
                            imgBookNoClear3[i].setAttribute('id', i)
                        }

                        if (fishTextDescNoClear3[i]) {
                            fishTextDescNoClear3[i].setAttribute('id', i)
                        }
                        if (imgForDescNoClear3[i]) {
                            imgForDescNoClear3[i].setAttribute('id', i)
                        }
                    }



                    booksClear3 = booksClear3.filter(element => element !== 0)
                    krestikClear3 = krestikClear3.filter(element => element !== 0)
                    booksNoClear3 = booksNoClear3.filter(element => element !== 0)
                    krestikNoClear3 = krestikNoClear3.filter(element => element !== 0)
                    descClear3 = descClear3.filter(element => element !== 0)
                    descNoClear3 = descNoClear3.filter(element => element !== 0)
                    fishSpanDelClear3 = fishSpanDelClear3.filter(element => element !== 0)
                    fishSpanDelNoClear3 = fishSpanDelNoClear3.filter(element => element !== 0)
                    fishTextDelClear3 = fishTextDelClear3.filter(element => element !== 0)
                    fishTextDelNoClear3 = fishTextDelNoClear3.filter(element => element !== 0)
                    fishSpanDescDelClear3 = fishSpanDescDelClear3.filter(element => element !== 0)
                    fishSpanDescDelNoClear3 = fishSpanDescDelNoClear3.filter(element => element !== 0)
                    fishSpanNoneDelClear3 = fishSpanNoneDelClear3.filter(element => element !== 0)
                    fishSpanNoneDelNoClear3 = fishSpanNoneDelNoClear3.filter(element => element !== 0)
                    fishTextNoneDelClear3 = fishTextNoneDelClear3.filter(element => element !== 0)
                    fishTextNoneDelNoClear3 = fishTextNoneDelNoClear3.filter(element => element !== 0)
                    imgBookClear3 = imgBookClear3.filter(element => element !== 0)
                    imgBookNoClear3 = imgBookNoClear3.filter(element => element !== 0)
                    fishTextDescClear3 = fishTextDescClear3.filter(element => element !== 0)
                    fishTextDescNoClear3 = fishTextDescNoClear3.filter(element => element !== 0)
                    imgForDescClear3 = imgForDescClear3.filter(element => element !== 0)
                    imgForDescNoClear3 = imgForDescNoClear3.filter(element => element !== 0)
                    for (var i = 0; i < booksClear3.length; i++) {
                        if (booksClear3[i]) {
                            booksClear3[i].setAttribute('id', i)
                        }
                        if (krestikClear3[i]) {
                            krestikClear3[i].setAttribute('id', i)
                        }
                        if (descClear3[i]) {
                            descClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanDelClear3[i]) {
                            fishSpanDelClear3[i].setAttribute('id', i)
                        }

                        if (fishTextDelClear3[i]) {
                            fishTextDelClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanDescDelClear3[i]) {
                            fishSpanDescDelClear3[i].setAttribute('id', i)
                        }

                        if (fishSpanNoneDelClear3[i]) {
                            fishSpanNoneDelClear3[i].setAttribute('id', i)
                        }
                        if (fishTextNoneDelClear3[i]) {
                            fishTextNoneDelClear3[i].setAttribute('id', i)
                        }

                        if (imgBookClear3[i]) {
                            imgBookClear3[i].setAttribute('id', i)
                        }

                        if (fishTextDescClear3[i]) {
                            fishTextDescClear3[i].setAttribute('id', i)
                        }
                        if (imgForDescClear3[i]) {
                            imgForDescClear3[i].setAttribute('id', i)
                        }


                        maxI = i
                    }

                    for (var i = 0; i < booksNoClear3.length; i++) {
                        if (booksNoClear3[i]) {
                            booksNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (krestikNoClear3[i]) {
                            krestikNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (descNoClear3[i]) {
                            descNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishSpanDelNoClear3[i]) {
                            fishSpanDelNoClear3[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextDelNoClear3[i]) {
                            fishTextDelNoClear3[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanDescDelNoClear3[i]) {
                            fishSpanDescDelNoClear3[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishTextNoneDelNoClear3[i]) {
                            fishTextNoneDelNoClear3[i].setAttribute('id', maxI + i + 1)
                        }

                        if (fishSpanNoneDelNoClear3[i]) {
                            fishSpanNoneDelNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgBookNoClear3[i]) {
                            imgBookNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (fishTextDescNoClear3[i]) {
                            fishTextDescNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                        if (imgForDescNoClear3[i]) {
                            imgForDescNoClear3[i].setAttribute('id', maxI + i + 1)
                        }
                    }

                    var booksCom3 = []
                    var krestikCom3 = []
                    var descCom3 = []
                    var fishSpanDelCom3 = []
                    var fishTextDelCom3 = []
                    var fishSpanDescDelCom3 = []
                    var fishSpanNoneDelCom3 = []
                    var fishTextNoneDelCom3 = []
                    var imgBookCom3 = []
                    var fishTextDescCom3 = []
                    var imgForDescCom3 = []
                    booksCom3 = booksClear3.concat(booksNoClear3)
                    krestikCom3 = krestikClear3.concat(krestikNoClear3)
                    descCom3 = descClear3.concat(descNoClear3)
                    fishSpanDelCom3 = fishSpanDelClear3.concat(fishSpanDelNoClear3)
                    fishTextDelCom3 = fishTextDelClear3.concat(fishTextDelNoClear3)
                    fishSpanDescDelCom3 = fishSpanDescDelClear3.concat(fishSpanDescDelNoClear3)
                    fishSpanNoneDelCom3 = fishSpanNoneDelClear3.concat(fishSpanNoneDelNoClear3)
                    fishTextNoneDelCom3 = fishTextNoneDelClear3.concat(fishTextNoneDelNoClear3)
                    imgBookCom3 = imgBookClear3.concat(imgBookNoClear3)
                    fishTextDescCom3 = fishTextDescClear3.concat(fishTextDescNoClear3)
                    imgForDescCom3 = imgForDescClear3.concat(imgForDescNoClear3)
                    books3 = booksCom3
                    krestik3 = krestikCom3
                    desc3 = descCom3
                    fishSpanDel3 = fishSpanDelCom3
                    fishTextDel3 = fishTextDelCom3
                    fishSpanDescDel3 = fishSpanDescDelCom3
                    fishSpanNoneDel3 = fishSpanNoneDelCom3
                    fishTextNoneDel3 = fishTextNoneDelCom3
                    imgBook = imgBookCom3
                    fishTextDescDel3 = fishTextDescCom3
                    imgForDescDel3 = imgForDescCom3


                } else {
                    console.log("Ошибка!")
                }
            }
        })
    })

})


var addForm = document.querySelectorAll('.modalkAddBo')
$('.buttonAddBook1').on('click', function (evt) {

    console.log($('.booksNone').first())
    var booksNone = document.querySelectorAll('.booksNone')
    var books = document.querySelectorAll('.book')
    evt.preventDefault();
    if (k1 < 15) {
        $('.booksNone').first().css('display', 'block')
        $('.booksNone').first().removeClass('booksNone')
        k1 = k1 + 1;
    }

    if (k1 == 15) {
        $('.buttonAddBook1').css('display', 'none')
    }
    var window = document.querySelector('body')
    addForm[this.id].style.display = "flex"
    window.style.overflowY = "hidden"
    for (var i = 0; i < imgBook.length; i++) {
        if (fishText[i]) {
            book[i].style.border = '2px dashed black'
        }
        if (fishSpan[i].textContent == "Добавить обложку") {
            imgBook[i].style.display = 'none'
        }
    }

})

$('.buttonAddBook2').on('click', function (evt) {

    console.log($('.booksNone').first())
    var booksNone = document.querySelectorAll('.booksNone2')
    var books = document.querySelectorAll('.book2')
    evt.preventDefault();
    if (k2 < 15) {
        $('.booksNone2').first().css('display', 'block')
        $('.booksNone2').first().removeClass('booksNone2')
        k2 = k2 + 1;
    }

    if (k2 == 15) {
        $('.buttonAddBook2').css('display', 'none')
    }
    var window = document.querySelector('body')
    addForm[this.id].style.display = "flex"
    window.style.overflowY = "hidden"
    for (var i = 0; i < imgBook2.length; i++) {
        if (fishText2[i]) {
            book2[i].style.border = '2px dashed black'
        }
        if (fishSpan2[i].textContent == "Добавить обложку") {
            imgBook2[i].style.display = 'none'
        }
    }
})

$('.buttonAddBook3').on('click', function (evt) {

    console.log($('.booksNone').first())
    var booksNone = document.querySelectorAll('.booksNone3')
    var books = document.querySelectorAll('.book3')
    evt.preventDefault();
    if (k3 < 15) {
        $('.booksNone3').first().css('display', 'block')
        $('.booksNone3').first().removeClass('booksNone3')
        k3 = k3 + 1;
    }

    if (k3 == 15) {
        $('.buttonAddBook3').css('display', 'none')
    }
    var window = document.querySelector('body')
    addForm[this.id].style.display = "flex"
    window.style.overflowY = "hidden"
    for (var i = 0; i < imgBook3.length; i++) {
        if (fishText3[i]) {
            book3[i].style.border = '2px dashed black'
        }
        if (fishSpan3[i].textContent == "Добавить обложку") {
            imgBook3[i].style.display = 'none'
        }
    }
})

var btnAccept1 = document.querySelector('#btnAccept1')
if (document.querySelector('#title')) {
    var title = document.querySelector('#title').textContent;
    var numEx = document.querySelector('#numEx').textContent;
    var root = document.querySelector('#root').textContent;
}




$('.fishSpanDescNone').text('Добавить обложку')
$('.fishTextDescNone').css('display', 'flex')
$('.imgForDescNone').css('display', 'none')

var addForm = document.querySelectorAll('.modalkAddBo')
var btnAccept1 = document.querySelector('#btnAccept1')
var btnAccept2 = document.querySelector('#btnAccept2')
var btnAccept3 = document.querySelector('#btnAccept3')
$('#btnAccept1').on('click', function (evt) {
    evt.preventDefault();

    var id = Number(this.id) - 1;
    var id2 = id - 1
    var books = document.querySelectorAll('.book')
    var booksNone = document.querySelectorAll('.booksNone')
    var kolvo = books.length - booksNone.length
    var authorFamil = document.querySelector('input[name=authorFamil1]').value
    var authorName = document.querySelector('input[name=authorName1]').value
    var authorFathername = document.querySelector('input[name=authorFathername1]').value
    var volume = document.querySelector('input[name=volume1]').value
    var titleBook = document.querySelector('input[name=titleBook1]').value
    var textFacts = document.querySelector('input[name=textFacts1]').value
    var city = document.querySelector('input[name=city1]').value
    var izdatel = document.querySelector('input[name=izdatel1]').value
    var year = document.querySelector('input[name=year1]').value
    var seria = document.querySelector('input[name=seria1]').value
    var annotation = document.querySelector('textarea[name=annotation1]').value
    var razdelForForm = document.querySelector('.razdelForForm1').value

    



    $.ajax({
        url: 'action/actionAddBook.php',
        type: 'POST',
        dataType: 'json',
        data: {
            authorFamil: authorFamil,
            authorName: authorName,
            authorFathername: authorFathername,
            volume: volume,
            titleBook: titleBook,
            textFacts: textFacts,
            city: city,
            izdatel: izdatel,
            year: year,
            seria: seria,
            annotation: annotation,
            numBut: kolvo,
            razdel: razdelForForm
        },
        success: function (data) {
            if (data.type == 1) {


                addForm[btnAccept1.dataset.index].style.display = 'none'
                imgBook[k1 - 1].style.display = 'none'
                imgBook[k1 - 1].classList.remove('imgNone1')
                imgBook[k1 - 1].setAttribute('data-mayak', 'Я ТУТ')
                fishTextDel[k1 - 1].style.display = 'flex'
                fishSpanDel[k1 - 1].textContent = 'Добавить обложку'
                fishSpanDel[k1 - 1].setAttribute('data-mayak2', 'Я ТУУУУУУУУТ')
                fishTextDel[k1 - 1].classList.remove('fishTextNone1')
                fishSpanDel[k1 - 1].classList.remove('fishSpanNone1')
                if ((fishSpanDescDel[k1 - 1].textContent === "" || fishSpanDescDel[k1 - 1].textContent === "Добавить обложку") && (imgForDescDel[k1 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel[k1 - 1].getAttribute('src') === '')) {
                    imgForDescDel[k1 - 1].style.display = 'none'
                    fishTextDescDel[k1 - 1].style.display = 'flex'
                    fishSpanDescDel[k1 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel[k1 - 1].setAttribute('data-mayak', 'Я ТУТА')
                }

                if (imgForDescDel[k1 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel[k1 - 1].getAttribute('src') === '') {
                    fishSpanDescDel[k1 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel[k1 - 1].style.display = 'flex'
                    imgForDescDel[k1 - 1].style.display = 'none'
                }



                $('.bookDescNone1').first().css('display', 'flex')
                $('.bookDescNone1').first().attr('data-valinput', 'inputing')
                var bookDescNone1 = document.querySelector('.bookDescNone1[data-valinput="inputing"]')
                var textareaAn1 = bookDescNone1.querySelector('textarea')
                textareaAn1.textContent = annotation
                $('.bookDescNone1').first().removeClass('bookDescNone1')
                $('.boNone1').first().css('display', 'flex')
                $('.boNone1').first().attr('data-valinput', 'inputing')
                var boNone1 = document.querySelector('.boNone1[data-valinput="inputing"]')
                var familAuthor1 = boNone1.querySelector('input[name="authorFamilBo"]')
                familAuthor1.value = authorFamil
                var nameAuthor1 = boNone1.querySelector('input[name="authorNameBo"]')
                nameAuthor1.value = authorName
                var authorFathername1 = boNone1.querySelector('input[name="authorFathernameBo"]')
                authorFathername1.value = authorFathername
                var bookTitle1 = boNone1.querySelector('input[name="titleBookBo"]')
                bookTitle1.value = titleBook
                var textFacts1 = boNone1.querySelector('input[name="textFactsBo"]')
                textFacts1.value = textFacts
                var city1 = boNone1.querySelector('input[name="cityBo"]')
                city1.value = city
                var izdatel1 = boNone1.querySelector('input[name="izdatelBo"]')
                izdatel1.value = izdatel
                var seria1 = boNone1.querySelector('input[name="seriaBo"]')
                seria1.value = seria
                var year1 = boNone1.querySelector('input[name="yearBo"]')
                year1.value = year
                /* var annotation1 = boNone1.querySelector('textarea')
                console.log(annotation1)
                annotation1.textContent = annotation */
                var volume1 = boNone1.querySelector('input[name="volumeBo"]')
                volume1.value = volume
                $('.boNone1').first().attr('data-valinput', '')
                $('.boNone1').first().removeClass('boNone1')

                /* /*Присвоить элементам описания значения с формы и удалить классы -None*/
                /*$('.titleDescriptionNone1').first().text(titleBook)
                $('.titleDescriptionNone1').first().removeClass('titleDescriptionNone1')
                $('.authorNone1').first().text(authorName + ' ' + authorFamil);
                $('.authorNone1').first().removeClass('authorNone1')
                if (seria == "") {
                    $('.boNone1').first().text(authorFamil + " " + authorFathername + " " + authorName + '. ' + titleBook + ': ' + textFacts + ' / ' + authorName + " " + authorFathername + " " + authorFamil + '. - ' + city + " : " + izdatel + ", " + year + ".")
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (seria == "" && authorFamil == "" && authorName == "") {
                    $('.boNone1').first().text(titleBook + ': ' + textFacts + ' / ' + city + " : " + izdatel + ", " + year + ".")
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (seria == "" && authorName == "" && authorFamil == "" && textFacts == "") {
                    $('.boNone1').first().text(titleBook + ' / ' + city + " : " + izdatel + ", " + year + ".")
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (seria == "" && textFacts == "") {
                    $('.boNone1').first().text(authorFamil + " " + authorName + '. ' + titleBook + ' / ' + authorName + " " + authorFamil + '. - ' + city + " : " + izdatel + ", " + year + ".")
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (authorName == "" && authorFamil == "" && textFacts == "") {
                    $('.boNone1').first().text(titleBook + ' / ' + city + " : " + izdatel + ", " + year + ". - (" + seria + ').')
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (authorName == "" && authorFamil == "") {
                    $('.boNone1').first().text(titleBook + ': ' + textFacts + ' / ' + city + " : " + izdatel + ", " + year + ". - (" + seria + ').')
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (textFacts == "") {
                    $('.boNone1').first().text(authorFamil + " " + authorName + '. ' + titleBook + ' / ' + authorName + " " + authorFamil + '. - ' + city + " : " + izdatel + ", " + year + ". - (" + seria + ').')
                    $('.boNone1').first().removeClass('boNone1')
                }

                if (seria != "" && authorFamil != "" && authorName != "" && textFacts != "") {
                    $('.boNone1').first().text(authorFamil + " " + authorName + '. ' + titleBook + ': ' + textFacts + ' / ' + authorName + " " + authorFamil + '. - ' + city + " : " + izdatel + ", " + year + ". - (" + seria + ').')
                    $('.boNone1').first().removeClass('boNone1')
                }

                $('.annotationNone1').first().text(annotation)
                $('.annotationNone1').first().removeClass('annotationNone1') */

                imgForDescDel[k1 - 1].style.display = 'none'
                console.log('good')
                imgBook = document.querySelectorAll('.imgBook1')
                imgForDescDel = document.querySelectorAll('.imgForDesc')
            } else {
                console.log('error')
            }


        }
    })


})

$('#btnAccept2').on('click', function (evt) {
    evt.preventDefault();


    var books2 = document.querySelectorAll('.book2')
    var booksNone2 = document.querySelectorAll('.booksNone2')
    var kolvo = books2.length - booksNone2.length
    var authorFamil = document.querySelector('input[name=authorFamil2]').value
    var authorName = document.querySelector('input[name=authorName2]').value
    var titleBook = document.querySelector('input[name=titleBook2]').value
    var textFacts = document.querySelector('input[name=textFacts2]').value
    var city = document.querySelector('input[name=city2]').value
    var izdatel = document.querySelector('input[name=izdatel2]').value
    var year = document.querySelector('input[name=year2]').value
    var seria = document.querySelector('input[name=seria2]').value
    var annotation = document.querySelector('textarea[name=annotation2]').value
    var razdelForForm = document.querySelector('.razdelForForm2').value
    
    



    $.ajax({
        url: 'action/actionAddBook.php',
        type: 'POST',
        dataType: 'json',
        data: {
            authorFamil: authorFamil,
            authorName: authorName,
            titleBook: titleBook,
            textFacts: textFacts,
            city: city,
            izdatel: izdatel,
            year: year,
            seria: seria,
            annotation: annotation,
            numBut: kolvo,
            razdel: razdelForForm
        },
        success: function (data) {
            if (data.type == 1) {
                addForm[btnAccept2.dataset.index].style.display = 'none'
                imgBook2[k2 - 1].style.display = 'none'
                imgBook2[k2 - 1].classList.remove('imgNone2')
                imgBook2[k2 - 1].setAttribute('data-mayak', 'Я ТУТ')
                fishTextDel2[k2 - 1].style.display = 'flex'
                fishSpanDel2[k2 - 1].textContent = 'Добавить обложку'
                fishSpanDel2[k2 - 1].setAttribute('data-mayak2', 'Я ТУУУУУУУУТ')
                fishTextDel2[k2 - 1].classList.remove('fishTextNone2')
                fishSpanDel2[k2 - 1].classList.remove('fishSpanNone2')
                if ((fishSpanDescDel2[k2 - 1].textContent === "" || fishSpanDescDel2[k2 - 1].textContent === "Добавить обложку") && (imgForDescDel2[k2 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel2[k2 - 1].getAttribute('src') === '')) {
                    imgForDescDel2[k2 - 1].style.display = 'none'
                    fishTextDescDel2[k2 - 1].style.display = 'flex'
                    fishSpanDescDel2[k2 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel2[k2 - 1].setAttribute('data-mayak', 'Я ТУТА')
                }

                if (imgForDescDel2[k2 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel2[k2 - 1].getAttribute('src') === '') {
                    fishSpanDescDel2[k2 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel2[k2 - 1].style.display = 'flex'
                    imgForDescDel2[k2 - 1].style.display = 'none'
                }

                $('.bookDescNone2').first().css('display', 'flex')
                $('.bookDescNone2').first().attr('data-valinput', 'inputing')
                var bookDescNone2 = document.querySelector('.bookDescNone2[data-valinput="inputing"]')
                var textareaAn2 = bookDescNone2.querySelector('textarea')
                textareaAn2.textContent = annotation
                $('.bookDescNone2').first().removeClass('bookDescNone2')
                $('.boNone2').first().css('display', 'flex')
                $('.boNone2').first().attr('data-valinput', 'inputing')
                var boNone2 = document.querySelector('.boNone2[data-valinput="inputing"]')
                var familAuthor2 = boNone2.querySelector('input[name="authorFamilBo"]')
                familAuthor2.value = authorFamil
                var nameAuthor2 = boNone2.querySelector('input[name="authorNameBo"]')
                nameAuthor2.value = authorName
                var authorFathername2 = boNone2.querySelector('input[name="authorFathernameBo"]')
                authorFathername2.value = authorFathername
                var bookTitle2 = boNone2.querySelector('input[name="titleBookBo"]')
                bookTitle2.value = titleBook
                var textFacts2 = boNone2.querySelector('input[name="textFactsBo"]')
                textFacts2.value = textFacts
                var city2 = boNone2.querySelector('input[name="cityBo"]')
                city2.value = city
                var izdatel2 = boNone2.querySelector('input[name="izdatelBo"]')
                izdatel2.value = izdatel
                var seria2 = boNone2.querySelector('input[name="seriaBo"]')
                seria2.value = seria
                var year2 = boNone2.querySelector('input[name="yearBo"]')
                year2.value = year
                /* var annotation1 = boNone1.querySelector('textarea')
                console.log(annotation1)
                annotation1.textContent = annotation */
                var volume2 = boNone2.querySelector('input[name="volumeBo"]')
                volume2.value = volume
                $('.boNone2').first().attr('data-valinput', '')
                $('.boNone2').first().removeClass('boNone2')
                imgForDescDel2[k2 - 1].style.display = 'none'
                console.log('good')
                imgBook2 = document.querySelectorAll('.imgBook2')
                imgForDescDel2 = document.querySelectorAll('.imgForDesc2')
            } else {
                console.log('error')
            }


        }
    })


})

$('#btnAccept3').on('click', function (evt) {
    evt.preventDefault();


    var books3 = document.querySelectorAll('.book3')
    var booksNone3 = document.querySelectorAll('.booksNone3')
    var kolvo = books3.length - booksNone3.length
    var authorFamil = document.querySelector('input[name=authorFamil3]').value
    var authorName = document.querySelector('input[name=authorName3]').value
    var authorFatherName = document.querySelector('input[name=authorFathername3]').value
    var titleBook = document.querySelector('input[name=titleBook3]').value
    var textFacts = document.querySelector('input[name=textFacts3]').value
    var city = document.querySelector('input[name=city3]').value
    var izdatel = document.querySelector('input[name=izdatel3]').value
    var year = document.querySelector('input[name=year3]').value
    var seria = document.querySelector('input[name=seria3]').value
    var annotation = document.querySelector('textarea[name=annotation3]').value
    var razdelForForm = document.querySelector('.razdelForForm3').value
    var volume = document.querySelector('input[name="volume3"').value
    
   



    $.ajax({
        url: 'action/actionAddBook.php',
        type: 'POST',
        dataType: 'json',
        data: {
            authorFamil: authorFamil,
            authorName: authorName,
            authorFathername: authorFatherName,
            titleBook: titleBook,
            textFacts: textFacts,
            city: city,
            izdatel: izdatel,
            volume: volume,
            year: year,
            seria: seria,
            annotation: annotation,
            numBut: kolvo,
            razdel: razdelForForm
        },
        success: function (data) {
            if (data.type == 1) {
                addForm[btnAccept3.dataset.index].style.display = 'none'
                imgBook3[k3 - 1].style.display = 'none'
                imgBook3[k3 - 1].classList.remove('imgNone3')
                imgBook3[k3 - 1].setAttribute('data-mayak', 'Я ТУТ')
                fishTextDel3[k3 - 1].style.display = 'flex'
                fishSpanDel3[k3 - 1].textContent = 'Добавить обложку'
                fishSpanDel3[k3 - 1].setAttribute('data-mayak2', 'Я ТУУУУУУУУТ')
                fishTextDel3[k3 - 1].classList.remove('fishTextNone3')
                fishSpanDel3[k3 - 1].classList.remove('fishSpanNone3')
                if ((fishSpanDescDel3[k3 - 1].textContent === "" || fishSpanDescDel3[k3 - 1].textContent === "Добавить обложку") && (imgForDescDel3[k3 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel3[k3 - 1].getAttribute('src') === '')) {
                    imgForDescDel3[k3 - 1].style.display = 'none'
                    fishTextDescDel3[k3 - 1].style.display = 'flex'
                    fishSpanDescDel3[k3 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel3[k3 - 1].setAttribute('data-mayak', 'Я ТУТА')
                }

                if (imgForDescDel3[k3 - 1].getAttribute('src') === 'Добавить обложку' || imgForDescDel3[k3 - 1].getAttribute('src') === '') {
                    fishSpanDescDel3[k3 - 1].textContent = 'Добавить обложку'
                    fishTextDescDel3[k3 - 1].style.display = 'flex'
                    imgForDescDel3[k3 - 1].style.display = 'none'
                }
                $('.bookDescNone3').first().css('display', 'flex')
                $('.bookDescNone3').first().attr('data-valinput', 'inputing')
                var bookDescNone3 = document.querySelector('.bookDescNone3[data-valinput="inputing"]')
                var textareaAn3 = bookDescNone3.querySelector('textarea')
                textareaAn3.textContent = annotation
                $('.bookDescNone3').first().removeClass('bookDescNone3')
                $('.boNone3').first().css('display', 'flex')
                $('.boNone3').first().attr('data-valinput', 'inputing')
                var boNone3 = document.querySelector('.boNone3[data-valinput="inputing"]')
                var familAuthor3 = boNone3.querySelector('input[name="authorFamilBo"]')
                familAuthor3.value = authorFamil
                var nameAuthor3 = boNone3.querySelector('input[name="authorNameBo"]')
                nameAuthor3.value = authorName
                var authorFathername3 = boNone3.querySelector('input[name="authorFathernameBo"]')
                authorFathername3.value = authorFatherName
                var bookTitle3 = boNone3.querySelector('input[name="titleBookBo"]')
                bookTitle3.value = titleBook
                var textFacts3 = boNone3.querySelector('input[name="textFactsBo"]')
                textFacts3.value = textFacts
                var city3 = boNone3.querySelector('input[name="cityBo"]')
                city3.value = city
                var izdatel3 = boNone3.querySelector('input[name="izdatelBo"]')
                izdatel3.value = izdatel
                var seria3 = boNone3.querySelector('input[name="seriaBo"]')
                seria3.value = seria
                var year3 = boNone3.querySelector('input[name="yearBo"]')
                year3.value = year
                /* var annotation3 = boNone3.querySelector('textarea')
                console.log(annotation3)
                annotation3.textContent = annotation */
                var volume3 = boNone3.querySelector('input[name="volumeBo"]')
                console.log(volume3)
                volume3.value = volume
                $('.boNone3').first().attr('data-valinput', '')
                $('.boNone3').first().removeClass('boNone3')
                imgForDescDel3[k3 - 1].style.display = 'none'
                console.log('good')
                imgBook3 = document.querySelectorAll('.imgBook3')
                imgForDescDel3 = document.querySelectorAll('.imgForDesc3')

                console.log('good')
            } else {
                console.log('error')
            }
        }
    })
})

$('.saveBo').on('click', function (evt) {
    evt.preventDefault()
    var id = Number(this.id)
    var id2 = id - 1
    var dataset = Number(this.dataset.razdel)
    var preTitle = $('.navLinkSiteBar[href="#razdel' + dataset + 'Book' + id2 + '"]').text()
    console.log(preTitle)
    var authorFamil = $(`input[name="authorFamilBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var authorName = $(`input[name="authorNameBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var authorFatherName = $(`input[name="authorFathernameBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var titleBook = $(`input[name="titleBookBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var textFacts = $(`input[name="textFactsBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var city = $(`input[name="cityBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var izdatelBo = $(`input[name="izdatelBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var seria = $(`input[name="seriaBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var year = $(`input[name="yearBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var annotation = $(`textarea[name="annotationBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    var volume = $(`input[name="volumeBo"][data-numbook="${this.id}"][data-razdel="${this.dataset.razdel}"]`).val()
    $.ajax({
        url: 'action/action_redactBo.php',
        type: 'POST',
        dataType: 'json',
        data: {
            authorFamil: authorFamil,
            authorName: authorName,
            authorFatherName: authorFatherName,
            titlebook: titleBook,
            textFacts: textFacts,
            city: city,
            izdatel: izdatelBo,
            seria: seria,
            year: year,
            volume: volume,
            annotation: annotation,
            numBook: this.id,
            razdel: this.dataset.razdel
        },
        success: function (data) {
            if (data.type == 1) {
                var successMessage = document.querySelector('.successMessage')
                successMessage.style.display = "block"
                successMessage.classList.add('alert')
                successMessage.classList.add('alert-success')
                successMessage.textContent = "Сохранение успешно!"
                $('.navLinkSiteBar[href="#razdel' + dataset + 'Book' + id2 + '"]').text(titleBook)
            } else {
                successMessage.style.display = "block"
                successMessage.classList.add('alert')
                successMessage.classList.add('alert-danger')
                successMessage.textContent = "Произошла ошибка!"
            }

            setTimeout(function () {
                successMessage.style.display = "none"

            }, 5 * 1000);
        }
    });
})

$('#sendPassword').on('click', function (evt) {
    evt.preventDefault()
    var password1 = document.querySelector('input[name="password1"]')
    var password2 = document.querySelector('input[name="password2"]')
    if (password1.value == '' || password2.value == '') {
        $('#msgPass').text('Заполните поля!').addClass('alert alert-danger').removeClass('none')
        password1.style.border = '2px solid red'
        password2.style.border = '2px solid red'
        password1.style.backgroundColor = 'pink'
        password2.style.backgroundColor = 'pink'
    } else {
        if (password1.value != password2.value) {
            $('#msgPass').text('Пароли не сопадают!').addClass('alert alert-danger').removeClass('none')
            password1.style.border = '2px solid red'
            password2.style.border = '2px solid red'
            password1.style.backgroundColor = 'pink'
            password2.style.backgroundColor = 'pink'
        } else {
            $.ajax({
                url: 'action/action_addPassword.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    password: password1.value
                },
                success: function (data) {
                    if (data.status == true) {
                        var password1 = document.querySelector('input[name="password1"]')
                        var password2 = document.querySelector('input[name="password2"]')
                        password1.style.border = '2px solid green'
                        password2.style.border = '2px solid green'
                        password1.style.backgroundColor = 'lightgreen'
                        password2.style.backgroundColor = 'lightgreen'
                        $('#passwordBtn').css('background-color', 'lightcyan')
                        $('#passwordBtn').css('font-weight', 'normal')
                        $('#passwordBtn').css('animation-name', '')
                        $('#msgPass').text('Пароль успешно изменён!').addClass('alert alert-success').removeClass('alert-danger').removeClass('none')
                    }

                }
            })
        }
    }


})
var usersIds = document.querySelectorAll('.id')
var numRowsUsers = usersIds[usersIds.length - 1].textContent
console.log(numRowsUsers)
for (var i = 1; i <= numRowsUsers; i++) {
    $('#access[data-id="' + i + '"]').on('click', function () {
        if (this.getAttribute('data-checked') == 'checked') {
            var access = 0;
            this.setAttribute('data-checked', '')
        } else {
            var access = 1;
            this.setAttribute('data-checked', 'checked')
        }
        var userId = this.dataset.id
        console.log(userId)
        console.log(access)
        $.ajax({
            url: 'action/action_addAccess.php',
            type: 'POST',
            dataType: 'json',
            data: {
                access: access,
                userId: userId
            }
        })
    })
}

for (var i = 1; i <= numRowsUsers; i++) {
    $('#admin[data-id="' + i + '"]').on('click', function () {
        if (this.getAttribute('data-checked') == 'checked') {
            var access = 0;
            this.setAttribute('data-checked', '')
        } else {
            var access = 1;
            this.setAttribute('data-checked', 'checked')
        }
        var userId = this.dataset.id
        console.log(userId)
        console.log(access)
        $.ajax({
            url: 'action/action_addAccess.php',
            type: 'POST',
            dataType: 'json',
            data: {
                accessAdmin: access,
                userId: userId
            }
        })
    })
}

var arrayInputsName = ['login', 'surnameUser', 'nameUser', 'fatherNameUser', 'jobPlace', 'job', 'email']
for (var i = 0; i < arrayInputsName.length; i++) {
    $('input[name="' + arrayInputsName[i] + '"]').on('input', function () {
        var thisId = this.dataset.userid
        if (this.name == 'login') {
            var newLogin = this.value
        } else {

            var newLogin = $('input[name="login"][data-userid="' + thisId + '"]').val()
        }
        console.log(newLogin)
        if (this.name == 'surnameUser') {
            var newSurname = this.value
        } else {
            var newSurname = $('input[name="surnameUser"][data-userid="' + thisId + '"]').val()
        }
        if (this.name == 'nameUser') {
            var newName = this.value
        } else {
            var newName = $('input[name="nameUser"][data-userid="' + thisId + '"]').val()
        }
        if (this.name == 'fatherNameUser') {
            var newFatherName = this.value
        } else {
            var newFatherName = $('input[name="fatherNameUser"][data-userid="' + thisId + '"]').val()
        }
        console.log(newFatherName)
        if (this.name == 'jobPlace') {
            var newJobPlace = this.value
        } else {
            var newJobPlace = $('input[name="jobPlace"][data-userid="' + thisId + '"]').val()
        }
        if (this.name == 'job') {
            var newJob = this.value
        } else {
            var newJob = $('input[name="job"][data-userid="' + thisId + '"]').val()
        }
        if (this.name == 'email') {
            var newEmail = this.value
            console.log(newEmail)
        } else {
            var newEmail = $('input[name="email"][data-userid="' + thisId + '"]').val()
        }

        var useridInputing = this.dataset.userid

        $.ajax({
            url: 'action/action_addAccess.php',
            type: 'POST',
            dataType: 'json',
            data: {
                newLogin: newLogin,
                newName: newName,
                newSurname: newSurname,
                newFatherName: newFatherName,
                newJobPlace: newJobPlace,
                newJob: newJob,
                newEmail: newEmail,
                useridInputing: useridInputing
            }
        })

    })
}

//поиск пользователей

$('#searchUser').on('input', function () {
    var searchRequest = document.querySelector('#searchUser')
    var searchSelect = document.querySelector('#selectSearchUser')
    if (searchSelect.value == 'login') {
        var userLoginRow = document.querySelectorAll('.userLogin')
        for (var i = 0; i < userLoginRow.length; i++) {
            if (userLoginRow[i].value.trim().toLowerCase().search(searchRequest.value.toLowerCase().trim()) == -1) {
                userLoginRow[i].parentNode.parentNode.style.display = 'none'
            } else {
                userLoginRow[i].parentNode.parentNode.style.display = 'table-row'
            }
        }
    }

    if(searchSelect.value == 'id'){
        var userIdRow = document.querySelectorAll('.userId')
        for (var i = 0; i < userIdRow.length; i++) {
            if (userIdRow[i].innerText.trim().toLowerCase().search(searchRequest.value.trim().toLowerCase()) == -1) {
                userIdRow[i].parentNode.style.display = 'none'
            } else {
                userIdRow[i].parentNode.style.display = 'table-row'
            }
        }
    }

    if(searchSelect.value == 'surname'){
        var userSurnameRow = document.querySelectorAll('.userSurname')
        for (var i = 0; i < userSurnameRow.length; i++) {
            if (userSurnameRow[i].value.trim().toLowerCase().search(searchRequest.value.trim().toLowerCase()) == -1) {
                userSurnameRow[i].parentNode.parentNode.style.display = 'none'
            } else {
                userSurnameRow[i].parentNode.parentNode.style.display = 'table-row'
            }
        }
    }

    if(searchSelect.value == 'name'){
        var userNameRow = document.querySelectorAll('.userName')
        for (var i = 0; i < userNameRow.length; i++) {
            if (userNameRow[i].value.trim().toLowerCase().search(searchRequest.value.trim().toLowerCase()) == -1) {
                userNameRow[i].parentNode.parentNode.style.display = 'none'
            } else {
                userNameRow[i].parentNode.parentNode.style.display = 'table-row'
            }
        }
    }

    if(searchSelect.value == 'jobPlace'){
        var userJobPlaceRow = document.querySelectorAll('.userJobPlace')
        for (var i = 0; i < userJobPlaceRow.length; i++) {
            if (userJobPlaceRow[i].value.trim().toLowerCase().search(searchRequest.value.trim().toLowerCase()) == -1) {
                userJobPlaceRow[i].parentNode.parentNode.style.display = 'none'
            } else {
                userJobPlaceRow[i].parentNode.parentNode.style.display = 'table-row'
            }
        }
    }

    
    /*  for (var i = 0; i < userIdRow.length; i++) {
         if (searchRequest.value != userIdRow[i].value) {
             userIdRow[i].parentNode.parentNode.style.display = 'none'
         }
 
         if (searchRequest.value == userIdRow[i].value) {
             userIdRow[i].parentNode.parentNode.style.display = 'table-row'
         }
     } */

})

$('#searchUserClearBtn').on('click', function () {
    var searchRequest = document.querySelector('#searchUser')
    var userIdRow = document.querySelectorAll('.userLogin')
    searchRequest.value = ''
    for (var i = 0; i < userIdRow.length; i++) {
        userIdRow[i].parentNode.parentNode.style.display = "table-row"
    }
})
