var btnSelect = document.getElementById('btnSelectAva');
var file;
var btnAddSelect = document.querySelector('.btnAddSelect')
var btnChangeCover = document.querySelector('.change')


if (btnSelect) {
  btnSelect.addEventListener('click', function (evt) {
    evt.preventDefault();
    new AjaxUpload(btnSelect, {
      action: "action/action_addAva.php",
      data: { file: file },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }
        btnSelect.textContent = "Загрузка";
        btnSelect.disabled = true;
        interval = setInterval(function () {
          var text = btnSelect.textContent;
          if (text.length < 11) {
            btnSelect.textContent = text + ".";
          } else {
            btnSelect.textContent = 'Загрузка';
          }
        }, 300);
      },
      onComplete: function (file, response) {
        btnSelect.textContent = ('Загрузка завершена!');
        window.clearInterval(interval);
        response = JSON.parse(response);
        $('#msgA').removeClass('none').text(response.answer);
        setTimeout(function () {
          location.href = 'http://ekv.ru/profile.php'; /* http://localhost/ekv.ru/profile.php - в техе. http://localhost/ekv.ru/profile.php - дома*/
        }, 2 * 1000);
      }
    })
  })
}

if (btnAddSelect) {
  btnAddSelect.addEventListener('click', function (evt) {
    evt.preventDefault();
    $('input').removeClass('error');
    var exhibTitle = $(`input[name='exhibTitle']`).val();
    new AjaxUpload(btnAddSelect, {
      action: "action/action_add_exhib.php",
      data: {
        exhibTitle: exhibTitle,
        cover: file
      },
      name: "exhibFile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }
      },
      onComplete: function (file, response) {
        response = JSON.parse(response);
        $('#msgAdd').removeClass('none').text(response.answer);
       /*  setTimeout(function () {
     
        }, 2 * 1000); */
      }
    })
  })
}
$('#btnCreate').on('click', function(){
  location.href = 'http://ekv.ru/profile.php';
})

if (document.querySelector('#title')) {
  var title = document.querySelector('#title').textContent;
  var numEx = document.querySelector('#numEx').textContent;
  var root = document.querySelector('#root').textContent;
  var id_user = document.querySelector('#iduser').textContent;
}



if (btnChangeCover) {
  btnChangeCover.addEventListener('click', function (evt) {
    evt.preventDefault();
    new AjaxUpload(btnChangeCover, {
      action: "action/action_changeCover.php",
      data: { file: file },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
        btnChangeCover.textContent = "Загрузка";
        btnChangeCover.disabled = true;
        interval = setInterval(function () {
          var text = btnChangeCover.textContent;
          if (text.length < 11) {
            btnChangeCover.textContent = text + ".";
          } else {
            btnChangeCover.textContent = 'Загрузка';
          }
        }, 300);
      },
      onComplete: function (file, response) {
        btnChangeCover.textContent = ('Загрузка завершена!');
        window.clearInterval(interval);
        response = JSON.parse(response);
        $('img[alt="Обложка выставки"]').attr('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/cover/' + fileName)
        setTimeout(function () {
          btnChangeCover.textContent = 'Изменить обложку'
          btnChangeCover.disabled = false;
        }, 2 * 1000);
      }
    })
  })
}

var btnExhib = document.querySelectorAll('exhibBtn');

for (var i = 0; i < btnExhib.length; i++) {
  btnExhib[i].addEventListener('click', function () {
    location.href = 'http://ekv.ru/exhibition.php';
  })
}


