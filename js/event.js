$(function(){
   
    $(".dc ul li").click(function(e){ 
        e.preventDefault();
        var con_id = $(this).attr('data-tab');
        
            $(".dc ul li").removeClass('on');
            $(".dc .box").removeClass('on');
 
            $('.badge').removeClass('badgeon');
        
            $(this).addClass('on');
 
            $("#"+con_id).addClass('on');
        });
    
});