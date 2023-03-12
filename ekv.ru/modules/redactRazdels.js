var bgRt = document.querySelector('.bgRazdelsTitle')
var titleRazdels = document.querySelector('#titleRazdels')

// исходные данные выбранного заголовка
$('#titleRazdels').on('click', function (e) {
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
}) 

var bgSection = document.querySelector('.razdelsMenu')
var btnBg = document.querySelector('.btnChangeBg')
var btnBgImage = document.querySelector('.btnChangeBgImage')
$('.btnChangeBg').on('click', function () {
    $('#selectEl').val('bg')
    if ($('#selectEl').val() == 'bg') {
        $('.razdelsMenu').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
        $('#titleRazdels').css('box-shadow', '')
        $('.razdelMenuBG').css('box-shadow', '')
        $('.razdTitleInput').css('box-shadow', '')
        $('#bgRT').on('blur', function () {
            if ($('#selectEl').val() == 'bg') { // всем элементам при титле добавить
                bgSection.style.backgroundColor = $('#bgRT').val()
                bgSection.setAttribute('data-bgBlock', $('#bgRT').val())
            }

        })


    }
})

//фигура раздела
$('.razdelMenuButton').on('click', function () {
    $('.razdelsMenu').css('box-shadow', '')
    $('#titleRazdels').css('box-shadow', '')
    $('.razdelMenuBG').css('box-shadow', '')
    $('.razdTitleInput').css('box-shadow', '')
    $('.razdelMenuBG[id=' + this.id + ']').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
    if (this.id == 1) {
        $('#selectEl').val('buttRazdel1')
    }
    if (this.id == 2) {
        $('#selectEl').val('buttRazdel2')
    }
    if (this.id == 3) {
        $('#selectEl').val('buttRazdel3')
    }

    if ($('#selectEl').val() == 'buttRazdel1') {
        $('.dropdown-item3').on('click', function () {
            if (this.id == 'rectangle') {
                if ($('#selectEl').val() == 'buttRazdel1') {
                    $('input[id="figure"]').val("rectangle")
                    $('.razdImg[id="1"]').css('border-top-right-radius', '0px')
                    $('.razdImg[id="1"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="1"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="1"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-top-right-radius', '0px')
                }

                if ($('#selectEl').val() == 'buttRazdel2') {
                    $('input[id="figure"]').val("rectangle")
                    $('.razdImg[id="2"]').css('border-top-right-radius', '0px')
                    $('.razdImg[id="2"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="2"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="2"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-top-right-radius', '0px')
                }

                if ($('#selectEl').val() == 'buttRazdel3') {
                    $('input[id="figure"]').val("rectangle")
                    $('.razdImg[id="3"]').css('border-top-right-radius', '0px')
                    $('.razdImg[id="3"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="3"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="3"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-bottom-left-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-top-right-radius', '0px')
                }
            }

            if (this.id == 'oval') {
                if ($('#selectEl').val() == 'buttRazdel1') {
                    $('input[id="figure"]').val("oval")
                    $('.razdImg[id="1"]').css('border-radius', '50%')
                    $('.razdelMenuBG[id="1"]').css('border-radius', '50%')
                }

                if ($('#selectEl').val() == 'buttRazdel2') {
                    $('input[id="figure"]').val("oval")
                    $('.razdImg[id="2"]').css('border-radius', '50%')
                    $('.razdelMenuBG[id="2"]').css('border-radius', '50%')
                }

                if ($('#selectEl').val() == 'buttRazdel3') {
                    $('input[id="figure"]').val("oval")
                    $('.razdImg[id="3"]').css('border-radius', '50%')
                    $('.razdelMenuBG[id="3"]').css('border-radius', '50%')
                }
            }

            if (this.id == 'petal') {
                if ($('#selectEl').val() == 'buttRazdel1') {
                    $('input[id="figure"]').val("petal")
                    $('.razdImg[id="1"]').css('border-top-right-radius', '60px')
                    $('.razdImg[id="1"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="1"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="1"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="1"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="1"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="1"]').css('border-top-right-radius', '60px')
                }

                if ($('#selectEl').val() == 'buttRazdel2') {
                    $('input[id="figure"]').val("petal")
                    $('.razdImg[id="2"]').css('border-top-right-radius', '60px')
                    $('.razdImg[id="2"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="2"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="2"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="2"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="2"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="2"]').css('border-top-right-radius', '60px')
                }

                if ($('#selectEl').val() == 'buttRazdel3') {
                    $('input[id="figure"]').val("petal")
                    $('.razdImg[id="3"]').css('border-top-right-radius', '60px')
                    $('.razdImg[id="3"]').css('border-top-left-radius', '0px')
                    $('.razdImg[id="3"]').css('border-bottom-right-radius', '0px')
                    $('.razdImg[id="3"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="3"]').css('border-bottom-left-radius', '60px')
                    $('.razdelMenuBG[id="3"]').css('border-bottom-right-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-top-left-radius', '0px')
                    $('.razdelMenuBG[id="3"]').css('border-top-right-radius', '60px')
                }
            }
        })

    }


})


//редактирование названий разделов

$('.razdTitleInput').on('click', function (evt) {
    evt.preventDefault()
    $('.razdTitleInput').blur()
})

$('.razdTitleInput').on('click', function () {
    $('#selectEl').val('razdTitleInput' + this.id)
    $('.razdTitleInput[id="' + this.id + '"]').focus()
    $('.razdelMenuBG').css('box-shadow', '')
    $('.textareaBoxingRazdels').css('box-shadow', '')
    $('.razdTitleInput').css('box-shadow', '')
    $('.razdTitleInput[id="' + this.id + '"]').css('box-shadow', 'inset 0px 0px 30px rgb(0, 249, 4)')
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
        $('#fontColorRT').val(bgRazd.dataset.clr2)

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

    //для второго заголовка
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
        $('#fontColorRT').val(bgRazd1.dataset.clr2)

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


    //для третьего заголовка
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
        $('#fontColorRT').val(bgRazd2.dataset.clr2)

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
})