/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function($){
    function Carousel(setting){
        this.$container=$('<div class="carousel-container"></div>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$nav=$('<ul class="carousel-nav"></ul>');
        this.$arrows=$('<div class="carousel-arrows"></div>');
        this.$next=$('<div class="carousel-next">&gt;</div>');
        this.$prev=$('<div class="carousel-prev">&lt;</div>');
        this.defaultsetting={
            selecter:document.body,
            width:520,
            height:280,
            arrowPos:'bottom',
            imgArr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
            listStyle:'squary', //circle
            speed:500
        };
        $.extend(this.defaultsetting,setting);
    }
    Carousel.prototype.init=function(){
        this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);
        for(var i=0;i<this.defaultsetting.imgArr.length;i++){
            var $img=$('<img />').attr('src',this.defaultsetting.imgArr[i]);
            this.$imgs.append($img);
        }
        for(var i=0;i<this.defaultsetting.imgArr.length;i++){
            var $li=$('<li></li>').html(i+1);
            this.$nav.append($li);
        }
        $(this.defaultsetting.selecter).append(this.$container);
        if(this.defaultsetting.listStyle=='circle'){
            $('li',this.$nav).html('').css({
                borderRadius:'50%'
            });
            this.$nav.css({
                right:this.defaultsetting.width/2-$('li',this.$nav).outerWidth()
            })
        }
        this.$next.addClass(this.defaultsetting.arrowPos);
        this.$prev.addClass(this.defaultsetting.arrowPos);

        /* console.log(this.defaultsetting.selecter);
         console.log(this.$container);*/
        //$('li','.caiousel-nav').eq(0).addClass('selected');
        $('li',this.$nav).eq(0).addClass('selected');
        $('img',this.$imgs).eq(0).addClass('selected');
        //this.$nav
        var nowIndex=0;//????????????
        $('li',this.$nav).on('mouseover',function(e){
            nowIndex= $(e.target).index();
            //console.log(e.target.innerHTML);
            //????????this????????????bind???this????????????????
            changeImg.call(this);
        }.bind(this));
        $(this.$next).on('click',function(){
            nowIndex++;
            if(nowIndex == this.defaultsetting.imgArr.length){
                nowIndex=0;
            }
            changeImg.call(this);
        }.bind(this));
        $(this.$prev).on('click',function(){
            console.log("haha");
            if(nowIndex == -1){
                nowIndex=this.defaultsetting.imgArr.length-1;
            }
            nowIndex--;
            changeImg.call(this);
        }.bind(this));
//console.log(this.defaultsetting.speed)
        var timer;
        $(this.$container).hover(function(){
            clearInterval(timer);
        },function(){
            play.call(this);
        }.bind(this));
        play.call(this);


//??з???
        function changeImg(){
            $('li',this.$nav).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
            $('img',this.$imgs).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
        }
        function play(){
            timer= setInterval(function(){
                //console.log(this);   /*Windows ????*/
                this.$next.trigger('click');
            }.bind(this),this.defaultsetting.speed);
        }
    };
    return Carousel;
});