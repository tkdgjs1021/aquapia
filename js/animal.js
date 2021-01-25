$(function(){
        
    $(".card").on('click',function(){
        $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
        $(this).addClass("cardRotate").removeClass("backRotate");
    });
    
});