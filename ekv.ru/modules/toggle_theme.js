var header = document.querySelector('header');
var btnTheme = document.querySelector('.theme-button');
var headerTitle = document.querySelector('.headerTitle');
var navLink = document.querySelectorAll('.nav-link');
var hedlink = document.querySelectorAll('.hedlink')
var login = document.querySelector('.log');
var reg = document.querySelector('.reg');
var body = document.querySelector('body');
var hello = document.querySelector('.hello');
var regTitle = document.querySelector('.regTitle')
var label = document.querySelectorAll('label')
var errorlist = document.querySelectorAll('.errorlist')
var profilTitle = document.querySelectorAll('.profTitle')
var profilFacts = document.querySelectorAll('.profilFacts')
var saveTheme = btnTheme.textContent
var buttonAddV = document.querySelector('.buttonAddVist')
var profilePublic = document.querySelector('.profilePublic')
console.log(label)

let activeTheme = localStorage.getItem('item');
let activeTheme1 = 'Светлая тема'
if (activeTheme === null || activeTheme === 'Светлая тема') {
    btnTheme.textContent = activeTheme1
    for (var i = 0; i < label.length; i = i + 1) {
        label[i].classList.add('margin-ten')
    }

} else {
    btnTheme.textContent = activeTheme
    if (header) { header.classList.add('text-bg-dark') }
    if (headerTitle) { headerTitle.classList.add('text-white') }
    if (navLink) {
        for (var i = 0; i < navLink.length; i = i + 1) {
            navLink[i].classList.add('text-white')
        }
    }
    if (login) { login.classList.add('btn-dark') }
    if (reg) {
        reg.classList.add('btn-dark')
    }
    if (body) { body.classList.add('dark-bg') }
    if (hello) { hello.classList.add('hello-dark') }
    if (regTitle) {
        regTitle.classList.add('color-white')
    }
    for (var i = 0; i < hedlink.length; i = i + 1) {
        hedlink[i].classList.add('hedlink-dark')
    }

    for (var i = 0; i < label.length; i = i + 1) {
        label[i].classList.add('label')
        label[i].classList.add('margin-ten')
    }
    if (errorlist) {
        for (var i = 0; i < errorlist.length; i++) {
            errorlist[i].classList.add('color-white')
        }
    }
    if (profilTitle) {
        for (var i = 0; i < profilTitle.length; i++) {
            profilTitle[i].classList.add('color-white')
        }

    }
    if (profilFacts) {
        for (var i = 0; i < profilFacts.length; i++) {
            profilFacts[i].classList.add('color-white')
        }
    }

    if (buttonAddV){
        buttonAddV.classList.add('buttonAddVist-dark')
    }

    if (profilePublic){
        profilePublic.classList.add('profilePublic-dark')
    }


}


if (btnTheme.textContent == 'Тёмная тема') {
    localStorage.setItem('item', 'Тёмная тема')
} else {
    localStorage.setItem('item', 'Светлая тема')
}

btnTheme.addEventListener('click', function () {
    if (btnTheme.textContent == 'Светлая тема') {
        btnTheme.textContent = 'Тёмная тема'
        localStorage.setItem('item', 'Тёмная тема')
        console.log('смена')
    } else {
        btnTheme.textContent = 'Светлая тема'
        localStorage.setItem('item', 'Светлая тема')
        console.log('смена2')
    }

    if (localStorage.getItem('item') === 'Тёмная тема' && btnTheme.textContent === 'Тёмная тема') {

        console.log('dark')
        if (header) { header.classList.add('text-bg-dark') }
        if (headerTitle) { headerTitle.classList.add('text-white') }
        if (navLink) {
            for (var i = 0; i < navLink.length; i = i + 1) {
                navLink[i].classList.add('text-white')
            }
        }
        if (login) { login.classList.add('btn-dark') }
        if (reg) {
            reg.classList.add('btn-dark')
        }
        if (body) { body.classList.add('dark-bg') }
        if (hello) { hello.classList.add('hello-dark') }
        if (regTitle) {
            regTitle.classList.add('color-white')
        }

        for (var i = 0; i < hedlink.length; i = i + 1) {
            hedlink[i].classList.add('hedlink-dark')
        }

        for (var i = 0; i < label.length; i = i + 1) {
            label[i].classList.add('label')
            label[i].classList.add('margin-ten')
        }

        if (errorlist) {
            for (var i = 0; i < errorlist.length; i++) {
                errorlist[i].classList.add('color-white')
            }
        }

        if (profilTitle) {
            for (var i = 0; i < profilTitle.length; i++) {
                profilTitle[i].classList.add('color-white')
            }
        }
        if (profilFacts) {
            for (var i = 0; i < profilFacts.length; i++) {
                profilFacts[i].classList.add('color-white')
            }
        }

        if (buttonAddV){
            buttonAddV.classList.add('buttonAddVist-dark')
        }

        if (profilePublic){
            profilePublic.classList.add('profilePublic-dark')
        }

    }
    if (localStorage.getItem('item') === 'Светлая тема' && btnTheme.textContent === 'Светлая тема') {

        console.log('light')
        if (header) { header.classList.remove('text-bg-dark') }
        if (headerTitle) { headerTitle.classList.remove('text-white') }
        if (navLink) {
            for (var i = 0; i < navLink.length; i = i + 1) {
                navLink[i].classList.remove('text-white')
            }
        }
        if (login) { login.classList.remove('btn-dark') }
        if (reg) {
            reg.classList.remove('btn-dark')
        }
        if (body) { body.classList.remove('dark-bg') }
        if (hello) { hello.classList.remove('hello-dark') }
        if (regTitle) {
            regTitle.classList.remove('color-white')
        }
        for (var i = 0; i < hedlink.length; i = i + 1) {
            hedlink[i].classList.remove('hedlink-dark')
        }

        for (var i = 0; i < label.length; i = i + 1) {
            label[i].classList.remove('label')
            label[i].classList.add('margin-ten')
        }
        if (errorlist) {
            for (var i = 0; i < errorlist.length; i++) {
                errorlist[i].classList.remove('color-white')
            }
        }
        if (profilTitle) {
            for (var i = 0; i < profilTitle.length; i++) {
                profilTitle[i].classList.remove('color-white')
            }
        }
        if (profilFacts) {
            for (var i = 0; i < profilFacts.length; i++) {
                profilFacts[i].classList.remove('color-white')
            }
        }

        if (buttonAddV){
            buttonAddV.classList.remove('buttonAddVist-dark')
        }

        if (profilePublic){
            profilePublic.classList.remove('profilePublic-dark')
        }

    }

})



/* btnTheme.addEventListener('click', function () {
    
    if (header) { header.classList.toggle('text-bg-dark') }
    if (headerTitle) { headerTitle.classList.toggle('text-white') }
    if (navLink) {
        for (var i = 0; i < navLink.length; i = i + 1) {
            navLink[i].classList.toggle('text-white')
        }
    }
    if (login) { login.classList.toggle('btn-dark') }
    if (reg) {
        reg.classList.toggle('btn-dark')
    }
    if (body) { body.classList.toggle('dark-bg') }
    if (btnTheme.textContent == "Светлая тема") {
        btnTheme.textContent = "Тёмная тема"
    } else {
        btnTheme.textContent = "Светлая тема"
    }
    if (hello) { hello.classList.toggle('hello-dark') }
    if (regTitle) { regTitle.classList.toggle('color-white') }
    localStorage(saveTheme)
 
}) */

var message = document.getElementById('success')
if (message){
setTimeout(
    () => {
        message.classList.add('displayNone')
    },
    5 * 1000
);
}




