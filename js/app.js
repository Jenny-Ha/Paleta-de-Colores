$(document).ready(function(){
    var btn = $(".btn");
    var bg_area = $(".bg-area");
    btn.click(function() {
        bg_color = $(this).css("background-color");
        //bg_area.style.backgroundColor = bg_color;
        bg_area.css("backgroundColor", bg_color);
    });    
 });