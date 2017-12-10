$(function () {
    $(window).scroll(function(){
        if($(document).scrollTop()>=60){
            $("nav").addClass("fixednav");
            $('nav .name').css({
                lineHeight: '50px'
            });
            $('nav .login').css({
                lineHeight: '50px',
                color:"black"
            });
            $('nav .login span').css({
                lineHeight: '50px',
                fontSize:'28px'
            });
            $('nav .nav li').css({
                lineHeight: '50px'
            });
            $('nav .nav li a').css({
                color: '#FFF'
            });
            $('nav .min-nav span').css({
                lineHeight: '50px',
                height:'50px',
                color:'black'
            });
            $('nav .min-nav-main').css({
                    top:'50px'
                }
            );
            $('nav .name span').css({
                display:'none'
                }
            );
        }else{
            $("nav").removeClass("fixednav");
            $('nav .name').css({
                lineHeight: '80px'
            });
            $('nav .login').css({
                lineHeight: '80px',
                color:"white"
            });
            $('nav .login span').css({
                lineHeight: '80px',
                fontSize:'38px'
            });
            $('nav .nav li').css({
                lineHeight: '80px'
            });
            $('nav .nav li a').css({
                color: '#e8eaec'
            });
            $('nav .min-nav span').css({
                lineHeight: '80px',
                height:'80px',
                color:'white'
            });
            $('nav .min-nav-main').css({
                    top:'80px'
                }
            );
            $('nav .name span').css({
                    display:'inline'
                }
            );
        }
    });
    $('.min-nav span').on('click',function(){
        if($('.min-nav-main').css("display")=="none"){
            $('.min-nav-main').stop().slideDown("slow");
        }else{
            $('.min-nav-main').stop().slideUp("slow");
        }
    });
})