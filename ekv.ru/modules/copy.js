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
        titleDescription[this.id].classList.add('titleDescriptionNone1')
        author[this.id].classList.add('authorNone1')
        bo[this.id].classList.add('boNone1')
        annotation[this.id].classList.add('annotationNone1')
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

                        if(imgForDescClear[i]){
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
                        if(imgForDescNoClear[i]){
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
                        if(imgForDescClear[i]){
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
                        if(imgForDescNoClear[i]){
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
               Clear1.concat(booksNoClear1)
                    krestikCom = krestikClear1.concat(krestikNoClear1)
                    descCom = descClear.concat(descNoClear)
                    fishSpanDelCom = fishSpanDelClear.concat(fishSpanDelNoClear)
                    fishTextDelCom = fishTextDelClear.concat(fishTextDelNoClear)
                    fishSpanDescDelCom = fishSpanDescDelClear.concat(fishSpanDescDelNoClear)
                    fishSpanNoneDelCom = fishSpanNoneDelClear.concat(fishS