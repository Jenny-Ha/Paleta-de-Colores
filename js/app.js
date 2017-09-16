$(document).ready(function(){
    var btn = $(".btn");
    var btn_Bg = btn.bgColor;
    var bg_area = $(".bg-area");
    btn. click(function() {
        bg_color = $(this).bgColor;
        bg_area.style.backgroundColor = bg_color;
    });    
 });