/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
    require(['jquery','carousel'],function($,Carousel){
        $(document).on('selectstart',function(){ return false; });
        var oContainer=document.getElementById('container1');
        var witha=oContainer.offsetWidth-115;
        console.log(witha);
        var setting1={
            selecter:'#container1',
            width:witha,
            height:280,
            arrowPos:'center',
            imgArr:['f/3.jpg','f/2.jpg','f/1.jpg','f/4.jpg','f/5.jpg','f/6.jpg'],
            listStyle:'circle',
            speed:2000
        };
        var carousel1=new Carousel(setting1);
        carousel1.init();
    });