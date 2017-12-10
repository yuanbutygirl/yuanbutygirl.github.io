/**
 * Created by Administrator on 2017/9/24.
 */
$(document).ready(function() {
    $(".nav>ul>li").click(function() {
        $("html, body").animate({
            scrollTop: $('#'+this.innerHTML).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
    });
    $(".min-nav-main>ul>li").click(function() {
        /* console.log(this.innerHTML);
         console.log($('#'+this.innerHTML));*/
        $("html, body").animate({
            scrollTop: $('#'+this.innerHTML).offset().top + "px"
        }, {
            duration: 800,
            easing: "swing"
        });
        $(".min-nav-main").css('display','none');
    });
    $(".smallbox").on("click",function(){
        $("html, body").animate({
            scrollTop: $('#HOME').offset().top + "px"
        }, {
            duration: 800,
            easing: "swing"
        });
    });
    $(window).scroll(function(){
        if($(document).scrollTop()>=120){
            $(".smallbox").css({
                display:'block'
            })
        }else{
            $(".smallbox").css({
                display:'none'
            })
        }
    })
});