$(function(){
    
    $("#gnb").hover(function(){
        $('.subbg').slideToggle('.subbg');
        $("#gnb li #sub").slideToggle("#sub");
        $('.time').slideToggle('.time');
    });
    $("#gnb").mouseenter(function(){
       $("#header").css({'background':'white', 'transition':'all 0.3s'}); 
        $("#gnb>li>a").css({'color':'black'});
        $("#head>h2>a>img").attr('src', '../images/logob.png');
    }).mouseleave(function(){
        $("#header").css({'background':'none', 'transition':'all 0.3s'})
        $("#gnb>li>a").css({'color':'white'});
        $("#head>h2>a>img").attr('src', '../images/logo.png');
    });
    
    $("#fastmenu h3 a").click(function(e){
        e.preventDefault();
       $("#fastmenu").toggleClass('on').css({'transition':'all 0.5s'}); 
        $(this).toggleClass('on').css({'transition':'all 0.3s'});
    });
    
    

    
});