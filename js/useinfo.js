$(function(){

        $(".more").mouseenter(function(){
                $(this).css({'background':'#1f74ec', 'transition':'all 0.3s'});
                $(".more a").css({'color':'white', 'transition':'all 0.3s'});
            }).mouseleave(function(){
                $(this).css({'background':'none', 'transition':'all 0.3s'});
                $(".more a").css({'color':'black', 'transition':'all 0.3s'});
            });
            
            $(".box3 a").eq(0).mouseenter(function(){
                $(".box3_1 img").fadeOut(100); 
                $(".box3_1 h4").fadeOut(100);
                $(".box3_1 h2").fadeIn(3100);
            }).mouseleave(function(){
                $(".box3_1 img").fadeIn(100); 
                $(".box3_1 h4").fadeIn(100);
                $(".box3_1 h2").fadeOut(100);
            });
            $(".box3 a").eq(1).mouseenter(function(){
                $(".box3_2 img").fadeOut(100); 
                $(".box3_2 h4").fadeOut(100);
                $(".box3_2 h2").fadeIn(3100);
            }).mouseleave(function(){
                $(".box3_2 img").fadeIn(100); 
                $(".box3_2 h4").fadeIn(100);
                $(".box3_2 h2").fadeOut(100);
            });
            $(".box3 a").eq(2).mouseenter(function(){
                $(".box3_3 img").fadeOut(100); 
                $(".box3_3 h4").fadeOut(100);
                $(".box3_3 h2").fadeIn(3100);
            }).mouseleave(function(){
                $(".box3_3 img").fadeIn(100); 
                $(".box3_3 h4").fadeIn(100);
                $(".box3_3 h2").fadeOut(100);
            });
    
});