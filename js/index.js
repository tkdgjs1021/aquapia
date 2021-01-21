$(function(){
    
    $(window).load(function(){
        $("#main1 .slogan").delay(300).animate({top:'65%', opacity:'1'}, 1000); 
    });
   
   $(".main").mousewheel(function(e, d){
        var i = $(this).index();
       console.log(i);
               
        if(d>0){     //휠올릴때
            var prev = $(this).prev().offset().top;                 
            $("html, body").stop().animate({scrollTop:prev},800, "easeOutCubic");  
            if(i==5){
                       $(".bttn").css({'opacity':'1', 'transition':'all 0.3s'});
                   }
        } else if(d<0){      //휠 내릴때
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({scrollTop:next},800, "easeOutCubic");
            if(i==4){
                       $(".bttn").css({'opacity':'0', 'transition':'all 0.3s'});
                   }
        }
    });
    
    $("#gnb").hover(function(){
        $('.subbg').slideToggle('.subbg');
        $("#gnb li #sub").slideToggle("#sub");
        $('.time').slideToggle('.time');
    });
    $("#gnb").mouseenter(function(){
       $("#header").css({'background':'white', 'transition':'all 0.3s'}); 
        $("#gnb>li>a").css({'color':'black'});
        $("#head>h2>a>img").attr('src', 'images/logob.png');
    }).mouseleave(function(){
        $("#header").css({'background':'none', 'transition':'all 0.3s'})
        $("#gnb>li>a").css({'color':'white'});
        $("#head>h2>a>img").attr('src', 'images/logo.png');
    });
    
    $("#fastmenu h3 a").click(function(e){
        e.preventDefault();
       $("#fastmenu").toggleClass('on').css({'transition':'all 0.5s'}); 
        $(this).toggleClass('on').css({'transition':'all 0.3s'});
    });
    
    
    $(".more1 a").mouseenter(function(){
       $(this).css({'background':'white', 'color':'black', 'transition':'all 0.3s'}); 
    }).mouseleave(function(){
        $(this).css({'background':'none', 'color':'white', 'transition':'all 0.3s'}); 
    });
    $(".more2 a").mouseenter(function(){
       $(this).css({'background':'#0053c8', 'color':'white', 'transition':'all 0.3s'}); 
    }).mouseleave(function(){
        $(this).css({'background':'none', 'color':'white', 'transition':'all 0.3s'}); 
    });
    
    $("#main3 .sector").mouseenter(function(){
       $(this).css({'background':'#0053c8', 'transition':'all 0.3s'}); 
    }).mouseleave(function(){
        $(this).css({'background':'rgba(255,255,255,0.3)', 'transition':'all 0.3s'});
    });
    
    $("#main4 .sector").mouseenter(function(){
       $(this).css({'background':'#0053c8', 'transition':'all 0.3s'}); 
    }).mouseleave(function(){
        $(this).css({'background':'rgba(255,255,255,0.3)', 'transition':'all 0.3s'});
    });
    
});