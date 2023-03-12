var exTitleInput = document.querySelector('.textareaBoxing')
var inputX = document.querySelector('#pointX')
var inputY = document.querySelector('#pointY')
var headerEx = document.querySelector('#header')
var inputFont = document.querySelector('#fontSize')
var inputColor = document.querySelector('#bg')
var inputHeight = document.querySelector('#height')
var inputWidth = document.querySelector('#width')
var titleEx = document.querySelector('.exTitleInput')
if (inputX) {
    if (inputX.value == "") {
        headerEx.style.display = 'flex'
    } else {
        headerEx.style.display = 'block'
    }
}

if (inputFont) {
    if (inputFont.value == "") {
        titleEx.style.fontSize = "86px"
    } else {
        titleEx.style.fontSize = inputFont.value + 'px'
    }
}

if (inputHeight) {
    if (inputHeight.value == "") {
        exTitleInput.style.height = "148.2px"
    } else {
        exTitleInput.style.height = inputHeight.value + "px"
        titleEx.style.height = inputHeight.value + "px"
        $('.bg').css('height', inputHeight.value + "px")
    }
}

if (exTitleInput) {
    if ($('#width').val() == "") {
        exTitleInput.style.width = "auto"
    } else {
        exTitleInput.style.width = inputWidth.value + "px"
        titleEx.style.width = inputWidth.value + "px"
        $('.bg').css('width', inputWidth.value + "px")
    }
}


/* if (exTitleInput.style.width >= '750px') {
    $('.titleRedactButtons').css('top', '0px')
    $('.titleRedactInputs').css('top', '0px')
} else {
    $('.titleRedactButtons').css('top', '-90px')
    $('.titleRedactInputs').css('top', '-90px')
} */



if ($('#opacity').val() == "") {
    $('.bg').css('opacity', '1')
} else {
    $('.bg').css('opacity', $('#opacity').val())
}


if (titleEx) {
    if ($('input[id=align]').val() == "left") {
        titleEx.style.textAlign = "left"
        $('.changeAlign1').css('background-color', '#5c5c5c')
        $('.changeAlign2').css('background-color', '#303030')
        $('.changeAlign3').css('background-color', '#303030')
    } else {
        if ($('input[id=align]').val() == "center" || $('input[id=align]').val() == "") {
            titleEx.style.textAlign = "center"
            $('.changeAlign1').css('background-color', '#303030')
            $('.changeAlign2').css('background-color', '#5c5c5c')
            $('.changeAlign3').css('background-color', '#303030')
        } else {
            titleEx.style.textAlign = "right"
            $('.changeAlign1').css('background-color', '#303030')
            $('.changeAlign2').css('background-color', '#303030')
            $('.changeAlign3').css('background-color', '#5c5c5c')
        }
    }
}


$('.changeAlign1').on('click', function (evt) {
    evt.preventDefault();
    $('input[id=align]').val("left")
    titleEx.style.textAlign = "left"
    $('.changeAlign1').css('background-color', '#5c5c5c')
    $('.changeAlign2').css('background-color', '#303030')
    $('.changeAlign3').css('background-color', '#303030')
})

$('.changeAlign2').on('click', function (evt) {
    evt.preventDefault();
    $('input[id=align]').val("center")
    titleEx.style.textAlign = "center"
    $('.changeAlign1').css('background-color', '#303030')
    $('.changeAlign2').css('background-color', '#5c5c5c')
    $('.changeAlign3').css('background-color', '#303030')
})

$('.changeAlign3').on('click', function (evt) {
    evt.preventDefault();
    $('input[id=align]').val("right")
    titleEx.style.textAlign = "right"
    $('.changeAlign1').css('background-color', '#303030')
    $('.changeAlign2').css('background-color', '#303030')
    $('.changeAlign3').css('background-color', '#5c5c5c')
})