var btnAddCoverBook = document.querySelectorAll('.fishSpan')
var btnAddCoverBook2 = document.querySelectorAll('.fishSpan2')
var btnAddCoverBook3 = document.querySelectorAll('.fishSpan3')
var btnAddCoverBookDesc = document.querySelectorAll('.fishSpanDesc')
var btnAddCoverBookDesc2 = document.querySelectorAll('.fishSpanDesc2')
var btnAddCoverBookDesc3 = document.querySelectorAll('.fishSpanDesc3')
var fishText = document.querySelectorAll('.fishText')
var fishText2 = document.querySelectorAll('.fishText2')
var fishText3 = document.querySelectorAll('.fishText3')
if (btnAddCoverBook) {
  $('.fishSpan').on('click', function () {
    var id = this.id

    new AjaxUpload(btnAddCoverBook[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook[id].style.display = "block"
        fishText[id].style.display = "none"
        var r = JSON.parse(response);
        var response1 = document.querySelector('.response12')
        var imgForDesc = document.querySelectorAll('.imgForDesc')
        
        console.log(id)

        console.log($('.imgForDesc:nth-child(' + id + ')'))
        imgForDesc[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc[id].style.display = 'block'
        imgForDesc[id].classList.remove('imgForDescNone')
        fishTextDesc[id].style.display = "none"
      }
    })
  })
}
if (btnAddCoverBook2) {
  $('.fishSpan2').on('click', function () {
    var id = this.id

    new AjaxUpload(btnAddCoverBook2[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook2[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook2[id].style.display = "block"
        fishText2[id].style.display = "none"
        var r = JSON.parse(response);
        var response1 = document.querySelector('.response12')
        var imgForDesc2 = document.querySelectorAll('.imgForDesc2')
        /* response1.textContent = r.answer */
        imgForDesc2[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc2[id].style.display = 'block'
        imgForDesc2[id].classList.remove('imgForDescNone')
        fishTextDesc2[id].style.display = "none"
      }
    })
  })
}
if (btnAddCoverBook3) {
  $('.fishSpan3').on('click', function () {
    var id = this.id

    new AjaxUpload(btnAddCoverBook3[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook3[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook3[id].style.display = "block"
        fishText3[id].style.display = "none"
        var r = JSON.parse(response);
        var response1 = document.querySelector('.response12')
        var imgForDesc3 = document.querySelectorAll('.imgForDesc3')
        /* response1.textContent = r.answer */

        imgForDesc3[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc3[id].style.display = 'block'
        imgForDesc3[id].classList.remove('imgForDescNone3')
        fishTextDesc3[id].style.display = "none"
      }
    })
  })
}

if (btnAddCoverBookDesc) {
  $('.fishSpanDesc').on('click', function (evt) {
    evt.preventDefault();
    var id = this.id

    new AjaxUpload(btnAddCoverBookDesc[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook[id].style.display = "block"
        fishText[id].style.display = "none"
        var r = JSON.parse(response);
       
        var imgForDesc = document.querySelectorAll('.imgForDesc')
        
        console.log(id)

        console.log($('.imgForDesc:nth-child(' + id + ')'))
        imgForDesc[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc[id].style.display = 'block'
        imgForDesc[id].classList.remove('imgForDescNone')
        fishTextDesc[id].style.display = "none"
      }
    })
  })
}

if (btnAddCoverBookDesc2) {
  $('.fishSpanDesc2').on('click', function (evt) {
    evt.preventDefault();
    var id = this.id

    new AjaxUpload(btnAddCoverBookDesc2[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook2[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook2[id].style.display = "block"
        fishText2[id].style.display = "none"
        var r = JSON.parse(response);
        var response1 = document.querySelector('.response12')
        var imgForDesc2 = document.querySelectorAll('.imgForDesc2')
        response1.textContent = r.answer
        imgForDesc2[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc2[id].style.display = 'block'
        imgForDesc2[id].classList.remove('imgForDescNone2')
        fishTextDesc2[id].style.display = "none"
      }
    })
  })
}

if (btnAddCoverBookDesc3) {
  $('.fishSpanDesc3').on('click', function (evt) {
    evt.preventDefault();
    var id = this.id

    new AjaxUpload(btnAddCoverBookDesc3[this.id], {
      action: "action/actionAddCoverBook.php",
      data: {
        file: file,
        numEx: numEx,
        numBook: Number(this.id) + 1,
        numRazdel: Number(this.dataset.razdel)
      },
      name: "userfile",
      onSubmit: function (file, ext) {
        if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
          alert('Ошибка! Неверный формат файла!');
          return false;
        }

        fileName = file
      },
      onComplete: function (file, response) {
        /* $('#msgA').removeClass('none').text(response.answer); */
        imgBook3[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgBook3[id].style.display = "block"
        fishText3[id].style.display = "none"
        var r = JSON.parse(response);
        var response1 = document.querySelector('.response12')
        var imgForDesc3 = document.querySelectorAll('.imgForDesc3')
        response1.textContent = r.answer

        imgForDesc3[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
        imgForDesc3[id].style.display = 'block'
        imgForDesc3[id].classList.remove('imgForDescNone3')
        fishTextDesc3[id].style.display = "none"
      }
    })
  })
}
var redactCoverBookDesc = document.querySelectorAll('.redactCoverBookDesc')

$('.redactCoverBookDesc').on('click', function (evt) {
  evt.preventDefault();

  var id = this.id

  new AjaxUpload(redactCoverBookDesc[this.id], {
    action: "action/actionAddCoverBook.php",
    data: {
      file: file,
      numEx: numEx,
      numBook: Number(this.id) + 1,
      numRazdel: Number(this.dataset.razdel)
    },
    name: "userfile",
    onSubmit: function (file, ext) {
      if (!(ext && /^(jpg|png|jpeg|gif|)$/i.test(ext))) {
        alert('Ошибка! Неверный формат файла!');
        return false;
      }

      fileName = file
    },
    onComplete: function (file, response) {
      /* $('#msgA').removeClass('none').text(response.answer); */
      imgBook[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
      imgBook[id].style.display = "block"
      fishText[id].style.display = "none"
      var r = JSON.parse(response);
      var response1 = document.querySelectorAll('.response')
      var imgForDesc = document.querySelectorAll('.imgForDesc')

      console.log(id)

      console.log($('.imgForDesc:nth-child(' + id + ')'))
      imgForDesc[id].setAttribute('src', './media/img/' + id_user + '/exhibitions/' + numEx + '/books/' + fileName)
      imgForDesc[id].style.display = 'block'
      imgForDesc[id].classList.remove('imgForDescNone')
      fishTextDesc[id].style.display = "none"
    }
  })
})



