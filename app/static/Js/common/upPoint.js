$(function(){
    $totop = $('.totop');
    $(window).scroll(function(){
        var iNum = $(window).scrollTop();
        console.log(iNum);
        if(iNum>200){
            $totop.fadeIn();
        }
        else
        {
            $totop.fadeOut();
        }
    })
    $totop.click(function(){
        $('html,body').animate({'scrollTop':0});
    })
})

