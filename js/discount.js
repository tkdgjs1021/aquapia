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
    
    $(".dc ul li").click(function(e){ 
        e.preventDefault();
        var con_id = $(this).attr('data-tab');
        
            $(".dc ul li").removeClass('on');
            $(".dc .box").removeClass('on');
 
            $('.badge').removeClass('badgeon');
        
            $(this).addClass('on');
 
            $("#"+con_id).addClass('on');
        });
    
    $(".article").click(function(e){
        e.preventDefault();
        
        $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
        $(this).addClass("cardRotate").removeClass("backRotate");
    });
    
    $("#con1 .article").eq(0).click(function(e){
       e.preventDefault();
        
        $(".badge1").delay(500).addClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(1).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").delay(500).addClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(2).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").delay(500).addClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(3).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").delay(500).addClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(4).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").delay(500).addClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(5).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").delay(500).addClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(6).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").delay(500).addClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(7).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").delay(500).addClass("badgeon");
        $(".badge9").removeClass("badgeon");
    });
    $("#con1 .article").eq(8).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
        $(".badge4").removeClass("badgeon");
        $(".badge5").removeClass("badgeon");
        $(".badge6").removeClass("badgeon");
        $(".badge7").removeClass("badgeon");
        $(".badge8").removeClass("badgeon");
        $(".badge9").delay(500).addClass("badgeon");
    });
    
    $("#con2 .article").eq(0).click(function(e){
       e.preventDefault();
        
        $(".badge1").delay(500).addClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").removeClass("badgeon");
    });
    $("#con2 .article").eq(1).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").delay(500).addClass("badgeon");
        $(".badge3").removeClass("badgeon");
    });
    $("#con2 .article").eq(2).click(function(e){
       e.preventDefault();
        
        $(".badge1").removeClass("badgeon");
        $(".badge2").removeClass("badgeon");
        $(".badge3").delay(500).addClass("badgeon");
    });
    
});