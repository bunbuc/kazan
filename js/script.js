// JavaScript Document

$(function() {
  
$('#hum').on('click',function(){
if($(window).innerWidth() <= 1019){
  $('#bar').not(':animated').toggleClass('click');
  $('#sp-nav ul').not(':animated').slideToggle(200);
  };
});
$(window).resize(function(){
  $('#sp-nav ul').hide();//スマホの時
if($(window).innerWidth() > 1019){ 
 $('#sp-nav ul').show();//タブレット以上の時
 $('#hum').removeClass('click');//PCから戻る時に邪魔な.clickを削除するため
 } 
});


//温泉ページのアコーディオンメニュー
$(window).resize(function(){
  if($(window).innerWidth() <= 640){
$('ul.outer').css('display','none');
$('#onsenAll h2').on('click',function(){
      $(this).siblings('ul').not(':animated').slideToggle(100);
  });
 }else {
 $('ul.outer').css('display','block');
 };

});


$('li.more').on('click',function(){
  if($(window).innerWidth() <= 640){
      $(this).siblings('li:nth-child(n+4)').slideToggle(0);
  };
  
  if(flg == "close"){
            $(this).text('4位から10位を隠す');
            flg = "open";
        }else{
            $(this).text('4位から10位を表示する');
            flg = "close"
            };
  });
var flg = "close";
  

});