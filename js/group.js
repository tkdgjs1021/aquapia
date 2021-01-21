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
    
    $(".line li").click(function(e){
        e.preventDefault();
        
        $(".line li").removeClass('on');
        $(this).addClass('on');
        
        var con_id = $(this).attr('data-tab');
            $("#section2 .box").removeClass('on');
            $("#"+con_id).addClass('on');
    });
    
    
});