function resizeCaptcha() {

    var elementHTML = '#elemento' //elemento que vai servir como tamanho base
    
    const defaultWidthCaptcha = 304; // tamanho padrao da captcha
    
    var inputWidth = $(elementHTML).width(); // pega um elemento como base
    
    var total = inputWidth * 100 / defaultWidthCaptcha / 100+0.09 //tamanho total da captcha
    
    $('.g-recaptcha').css('transform','scale('+total+')') //vai se ajustando de acordo com o tamanho ta tela
    }
    
    $(window).resize(function(){ //função executada no resize
        resizeCaptcha()   
    });
    $(document).ready(function(){
       resizeCaptcha()  
    })