$('.exTitleInput').prop('disabled', true)
$('#titleRazdels').prop('disabled', false)
$('.razdTitleInput').prop('disabled', false)
var titlePageRazdel = document.querySelector('.textareaBoxingRazdels');
var bg = document.querySelector('.bg')
var inputX1 = document.querySelector('#pointX1')
var inputY1 = document.querySelector('#pointY1')
if (exTitleInput) {
    window.onload = function () {
        let zoom = exTitleInput; // берём сам контейнер изображения
        zoom.onmousedown = function (e) {
            var coords = getCoords(zoom);
            var coordsbg1 = getCoords(bg)
            var shiftX = e.x - coords.left;
            var shiftY = e.y - coords.top;
            var shiftXbg = e.x - coordsbg1.left;
            var shiftYbg = e.y - coordsbg1.top;

            zoom.style.position = 'absolute';
            bg.style.position = 'absolute'
            document.body.appendChild(zoom);
            document.body.appendChild(bg)
            moveAt(e);

            zoom.style.zIndex = 1000; // над другими элементами
            bg.style.zIndex = 999
            function moveAt(e) {
                zoom.style.left = e.x - shiftX + 'px';
                zoom.style.top = e.y - shiftY + 'px';
                bg.style.left = e.x - shiftXbg + 'px';
                bg.style.top = e.y - shiftYbg + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            zoom.onmouseup = function () {
                document.onmousemove = null;
                zoom.onmouseup = null;
                bg.onmouseup = null;
                var pX = (zoom.style.left.slice(0, -2) * 100) / window.innerWidth
                var pY = (zoom.style.top.slice(0, -2) * 100) / window.innerHeight
                inputX.value = pX
                inputY.value = pY
            };
        }

        /* let zoomRT = document.querySelector('#titleRazdels')
        var bgRazdelsRT = document.querySelector('.bgRazdelsTitle')
        zoomRT.onmousedown = function (e) {
            $('#selectEl').val('title')
            if ($('#selectEl').val() == 'title') {
                $('.razdelMenuBG').css('box-shadow', '')
                $('.razdelsMenu').css('box-shadow', '')
                $('.razdTitleInput').css('box-shadow', '')
                $('#titleRazdels').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
                $('#bgRT').val(bgRt.dataset.bgr)
                var height = bgRt.style.height
                var width = bgRt.style.width
                var fontSize = titleRazdels.style.fontSize
                $('#heightRT').val(height.slice(0, -2))
                $('#widthRT').val(width.slice(0, -2))
                if (titleRazdels.style.textAlign == 'left' || titleRazdels.style.textAlign == '') {
                    $('.changeAlign4').css('background-color', '#5c5c5c')
                    $('#alignRT').val('left')
                }
                if (titleRazdels.style.textAlign == 'center') {
                    $('.changeAlign5').css('background-color', '#5c5c5c')
                    $('#alignRT').val('center')
                }
                if (titleRazdels.style.textAlign == 'right') {
                    $('.changeAlign6').css('background-color', '#5c5c5c')
                    $('#alignRT').val('right')
                }
                $('#opacityRT').val(bgRt.style.opacity)
                $('#fontSizeRT').val(fontSize.slice(0, -2))
                $('#fontColorRT').val(titleRazdels.dataset.clr)
                if (titleRazdels.style.fontWeight == 'bold') {
                    $('#boldRT').val('bold')
                    $('.changeBold2').css('background-color', '#5c5c5c')

                } else {
                    $('#boldRT').val('normal')
                    $('.changeBold2').css('background-color', '#303030')
                }

                if (titleRazdels.style.fontStyle == 'italic') {
                    $('#italicRT').val('italic')
                    $('.changeItalic2').css('background-color', '#5c5c5c')
                } else {
                    $('#italicRT').val('normal')
                    $('.changeItalic2').css('background-color', '#303030')
                }

                if (titleRazdels.style.textDecoration != "none" || titleRazdels.style.textDecoration != '') {
                    $('#textDecorRT').val(titleRazdels.style.textDecoration)
                }

                var options = document.querySelectorAll('.inputFontFamily2')
                for (var i = 0; i < options.length; i++) {
                    if (titleRazdels.style.fontFamily == options[i].textContent) {
                        options[i].selected = true
                        console.log('eeee')
                    }
                }


                // движение лэйблов и новые свойства заголовка
                $('.changeFont2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeFont2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontSizeRT').on('blur', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('#titleRazdels').css('font-size', $('#fontSizeRT').val() + "px")
                    }
                    $('.changeFont2').css('transform', 'translateY(0px)')
                })

                $('.changeHeight2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeHeight2').css('transform', 'translateY(45px)')
                    }

                })

                $('#heightRT').on('blur', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.textareaBoxingRazdels').css('height', $('#heightRT').val())
                        $('.bgRazdelsTitle').css('height', $('#heightRT').val())
                        $('#titleRazdels').css('height', $('#heightRT').val())
                    }
                    $('.changeHeight2').css('transform', 'translateY(0px)')
                })

                $('.changeWidth2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeWidth2').css('transform', 'translateY(45px)')
                    }
                })

                $('#widthRT').on('blur', function () {
                    $('.changeWidth2').css('transform', 'translateY(0px)')
                    if ($('#selectEl').val() == 'title') {
                        $('.textareaBoxingRazdels').css('width', $('#widthRT').val())
                        $('.bgRazdelsTitle').css('width', $('#widthRT').val())
                        $('#titleRazdels').css('width', $('#widthRT').val())
                    }
                })


                $('.changeBackground2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeBackground2').css('transform', 'translateY(45px)')
                    }
                })

                $('#bgRT').on('blur', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.bgRazdelsTitle').css('background-color', $('#bgRT').val())
                        $('.bgRazdelsTitle').attr('data-bgr', $('#bgRT').val())
                    }
                    $('.changeBackground2').css('transform', 'translateY(0px)')

                })

                $('.changeOpacity2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeOpacity2').css('transform', 'translateY(45px)')
                    }
                })

                $('#opacityRT').on('blur', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.bgRazdelsTitle').css('opacity', $('#opacityRT').val())
                    }
                    $('.changeOpacity2').css('transform', 'translateY(0px)')
                })

                $('.changeFontColor2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('.changeFontColor2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontColorRT').on('blur', function () {
                    if ($('#selectEl').val() == 'title') {

                        titleRazdels.style.color = $('#fontColorRT').val()
                        titleRazdels.setAttribute('data-clr', $('#fontColorRT').val())
                    }
                    $('.changeFontColor2').css('transform', 'translateY(0px)')
                })

                $('.inputFontFamily2').on('change', function () {
                    if ($('#selectEl').val() == 'title') {
                        if ($('.inputFontFamily2').val() == 'Sofia Sans Extra Condensed') {
                            $('#titleRazdels').css('font-family', '"Sofia Sans Extra Condensed"')
                        }
                        if ($('.inputFontFamily2').val() == 'Pacifico') {
                            $('#titleRazdels').css('font-family', '"Pacifico"')
                        }

                        if ($('.inputFontFamily2').val() == 'Courier New') {
                            $('#titleRazdels').css('font-family', '"Courier New", Courier, monospace')
                        }
                        if ($('.inputFontFamily2').val() == 'Amatic SC') {
                            $('#titleRazdels').css('font-family', '"Amatic SC"')
                        }
                        if ($('.inputFontFamily2').val() == 'Caveat') {
                            $('#titleRazdels').css('font-family', '"Caveat"')
                        }
                        if ($('.inputFontFamily2').val() == 'Comfortaa') {
                            $('#titleRazdels').css('font-family', '"Comfortaa"')
                        }
                        if ($('.inputFontFamily2').val() == 'Press Start 2P') {
                            $('#titleRazdels').css('font-family', '"Press Start 2P"')
                        }
                        if ($('.inputFontFamily2').val() == 'Rubik Mono One') {
                            $('#titleRazdels').css('font-family', '"Rubik Mono One"')
                        }
                        if ($('.inputFontFamily2').val() == 'Russo One') {
                            $('#titleRazdels').css('font-family', '"Russo One"')
                        }
                    }


                })

                $('.dropdown-item2').on('click', function () {
                    if ($('#selectEl').val() == 'title') {
                        $('input[id="textDecorRT"]').val(this.id)
                        $('#titleRazdels').css('text-decoration', this.id)
                    }
                })
                if ($('#selectEl').val() == 'title') {
                    $('#titleRazdels').css('text-decoration', $('input[id="textDecorRT"]').val())
                }

                $('.changeBold2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'title') {
                        if ($('#boldRT').val() == "bold") {
                            $('.changeBold2').css('background', '#303030')
                            $('#boldRT').val('')
                            $('#titleRazdels').css('font-weight', 'normal')
                        } else {
                            $('.changeBold2').css('background', '#5c5c5c')
                            $('#boldRT').val("bold")
                            $('#titleRazdels').css('font-weight', 'bold')
                        }
                    }

                })

                $('.changeItalic2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'title') {
                        if ($('#italicRT').val() == "italic") {
                            $('.changeItalic2').css('background', '#303030')
                            $('#italicRT').val('')
                            $('#titleRazdels').css('font-style', 'normal')
                        } else {
                            $('.changeItalic2').css('background', '#5c5c5c')
                            $('#italicRT').val("italic")
                            $('#titleRazdels').css('font-style', 'italic')
                        }
                    }
                })

                $('.changeAlign4').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'title') {
                        $('input[id=align]').val("left")
                        titleRazdels.style.textAlign = "left"
                        $('.changeAlign4').css('background-color', '#5c5c5c')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign5').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'title') {
                        $('input[id=align]').val("center")
                        titleRazdels.style.textAlign = "center"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#5c5c5c')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign6').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'title') {
                        $('input[id=align]').val("right")
                        titleRazdels.style.textAlign = "right"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#5c5c5c')
                    }
                })
            }
            var coords = getCoords(zoomRT);
            var coordsbg1 = getCoords(bgRazdelsRT)
            var shiftX = e.x - coords.left;
            var shiftY = e.y - coords.top;
            var shiftXbg = e.x - coordsbg1.left;
            var shiftYbg = e.y - coordsbg1.top;
            zoomRT.style.position = 'absolute';
            bgRazdelsRT.style.position = 'absolute'
            document.querySelector('.body').appendChild(bgRazdelsRT)
            document.querySelector('.body').appendChild(zoomRT);

            moveAt(e);

            zoomRT.style.zIndex = 1000; // над другими элементами
            bgRazdelsRT.style.zIndex = 999;
            function moveAt(e) {
                zoomRT.style.left = e.x - shiftX + 'px';
                zoomRT.style.top = e.y - shiftY + 'px';
                bgRazdelsRT.style.left = e.x - shiftXbg + 'px';
                bgRazdelsRT.style.top = e.y - shiftYbg + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            zoomRT.onmouseup = function () {
                document.onmousemove = null;
                zoomRT.onmouseup = null;
                bgRazdelsRT.onmouseup = null;
                zoomRT.style.zIndex = ''; // над другими элементами
                bgRazdelsRT.style.zIndex = '';
                document.querySelector('.textareaBoxingRazdels').appendChild(zoomRT)
                zoomRT.style.position = 'relative';
                bgRazdelsRT.style.position = 'relative'

            };


        }

        zoomRT.ondragstart = function () {
            return false;
        }; */


        var bgRazdels1 = document.querySelector('.bgRazdels[id="1"]')
        var propBtn = document.querySelector('.razdelMenuButton[id="1"]')
        var razdTitleInput1 = propBtn.querySelector('.razdTitleInput[id="0"]')
        let zoom2 = razdTitleInput1;

        zoom2.onmousedown = function (e) {
            $('.razdelsMenu').css('box-shadow', '')
            $('#titleRazdels').css('box-shadow', '')
            $('.razdelMenuBG').css('box-shadow', '')
            $('.razdTitleInput').css('box-shadow', '')
            $('.razdTitleInput[id="' + this.id + '"]').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
            $('#selectEl').val('razdTitleInput' + this.id)
            if ($('#selectEl').val() == 'razdTitleInput0') {
                var bgRazd = document.querySelector('.bgRazdels[id="1"]')
                var rti = document.querySelector('.razdTitleInput[id="0"]')
                //исходные свойства
                $('#bgRT').val(bgRazd.dataset.bgr1)
                var heightRazd = bgRazd.style.height
                var widthRazd = bgRazd.style.width
                var fontSizeRazd = rti.style.fontSize
                $('#heightRT').val(heightRazd.slice(0, -2))
                $('#widthRT').val(widthRazd.slice(0, -2))
                $('#fontSizeRT').val(fontSizeRazd.slice(0, -2))

                if (rti.style.textAlign == 'left' || rti.style.textAlign == '') {
                    $('.changeAlign4').css('background-color', '#5c5c5c')
                    $('#alignRT').val('left')
                }
                if (rti.style.textAlign == 'center') {
                    $('.changeAlign5').css('background-color', '#5c5c5c')
                    $('#alignRT').val('center')
                }
                if (rti.style.textAlign == 'right') {
                    $('.changeAlign6').css('background-color', '#5c5c5c')
                    $('#alignRT').val('right')
                }
                $('#opacityRT').val(bgRazd.style.opacity)
                $('#fontColorRT').val(rti.dataset.clr2)

                if (rti.style.fontWeight == 'bold') {
                    $('#boldRT').val('bold')
                    $('.changeBold2').css('background-color', '#5c5c5c')

                } else {
                    $('#boldRT').val('normal')
                    $('.changeBold2').css('background-color', '#303030')
                }

                if (rti.style.fontStyle == 'italic') {
                    $('#italicRT').val('italic')
                    $('.changeItalic2').css('background-color', '#5c5c5c')
                } else {
                    $('#italicRT').val('normal')
                    $('.changeItalic2').css('background-color', '#303030')
                }

                if (rti.style.textDecoration != "none" || rti.style.textDecoration != '') {
                    $('#textDecorRT').val(rti.style.textDecoration)
                }

                var options = document.querySelectorAll('.inputFontFamily2')
                for (var i = 0; i < options.length; i++) {
                    if (rti.style.fontFamily == options[i].textContent) {
                        options[i].selected = true
                    }
                }


                //новые свойтсва

                //размер шрифта
                $('.changeFont2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeFont2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontSizeRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.razdTitleInput[id="0"]').css('font-size', $('#fontSizeRT').val() + "px")
                    }
                    $('.changeFont2').css('transform', 'translateY(0px)')
                })

                //высота
                $('.changeHeight2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeHeight2').css('transform', 'translateY(45px)')
                    }
                })

                $('#heightRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.razdTitleInput[id="0"]').css('height', $('#heightRT').val())
                        $('.bgRazdels[id="1"]').css('height', $('#heightRT').val())
                    }
                    $('.changeHeight2').css('transform', 'translateY(0px)')
                })

                //ширина
                $('.changeWidth2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeWidth2').css('transform', 'translateY(45px)')
                    }
                })

                $('#widthRT').on('blur', function () {
                    $('.changeWidth2').css('transform', 'translateY(0px)')
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.razdTitleInput[id="0"]').css('width', $('#widthRT').val())
                        $('.bgRazdels[id="1"]').css('width', $('#widthRT').val())
                    }
                })

                //bg
                $('.changeBackground2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeBackground2').css('transform', 'translateY(45px)')
                    }
                })

                $('#bgRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.bgRazdels[id="1"]').css('background-color', $('#bgRT').val())
                        $('.bgRazdels[id=1]').attr('data-bgr1', $('#bgRT').val())
                    }
                    $('.changeBackground2').css('transform', 'translateY(0px)')
                })

                //opacity
                $('.changeOpacity2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeOpacity2').css('transform', 'translateY(45px)')
                    }
                })

                $('#opacityRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.bgRazdels[id="1"]').css('opacity', $('#opacityRT').val())
                    }
                    $('.changeOpacity2').css('transform', 'translateY(0px)')
                })

                //fontColor
                $('.changeFontColor2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('.changeFontColor2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontColorRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        rti.style.color = $('#fontColorRT').val()
                        rti.setAttribute('data-clr2', $('#fontColorRT').val())
                    }
                    $('.changeFontColor2').css('transform', 'translateY(0px)')
                })

                //fontFamily

                $('.inputFontFamily2').on('change', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        if ($('.inputFontFamily2').val() == 'Sofia Sans Extra Condensed') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Sofia Sans Extra Condensed"')
                        }
                        if ($('.inputFontFamily2').val() == 'Pacifico') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Pacifico"')
                        }
                        if ($('.inputFontFamily2').val() == 'Courier New') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Courier New", Courier, monospace')
                        }
                        if ($('.inputFontFamily2').val() == 'Amatic SC') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Amatic SC"')
                        }
                        if ($('.inputFontFamily2').val() == 'Caveat') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Caveat"')
                        }
                        if ($('.inputFontFamily2').val() == 'Comfortaa') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Comfortaa"')
                        }
                        if ($('.inputFontFamily2').val() == 'Press Start 2P') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Press Start 2P"')
                        }
                        if ($('.inputFontFamily2').val() == 'Rubik Mono One') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Rubik Mono One"')
                        }
                        if ($('.inputFontFamily2').val() == 'Russo One') {
                            $('.razdTitleInput[id="0"]').css('font-family', '"Russo One"')
                        }
                    }

                })

                //textDecoration
                $('.dropdown-item2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('input[id="textDecorRT"]').val(this.id)
                        $('.razdTitleInput[id="0"]').css('text-decoration', this.id)
                    }
                })
                if ($('#selectEl').val() == 'razdTitleInput0') {
                    $('.razdTitleInput[id="0"]').css('text-decoration', $('input[id="textDecorRT"]').val())
                }

                //fontWeight
                $('.changeBold2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        if ($('#boldRT').val() == "bold") {
                            $('.changeBold2').css('background', '#303030')
                            $('#boldRT').val('')
                            $('.razdTitleInput[id="0"]').css('font-weight', 'normal')
                        } else {
                            $('.changeBold2').css('background', '#5c5c5c')
                            $('#boldRT').val("bold")
                            $('.razdTitleInput[id="0"]').css('font-weight', 'bold')
                        }
                    }

                })

                //fontStyle
                $('.changeItalic2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        if ($('#italicRT').val() == "italic") {
                            $('.changeItalic2').css('background', '#303030')
                            $('#italicRT').val('')
                            $('.razdTitleInput[id="0"]').css('font-style', 'normal')
                        } else {
                            $('.changeItalic2').css('background', '#5c5c5c')
                            $('#italicRT').val("italic")
                            $('.razdTitleInput[id="0"]').css('font-style', 'italic')
                        }
                    }
                })

                //textAlign
                $('.changeAlign4').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('input[id=align]').val("left")
                        rti.style.textAlign = "left"
                        $('.changeAlign4').css('background-color', '#5c5c5c')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign5').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('input[id=align]').val("center")
                        rti.style.textAlign = "center"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#5c5c5c')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign6').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        $('input[id=align]').val("right")
                        rti.style.textAlign = "right"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#5c5c5c')
                    }
                })

                //figureTextarea->titleRazdel
                $('.dropdown-item3').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput0') {
                        if (this.id == 'rectangle') {
                            $('.razdTitleInput[id="0"]').css('border-top-right-radius', '0px')
                            $('.razdTitleInput[id="0"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="0"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="0"]').css('border-bottom-left-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-top-right-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-bottom-left-radius', '0px')
                        }

                        if (this.id == 'oval') {
                            $('.razdTitleInput[id="0"]').css('border-radius', '50%')
                            $('.bgRazdels[id=1]').css('border-radius', '50%')
                        }

                        if (this.id == 'petal') {
                            $('.razdTitleInput[id="0"]').css('border-top-right-radius', '60px')
                            $('.razdTitleInput[id="0"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="0"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="0"]').css('border-bottom-left-radius', '60px')
                            $('.bgRazdels[id=1]').css('border-top-right-radius', '60px')
                            $('.bgRazdels[id=1]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id=1]').css('border-bottom-left-radius', '60px')
                        }

                    }
                })


            }
            var coords = getCoords(zoom2);
            var coordsbg1 = getCoords(bgRazdels1)
            var shiftX = e.x - coords.left;
            console.log(shiftX)

            var shiftY = e.y - coords.top;
            console.log(shiftY)
            var shiftXbg = e.x - coordsbg1.left;
            var shiftYbg = e.y - coordsbg1.top;
            zoom2.style.position = 'absolute';
            bgRazdels1.style.position = 'absolute'

            document.body.appendChild(zoom2);
            document.body.appendChild(bgRazdels1)
            moveAt(e);

            zoom2.style.zIndex = 1000; // над другими элементами
            bgRazdels1.style.zIndex = 999;
            function moveAt(e) {
                zoom2.style.left = e.x - shiftX + 'px';
                zoom2.style.top = e.y - shiftY + 'px';
                bgRazdels1.style.left = e.x - shiftXbg + 'px';
                bgRazdels1.style.top = e.y - shiftYbg + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            zoom2.onmouseup = function () {
                document.onmousemove = null;
                zoom2.onmouseup = null;
                bgRazdels1.onmouseup = null;
            };


        }

        zoom2.ondragstart = function () {
            return false;
        };

        var bgRazdels2 = document.querySelector('.bgRazdels[id="2"]')
        var razdTitleInput2 = document.querySelector('.razdTitleInput[id="1"]')
        let zoom3 = razdTitleInput2;

        zoom3.onmousedown = function (e) {
            $('.razdelsMenu').css('box-shadow', '')
            $('#titleRazdels').css('box-shadow', '')
            $('.razdelMenuBG').css('box-shadow', '')
            $('.razdTitleInput').css('box-shadow', '')
            $('.razdTitleInput[id="' + this.id + '"]').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
            $('#selectEl').val('razdTitleInput' + this.id)
            if ($('#selectEl').val() == 'razdTitleInput1') {
                var bgRazd1 = document.querySelector('.bgRazdels[id="2"]')
                var rti1 = document.querySelector('.razdTitleInput[id="1"]')
                //исходные свойства
                $('#bgRT').val(bgRazd1.dataset.bgr1)
                var heightRazd1 = bgRazd1.style.height
                var widthRazd1 = bgRazd1.style.width
                var fontSizeRazd1 = rti1.style.fontSize
                $('#heightRT').val(heightRazd1.slice(0, -2))
                $('#widthRT').val(widthRazd1.slice(0, -2))
                $('#fontSizeRT').val(fontSizeRazd1.slice(0, -2))

                if (rti1.style.textAlign == 'left' || rti1.style.textAlign == '') {
                    $('.changeAlign4').css('background-color', '#5c5c5c')
                    $('#alignRT').val('left')
                }
                if (rti1.style.textAlign == 'center') {
                    $('.changeAlign5').css('background-color', '#5c5c5c')
                    $('#alignRT').val('center')
                }
                if (rti1.style.textAlign == 'right') {
                    $('.changeAlign6').css('background-color', '#5c5c5c')
                    $('#alignRT').val('right')
                }
                $('#opacityRT').val(bgRazd1.style.opacity)
                $('#fontColorRT').val(rti1.dataset.clr2)

                if (rti1.style.fontWeight == 'bold') {
                    $('#boldRT').val('bold')
                    $('.changeBold2').css('background-color', '#5c5c5c')

                } else {
                    $('#boldRT').val('normal')
                    $('.changeBold2').css('background-color', '#303030')
                }

                if (rti1.style.fontStyle == 'italic') {
                    $('#italicRT').val('italic')
                    $('.changeItalic2').css('background-color', '#5c5c5c')
                } else {
                    $('#italicRT').val('normal')
                    $('.changeItalic2').css('background-color', '#303030')
                }

                if (rti1.style.textDecoration != "none" || rti1.style.textDecoration != '') {
                    $('#textDecorRT').val(rti1.style.textDecoration)
                }

                var options = document.querySelectorAll('.inputFontFamily2')
                for (var i = 0; i < options.length; i++) {
                    if (rti1.style.fontFamily == options[i].textContent) {
                        options[i].selected = true
                    }
                }


                //новые свойтсва

                //размер шрифта
                $('.changeFont2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeFont2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontSizeRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.razdTitleInput[id="1"]').css('font-size', $('#fontSizeRT').val() + "px")
                    }
                    $('.changeFont2').css('transform', 'translateY(0px)')
                })

                //высота
                $('.changeHeight2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeHeight2').css('transform', 'translateY(45px)')
                    }
                })

                $('#heightRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.razdTitleInput[id="1"]').css('height', $('#heightRT').val())
                        $('.bgRazdels[id="2"]').css('height', $('#heightRT').val())
                    }
                    $('.changeHeight2').css('transform', 'translateY(0px)')
                })

                //ширина
                $('.changeWidth2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeWidth2').css('transform', 'translateY(45px)')
                    }
                })

                $('#widthRT').on('blur', function () {
                    $('.changeWidth2').css('transform', 'translateY(0px)')
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.razdTitleInput[id="1"]').css('width', $('#widthRT').val())
                        $('.bgRazdels[id="2"]').css('width', $('#widthRT').val())
                    }
                })

                //bg
                $('.changeBackground2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeBackground2').css('transform', 'translateY(45px)')
                    }
                })

                $('#bgRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.bgRazdels[id="2"]').css('background-color', $('#bgRT').val())
                        $('.bgRazdels[id=2]').attr('data-bgr1', $('#bgRT').val())
                    }
                    $('.changeBackground2').css('transform', 'translateY(0px)')
                })

                //opacity
                $('.changeOpacity2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeOpacity2').css('transform', 'translateY(45px)')
                    }
                })

                $('#opacityRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.bgRazdels[id="2"]').css('opacity', $('#opacityRT').val())
                    }
                    $('.changeOpacity2').css('transform', 'translateY(0px)')
                })

                //fontColor
                $('.changeFontColor2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('.changeFontColor2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontColorRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        rti1.style.color = $('#fontColorRT').val()
                        rti1.setAttribute('data-clr2', $('#fontColorRT').val())
                    }
                    $('.changeFontColor2').css('transform', 'translateY(0px)')
                })

                //fontFamily

                $('.inputFontFamily2').on('change', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        if ($('.inputFontFamily2').val() == 'Sofia Sans Extra Condensed') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Sofia Sans Extra Condensed"')
                        }
                        if ($('.inputFontFamily2').val() == 'Pacifico') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Pacifico"')
                        }
                        if ($('.inputFontFamily2').val() == 'Courier New') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Courier New", Courier, monospace')
                        }
                        if ($('.inputFontFamily2').val() == 'Amatic SC') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Amatic SC"')
                        }
                        if ($('.inputFontFamily2').val() == 'Caveat') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Caveat"')
                        }
                        if ($('.inputFontFamily2').val() == 'Comfortaa') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Comfortaa"')
                        }
                        if ($('.inputFontFamily2').val() == 'Press Start 2P') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Press Start 2P"')
                        }
                        if ($('.inputFontFamily2').val() == 'Rubik Mono One') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Rubik Mono One"')
                        }
                        if ($('.inputFontFamily2').val() == 'Russo One') {
                            $('.razdTitleInput[id="1"]').css('font-family', '"Russo One"')
                        }
                    }

                })

                //textDecoration
                $('.dropdown-item2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('input[id="textDecorRT"]').val(this.id)
                        $('.razdTitleInput[id="1"]').css('text-decoration', this.id)
                    }
                })
                if ($('#selectEl').val() == 'razdTitleInput1') {
                    $('.razdTitleInput[id="1"]').css('text-decoration', $('input[id="textDecorRT"]').val())
                }

                //fontWeight
                $('.changeBold2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        if ($('#boldRT').val() == "bold") {
                            $('.changeBold2').css('background', '#303030')
                            $('#boldRT').val('')
                            $('.razdTitleInput[id="1"]').css('font-weight', 'normal')
                        } else {
                            $('.changeBold2').css('background', '#5c5c5c')
                            $('#boldRT').val("bold")
                            $('.razdTitleInput[id="1"]').css('font-weight', 'bold')
                        }
                    }

                })

                //fontStyle
                $('.changeItalic2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        if ($('#italicRT').val() == "italic") {
                            $('.changeItalic2').css('background', '#303030')
                            $('#italicRT').val('')
                            $('.razdTitleInput[id="1"]').css('font-style', 'normal')
                        } else {
                            $('.changeItalic2').css('background', '#5c5c5c')
                            $('#italicRT').val("italic")
                            $('.razdTitleInput[id="1"]').css('font-style', 'italic')
                        }
                    }
                })

                //textAlign
                $('.changeAlign4').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('input[id=align]').val("left")
                        rti1.style.textAlign = "left"
                        $('.changeAlign4').css('background-color', '#5c5c5c')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign5').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('input[id=align]').val("center")
                        rti1.style.textAlign = "center"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#5c5c5c')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign6').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        $('input[id=align]').val("right")
                        rti1.style.textAlign = "right"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#5c5c5c')
                    }
                })

                //figureTextarea->titleRazdel
                $('.dropdown-item3').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput1') {
                        if (this.id == 'rectangle') {
                            $('.razdTitleInput[id="1"]').css('border-top-right-radius', '0px')
                            $('.razdTitleInput[id="1"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="1"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="1"]').css('border-bottom-left-radius', '0px')
                            $('.bgRazdels[id=2]').css('border-top-right-radius', '0px')
                            $('.bgRazdels[id=2]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id=2]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id=2]').css('border-bottom-left-radius', '0px')
                        }

                        if (this.id == 'oval') {
                            $('.razdTitleInput[id="1"]').css('border-radius', '50%')
                            $('.bgRazdels[id="2"]').css('border-radius', '50%')
                        }

                        if (this.id == 'petal') {
                            $('.razdTitleInput[id="1"]').css('border-top-right-radius', '60px')
                            $('.razdTitleInput[id="1"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="1"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="1"]').css('border-bottom-left-radius', '60px')
                            $('.bgRazdels[id="2"]').css('border-top-right-radius', '60px')
                            $('.bgRazdels[id="2"]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id="2"]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id="2"]').css('border-bottom-left-radius', '60px')
                        }

                    }
                })
            }
            var coords = getCoords(zoom3);
            var coordsbg1 = getCoords(bgRazdels2)
            var shiftX = e.x - coords.left;
            var shiftY = e.y - coords.top;
            var shiftXbg = e.x - coordsbg1.left;
            var shiftYbg = e.y - coordsbg1.top;
            zoom3.style.position = 'absolute';
            bgRazdels2.style.position = 'absolute'
            document.body.appendChild(zoom3);
            document.body.appendChild(bgRazdels2)
            moveAt(e);

            zoom3.style.zIndex = 1000; // над другими элементами
            bgRazdels2.style.zIndex = 999;
            function moveAt(e) {
                zoom3.style.left = e.x - shiftX + 'px';
                zoom3.style.top = e.y - shiftY + 'px';
                bgRazdels2.style.left = e.x - shiftXbg + 'px';
                bgRazdels2.style.top = e.y - shiftYbg + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            zoom3.onmouseup = function () {
                document.onmousemove = null;
                zoom3.onmouseup = null;
                bgRazdels2.onmouseup = null;
            };


        }

        zoom3.ondragstart = function () {
            return false;
        };

        var bgRazdels3 = document.querySelector('.bgRazdels[id="3"]')
        var razdTitleInput3 = document.querySelector('.razdTitleInput[id="2"]')
        let zoom4 = razdTitleInput3;

        zoom4.onmousedown = function (e) {
            $('.razdelsMenu').css('box-shadow', '')
            $('#titleRazdels').css('box-shadow', '')
            $('.razdelMenuBG').css('box-shadow', '')
            $('.razdTitleInput').css('box-shadow', '')
            $('.razdTitleInput[id="' + this.id + '"]').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
            $('#selectEl').val('razdTitleInput' + this.id)
            if ($('#selectEl').val() == 'razdTitleInput2') {
                var bgRazd2 = document.querySelector('.bgRazdels[id="3"]')
                var rti2 = document.querySelector('.razdTitleInput[id="2"]')
                //исходные свойства
                $('#bgRT').val(bgRazd2.dataset.bgr1)
                var heightRazd2 = bgRazd2.style.height
                var widthRazd2 = bgRazd2.style.width
                var fontSizeRazd2 = rti2.style.fontSize
                $('#heightRT').val(heightRazd2.slice(0, -2))
                $('#widthRT').val(widthRazd2.slice(0, -2))
                $('#fontSizeRT').val(fontSizeRazd2.slice(0, -2))

                if (rti2.style.textAlign == 'left' || rti2.style.textAlign == '') {
                    $('.changeAlign4').css('background-color', '#5c5c5c')
                    $('#alignRT').val('left')
                }
                if (rti2.style.textAlign == 'center') {
                    $('.changeAlign5').css('background-color', '#5c5c5c')
                    $('#alignRT').val('center')
                }
                if (rti2.style.textAlign == 'right') {
                    $('.changeAlign6').css('background-color', '#5c5c5c')
                    $('#alignRT').val('right')
                }
                $('#opacityRT').val(bgRazd2.style.opacity)
                $('#fontColorRT').val(rti2.dataset.clr2)

                if (rti2.style.fontWeight == 'bold') {
                    $('#boldRT').val('bold')
                    $('.changeBold2').css('background-color', '#5c5c5c')

                } else {
                    $('#boldRT').val('normal')
                    $('.changeBold2').css('background-color', '#303030')
                }

                if (rti2.style.fontStyle == 'italic') {
                    $('#italicRT').val('italic')
                    $('.changeItalic2').css('background-color', '#5c5c5c')
                } else {
                    $('#italicRT').val('normal')
                    $('.changeItalic2').css('background-color', '#303030')
                }

                if (rti2.style.textDecoration != "none" || rti2.style.textDecoration != '') {
                    $('#textDecorRT').val(rti2.style.textDecoration)
                }

                var options = document.querySelectorAll('.inputFontFamily2')
                for (var i = 0; i < options.length; i++) {
                    if (rti2.style.fontFamily == options[i].textContent) {
                        options[i].selected = true
                    }
                }


                //новые свойтсва

                //размер шрифта
                $('.changeFont2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeFont2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontSizeRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.razdTitleInput[id="2"]').css('font-size', $('#fontSizeRT').val() + "px")
                    }
                    $('.changeFont2').css('transform', 'translateY(0px)')
                })

                //высота
                $('.changeHeight2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeHeight2').css('transform', 'translateY(45px)')
                    }
                })

                $('#heightRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.razdTitleInput[id="2"]').css('height', $('#heightRT').val())
                        $('.bgRazdels[id="3"]').css('height', $('#heightRT').val())
                    }
                    $('.changeHeight2').css('transform', 'translateY(0px)')
                })

                //ширина
                $('.changeWidth2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeWidth2').css('transform', 'translateY(45px)')
                    }
                })

                $('#widthRT').on('blur', function () {
                    $('.changeWidth2').css('transform', 'translateY(0px)')
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.razdTitleInput[id="2"]').css('width', $('#widthRT').val())
                        $('.bgRazdels[id="3"]').css('width', $('#widthRT').val())
                    }
                })

                //bg
                $('.changeBackground2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeBackground2').css('transform', 'translateY(45px)')
                    }
                })

                $('#bgRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.bgRazdels[id="3"]').css('background-color', $('#bgRT').val())
                        $('.bgRazdels[id=3]').attr('data-bgr1', $('#bgRT').val())
                    }
                    $('.changeBackground2').css('transform', 'translateY(0px)')
                })

                //opacity
                $('.changeOpacity2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeOpacity2').css('transform', 'translateY(45px)')
                    }
                })

                $('#opacityRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.bgRazdels[id="3"]').css('opacity', $('#opacityRT').val())
                    }
                    $('.changeOpacity2').css('transform', 'translateY(0px)')
                })

                //fontColor
                $('.changeFontColor2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('.changeFontColor2').css('transform', 'translateY(45px)')
                    }
                })

                $('#fontColorRT').on('blur', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        rti2.style.color = $('#fontColorRT').val()
                        rti2.setAttribute('data-clr2', $('#fontColorRT').val())
                    }
                    $('.changeFontColor2').css('transform', 'translateY(0px)')
                })

                //fontFamily

                $('.inputFontFamily2').on('change', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        if ($('.inputFontFamily2').val() == 'Sofia Sans Extra Condensed') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Sofia Sans Extra Condensed"')
                        }
                        if ($('.inputFontFamily2').val() == 'Pacifico') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Pacifico"')
                        }
                        if ($('.inputFontFamily2').val() == 'Courier New') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Courier New", Courier, monospace')
                        }
                        if ($('.inputFontFamily2').val() == 'Amatic SC') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Amatic SC"')
                        }
                        if ($('.inputFontFamily2').val() == 'Caveat') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Caveat"')
                        }
                        if ($('.inputFontFamily2').val() == 'Comfortaa') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Comfortaa"')
                        }
                        if ($('.inputFontFamily2').val() == 'Press Start 2P') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Press Start 2P"')
                        }
                        if ($('.inputFontFamily2').val() == 'Rubik Mono One') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Rubik Mono One"')
                        }
                        if ($('.inputFontFamily2').val() == 'Russo One') {
                            $('.razdTitleInput[id="2"]').css('font-family', '"Russo One"')
                        }
                    }

                })

                //textDecoration
                $('.dropdown-item2').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('input[id="textDecorRT"]').val(this.id)
                        $('.razdTitleInput[id="2"]').css('text-decoration', this.id)
                    }
                })
                if ($('#selectEl').val() == 'razdTitleInput2') {
                    $('.razdTitleInput[id="2"]').css('text-decoration', $('input[id="textDecorRT"]').val())
                }

                //fontWeight
                $('.changeBold2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        if ($('#boldRT').val() == "bold") {
                            $('.changeBold2').css('background', '#303030')
                            $('#boldRT').val('')
                            $('.razdTitleInput[id="2"]').css('font-weight', 'normal')
                        } else {
                            $('.changeBold2').css('background', '#5c5c5c')
                            $('#boldRT').val("bold")
                            $('.razdTitleInput[id="2"]').css('font-weight', 'bold')
                        }
                    }

                })

                //fontStyle
                $('.changeItalic2').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        if ($('#italicRT').val() == "italic") {
                            $('.changeItalic2').css('background', '#303030')
                            $('#italicRT').val('')
                            $('.razdTitleInput[id="2"]').css('font-style', 'normal')
                        } else {
                            $('.changeItalic2').css('background', '#5c5c5c')
                            $('#italicRT').val("italic")
                            $('.razdTitleInput[id="2"]').css('font-style', 'italic')
                        }
                    }
                })

                //textAlign
                $('.changeAlign4').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('input[id=align]').val("left")
                        rti2.style.textAlign = "left"
                        $('.changeAlign4').css('background-color', '#5c5c5c')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign5').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('input[id=align]').val("center")
                        rti2.style.textAlign = "center"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#5c5c5c')
                        $('.changeAlign6').css('background-color', '#303030')
                    }
                })

                $('.changeAlign6').on('click', function (evt) {
                    evt.preventDefault();
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        $('input[id=align]').val("right")
                        rti2.style.textAlign = "right"
                        $('.changeAlign4').css('background-color', '#303030')
                        $('.changeAlign5').css('background-color', '#303030')
                        $('.changeAlign6').css('background-color', '#5c5c5c')
                    }
                })

                //figureTextarea->titleRazdel
                $('.dropdown-item3').on('click', function () {
                    if ($('#selectEl').val() == 'razdTitleInput2') {
                        if (this.id == 'rectangle') {
                            $('.razdTitleInput[id="2"]').css('border-top-right-radius', '0px')
                            $('.razdTitleInput[id="2"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="2"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="2"]').css('border-bottom-left-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-top-right-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-bottom-left-radius', '0px')
                        }

                        if (this.id == 'oval') {
                            $('.razdTitleInput[id="2"]').css('border-radius', '50%')
                            $('.bgRazdels[id="3"]').css('border-radius', '50%')
                        }

                        if (this.id == 'petal') {
                            $('.razdTitleInput[id="2"]').css('border-top-right-radius', '60px')
                            $('.razdTitleInput[id="2"]').css('border-top-left-radius', '0px')
                            $('.razdTitleInput[id="2"]').css('border-bottom-right-radius', '0px')
                            $('.razdTitleInput[id="2"]').css('border-bottom-left-radius', '60px')
                            $('.bgRazdels[id="3"]').css('border-top-right-radius', '60px')
                            $('.bgRazdels[id="3"]').css('border-top-left-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-bottom-right-radius', '0px')
                            $('.bgRazdels[id="3"]').css('border-bottom-left-radius', '60px')
                        }

                    }
                })
            }
            $('.razdelsMenu').css('box-shadow', '')
            $('#titleRazdels').css('box-shadow', '')
            $('.razdelMenuBG').css('box-shadow', '')
            $('.razdTitleInput').css('box-shadow', '')
            $('.razdTitleInput[id="' + this.id + '"]').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
            $('#selectEl').val('razdTitleInput' + this.id)
            var coords = getCoords(zoom4);
            var coordsbg1 = getCoords(bgRazdels3)
            var shiftX = e.x - coords.left;
            var shiftY = e.y - coords.top;
            var shiftXbg = e.x - coordsbg1.left;
            var shiftYbg = e.y - coordsbg1.top;
            zoom4.style.position = 'absolute';
            bgRazdels3.style.position = 'absolute'
            document.body.appendChild(zoom4);
            document.body.appendChild(bgRazdels3)
            moveAt(e);

            zoom4.style.zIndex = 1000; // над другими элементами
            bgRazdels3.style.zIndex = 999;
            function moveAt(e) {
                zoom4.style.left = e.x - shiftX + 'px';
                zoom4.style.top = e.y - shiftY + 'px';
                bgRazdels3.style.left = e.x - shiftXbg + 'px';
                bgRazdels3.style.top = e.y - shiftYbg + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };

            zoom4.onmouseup = function () {
                document.onmousemove = null;
                zoom4.onmouseup = null;
                bgRazdels3.onmouseup = null;
            };


        }

        zoom4.ondragstart = function () {
            return false;
        };



        exTitleInput.addEventListener('dblclick', function () {
            $('.exTitleInput').focus()
            $('.exTitleInput').prop('disabled', false)
        })

        $('.exTitleInput').on('blur', function () {
            $('.exTitleInput').prop('disabled', true)
        })

    }
    function getCoords(elem) {   // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}
console.log(window.screen.width)
console.log(window.screen.height)

