$(function(){
    
    $("#gnb").hover(function(){
        $('.subbg').slideToggle('.subbg');
        $("#gnb li #sub").slideToggle("#sub");
        $('.time').slideToggle('.time');
    });
    $("#gnb").mouseenter(function(){
        
        $("#header .subbg").css({'border-top':'none'});
    }).mouseleave(function(){
        
    });
    
    $("#fastmenu h3 a").click(function(e){
        e.preventDefault();
       $("#fastmenu").toggleClass('on').css({'transition':'all 0.5s'}); 
        $(this).toggleClass('on').css({'transition':'all 0.3s'});
    });
    
    

    
});