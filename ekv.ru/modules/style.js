var menuSel = document.querySelectorAll('.menuSel');
var exhibBtn = document.querySelectorAll('.exhibBtn')
console.log(exhibBtn)
$('.exhibBtn').on('mouseover', function (evt) {
    console.log(this.id)
    console.log()
    evt.preventDefault();
    if( menuSel[this.id]){
        menuSel[this.id].style.display = 'block'
    }
    
})

$('.exhibBtn').on('mouseout', function (evt) {
    evt.preventDefault();
    if(menuSel[this.id]){
        menuSel[this.id].style.display = 'none'
    }
    
})

$('.changeFont').on('click', function () {
    $('.changeFont').css('transform', 'translateY(45px)')
})

$('#fontSize').on('blur', function () {
    $('.changeFont').css('transform', 'translateY(0px)')
    $('.exTitleInput').css('font-size', $('#fontSize').val() + "px")

})

$('.changeHeight').on('click', function () {
    $('.changeHeight').css('transform', 'translateY(45px)')
})

$('#height').on('blur', function () {
    $('.changeHeight').css('transform', 'translateY(0px)')
    $('.textareaBoxing').css('height', $('#height').val())
    $('.bg').css('height', $('#height').val())
    $('.exTitleInput').css('height', $('#height').val())
})

$('.changeWidth').on('click', function () {
    $('.changeWidth').css('transform', 'translateY(45px)')
})

$('#width').on('blur', function () {
    $('.changeWidth').css('transform', 'translateY(0px)')
    $('.textareaBoxing').css('width', $('#width').val())
    $('.bg').css('width', $('#width').val())
    $('.exTitleInput').css('width', $('#width').val())
    }
)


$('.changeBackground').on('click', function () {
    $('.changeBackground').css('transform', 'translateY(45px)')
})

$('#bg').on('blur', function () {
    $('.changeBackground').css('transform', 'translateY(0px)')
    $('.bg').css('background-color', $('#bg').val())
})

$('.changeOpacity').on('click', function () {
    $('.changeOpacity').css('transform', 'translateY(45px)')
})

$('#opacity').on('blur', function () {
    $('.changeOpacity').css('transform', 'translateY(0px)')
    $('.bg').css('opacity', $('#opacity').val())
})

$('.changeFontColor').on('click', function () {
    $('.changeFontColor').css('transform', 'translateY(45px)')
})

$('#fontColor').on('blur', function () {
    $('.changeFontColor').css('transform', 'translateY(0px)')
    titleEx.style.color = $('#fontColor').val()
})

$('#fontFamily').on('change', function () {
    if ($('#fontFamily').val() == 'Sofia Sans Extra Condensed') {
        $('.exTitleInput').css('font-family', '"Sofia Sans Extra Condensed"')
    }
    if ($('#fontFamily').val() == 'Pacifico') {
        $('.exTitleInput').css('font-family', '"Pacifico"')
    }

    if ($('#fontFamily').val() == 'Courier New') {
        $('.exTitleInput').css('font-family', '"Courier New", Courier, monospace')
    }
    if ($('#fontFamily').val() == 'Amatic SC') {
        $('.exTitleInput').css('font-family', '"Amatic SC"')
    }
    if ($('#fontFamily').val() == 'Caveat') {
        $('.exTitleInput').css('font-family', '"Caveat"')
    }
    if ($('#fontFamily').val() == 'Comfortaa') {
        $('.exTitleInput').css('font-family', '"Comfortaa"')
    }
    if ($('#fontFamily').val() == 'Press Start 2P') {
        $('.exTitleInput').css('font-family', '"Press Start 2P"')
    }
    if ($('#fontFamily').val() == 'Rubik Mono One') {
        $('.exTitleInput').css('font-family', '"Rubik Mono One"')
    }
    if ($('#fontFamily').val() == 'Russo One') {
        $('.exTitleInput').css('font-family', '"Russo One"')
    }


})

if ($('#fontFamily').val() == 'Courier New') {
    $('.exTitleInput').css('font-family', '"Courier New", Courier, monospace')
    $('option[value="Courier New"]').css('font-family', 'Courier New')
}

$('.dropdown-item').on('click', function(){
    $('input[id="textDecor"]').val(this.id)
    $('.exTitleInput').css('text-decoration', this.id)
})

$('.exTitleInput').css('text-decoration',  $('input[id="textDecor"]').val())

$('.changeBold').on('click', function(evt){
    evt.preventDefault();
    
    if($('#bold').val() == "bold"){
        $('.changeBold').css('background', '#303030')
        $('#bold').val('')
        $('.exTitleInput').css('font-weight', 'normal')
    } else{
        $('.changeBold').css('background', '#5c5c5c')
        $('#bold').val("bold")
        $('.exTitleInput').css('font-weight', 'bold')
    }
    
})

if($('#bold').val() == "bold"){
    $('.changeBold').css('background', '#5c5c5c')
    $('.exTitleInput').css('font-weight', 'bold')
} else{
    $('.changeBold').css('background', '#303030')
    $('.exTitleInput').css('font-weight', 'normal')
}

$('.changeItalic').on('click', function(evt){
    evt.preventDefault();
    
    if($('#italic').val() == "italic"){
        $('.changeItalic').css('background', '#303030')
        $('#italic').val('')
        $('.exTitleInput').css('font-style', 'normal')
    } else{
        $('.changeItalic').css('background', '#5c5c5c')
        $('#italic').val("italic")
        $('.exTitleInput').css('font-style', 'italic')
    }
    
})

if($('#italic').val() == "italic"){
    $('.changeItalic').css('background', '#5c5c5c')
    $('.exTitleInput').css('font-style', 'italic')
} else{
    $('.changeItalic').css('background', '#303030')
    $('.exTitleInput').css('font-style', 'normal')
}
