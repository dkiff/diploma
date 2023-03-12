var window = document.querySelector('body')
var modalkLogin = document.querySelector('.modalk_login')
var modalkRegister = document.querySelector('.modalk_register')
var modalClose = document.querySelector('.modal_close')
var loginBtn = document.querySelector('.log')
var registerBtn = document.querySelector('.reg')
var modalkAva = document.querySelector('.modalk_ava')
var btnAva = document.getElementById('btnAva')
var btnSelect = document.getElementById('btnSelectAva')
var btnRedact = document.querySelector('.redactProf')
var modalkRedact = document.querySelector('.modalk_redact')
var modalAddVist = document.querySelector('.modalk_add')
var btnAddVist = document.querySelector('.buttonAddVist')
var btnRedDesc = document.querySelectorAll('.btnRedDesc')
var modalRedBo = document.querySelectorAll('.modalkRedactBo')
var btnChange = document.querySelector('.change')
var modalkRedactCover = document.querySelector('.modalkRedactCover')
var modalAddBo = document.querySelector('.modalkAddBo')
var modalkRedactBo = document.querySelector('.modalkRedactBo')
var modalkPassword = document.querySelector('.modalk_password')
var passBtn = document.querySelector('#passwordBtn')

if (loginBtn) {
    loginBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalkLogin.style.display = 'flex'
        $('#msg').addClass('none');
        $('input').removeClass('error');

    })
}

if (registerBtn) {
    registerBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalkRegister.style.display = 'flex'
        $('#formReg').css('display', 'block');
        $('#msg').addClass('none');
        $('#msgs').addClass('none');
        $('input').removeClass('error');
    })
}

if (btnAva) {
    btnAva.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (modalkAva) {
            modalkAva.style.display = 'flex';
        }
        $('#msgA').addClass('none');
        btnSelect.textContent = ''
        btnSelect.textContent = 'Выбрать файл'
        btnSelect.disabled = false
    })
}

if (btnRedact) {
    btnRedact.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalkRedact.style.display = 'flex';
    })
}

if (btnAddVist) {
    btnAddVist.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalAddVist.style.display = 'flex'
    })
}

$('.btnRedDesc').on('click', function () {
    var window = document.querySelector('body')
    modalRedBo[this.id].style.display = "flex"
    window.style.overflowY = "hidden"
})

if (passBtn) {
    passBtn.addEventListener('click', function (evt) {
        var window = document.querySelector('body')
        evt.preventDefault()
        modalkPassword.style.display = "flex"
        window.style.overflowY = "hidden"
    })
}




if (modalClose) {
    $('.modal_close').on('click', function (evt) {
        evt.preventDefault();
        var window = document.querySelector('body')
        if (modalkLogin) {
            modalkLogin.style.display = 'none'
        }

        if (modalkRegister) {
            modalkRegister.style.display = 'none'
        }

        if (modalkAva) {
            modalkAva.style.display = 'none'
        }

        if (modalkRedact) {
            modalkRedact.style.display = 'none'
        }

        if (modalAddVist) {
            modalAddVist.style.display = 'none'
        }

        if (modalRedBo[this.id]) {
            modalRedBo[this.id].style.display = 'none'

        }

        if (modalkRedactCover) {
            modalkRedactCover.style.display = "none"
        }

        if (modalAddBo) {
            var bok = document.querySelectorAll('.book')
            var img = document.querySelectorAll('.imgBook')
            modalAddBo.style.display = 'none'
            for (var i = 0; i < bok.length; i++) {
                if (!bok[i].classList.contains('booksNone') && img[i].getAttribute('alt') == "") {
                    bok[i].style.display = 'none'
                    bok[i].classList.toggle('booksNone')
                }
            }

        }
        if (modalkRedactBo) {
            modalkRedactBo[this.id].style.display = 'none'
        }

        if(modalkPassword){
            modalkPassword.style.display = "none"
        }
        $('input[name="login"]').val('')
        $('input[name="password"]').val('')
    })
}

/* var fishText = document.querySelectorAll('.fishText')
var imgBook = document.querySelectorAll('.imgBook')
for(var i = 0; i<fishText.length; i++){
    if(imgBook[imgBook.length - 1].getAttribute('src') == "Добавить обложку"){
        imgBook[imgBook.length - 1].style.display = 'none'
        
    }
    if (fishText[fishText.length - 1].textContent == "Добавить обложку") {
        imgBook[imgBook.length - 1].style.display = 'none'
        fishText[fishText.length - 1].style.display = 'flex'
    } else {
        imgBook[imgBook.length - 1].style.display = 'block'
        fishText[fishText.length - 1].style.display = 'none'
    }
}
 */

