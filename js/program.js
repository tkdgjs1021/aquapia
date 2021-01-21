$(function(){
   
    $(window).scroll(function(){
       if($('html, body').scrollTop() >= $('.p1').offset().top){
           $("#header").css({'background':'white', 'border-bottom':'2px solid #e7e7e7'});
           $("#header .subbg").css({'border-top':'none'});
           $("#gnb>li>a").css({'color':'black'});
           $("#head>h2>a>img").attr('src', '../images/logob.png');
           
           $("#gnb").mouseleave(function(){
               $("#header").css({'background-color':'white'});
                $("#gnb>li>a").css({'color':'black'});
               $("#head>h2>a>img").attr('src', '../images/logob.png');
           });
           
       } else {
           $("#header").css({'background':'none', 'border-bottom':'none'});
           $("#gnb>li>a").css({'color':'white'});
           $("#head>h2>a>img").attr('src', '../images/logo.png');

           $("#gnb").mouseleave(function(){
               $("#header").css({'background':'none'});
                $("#gnb>li>a").css({'color':'white'});
               $("#head>h2>a>img").attr('src', '../images/logo.png');
           });
           
       }
    });
    
    $(".line1 a").eq(0).mouseenter(function(){
        $(".box1 p").fadeIn(300);
    }).mouseleave(function(){
        $(".box1 p").fadeOut(300);
    });
    $(".line1 a").eq(1).mouseenter(function(){
        $(".box2 p").fadeIn(300);
    }).mouseleave(function(){
        $(".box2 p").fadeOut(300);
    });
    
    $(".line2 a").eq(0).mouseenter(function(){
        $(".box3 p").fadeIn(300);
    }).mouseleave(function(){
        $(".box3 p").fadeOut(300);
    });
    $(".line2 a").eq(1).mouseenter(function(){
        $(".box4 p").fadeIn(300);
    }).mouseleave(function(){
        $(".box4 p").fadeOut(300);
    });
    
    $(".line1 a").eq(0).click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 2100}, 500, 'swing');
    });
    $(".line1 a").eq(1).click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 2800}, 500, 'swing');
    });
    $(".line2 a").eq(0).click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 3500}, 500, 'swing');
    });
    $(".line2 a").eq(1).click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 4200}, 500, 'swing');
    });
    
    $(window).scroll(function(){
        if($('html, body').scrollTop() >= 1900 && $('html, body').scrollTop() <= 2500){
            $(".con1 .article1").css({'left':'0', 'transition':'all 0.3s'});
            $(".con1 .article2").css({'right':'0', 'transition':'all 0.3s'});
            $(".con2 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article2").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article2").css({'left':'300px', 'transition':'all 0.3s'});
        } else if($('html, body').scrollTop() >= 2600 && $('html, body').scrollTop() <= 3200){
            $(".con1 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con1 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article1").css({'right':'0', 'transition':'all 0.3s'});
            $(".con2 .article2").css({'left':'0', 'transition':'all 0.3s'});
            $(".con3 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article2").css({'left':'300px', 'transition':'all 0.3s'});
        } else if($('html, body').scrollTop() >= 3300 && $('html, body').scrollTop() <= 3900){
            $(".con1 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con1 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article2").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article1").css({'left':'0', 'transition':'all 0.3s'});
            $(".con3 .article2").css({'right':'0', 'transition':'all 0.3s'});
            $(".con4 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article2").css({'left':'300px', 'transition':'all 0.3s'});
        }else if($('html, body').scrollTop() >= 4000 && $('html, body').scrollTop() <= 4600){
            $(".con1 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con1 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article1").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con2 .article2").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con3 .article2").css({'right':'300px', 'transition':'all 0.3s'});
            $(".con4 .article1").css({'right':'0', 'transition':'all 0.3s'});
            $(".con4 .article2").css({'left':'0', 'transition':'all 0.3s'});
        } else if($('html, body').scrollTop() < 1900){
            $(".con1 .article1").css({'left':'300px', 'transition':'all 0.3s'});
            $(".con1 .article2").css({'right':'300px', 'transition':'all 0.3s'});
        }
    });
    
});