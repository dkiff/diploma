var sitebarButton = document.querySelector('.sitebarButton')
var sitebar = document.querySelector('.sitebarNav')
var arrow = document.querySelector('.arrow')
if(sitebar){
    sitebar.style.transform = 'translateX(-350px)'
sitebarButton.style.transform = 'translateX(0)'
sitebarButton.addEventListener('click', function(){
    if(sitebar.style.transform == "translateX(-350px)"){
        sitebar.style.transform = "translateX(0)"
        sitebarButton.style.transform = "translateX(350px)"
        arrow.setAttribute('src', './img/arrowSitebarL.svg')
    } else{
        sitebar.style.transform = "translateX(-350px)"
        sitebarButton.style.transform = "translateX(0)"
        arrow.setAttribute('src', './img/arrowSitebarR.svg')
    }
})
}


var btnBoSave = document.querySelectorAll('.saveBo')
var redactBoInp = document.querySelectorAll('.form-control')
$('.saveBo').on('mouseover', function(){
    for(var i=0; i<redactBoInp.length;i++){
        redactBoInp[i].style.boxShadow = " inset 0 0 10px green"
        redactBoInp[i].style.transition = 'all 0.5s ease'
    }
})
$('.saveBo').on('mouseout',function(){
    for(var i=0; i<redactBoInp.length;i++){
        redactBoInp[i].style.boxShadow = "none"
        redactBoInp[i].style.transition = 'all 0.5s ease'
    }
})

