// JavaScript Document

//スムーススクロール
$(function() {
var topBtn = $('#bottom');
  topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function (){
if ($(this).scrollTop() > 100) {
   topBtn.fadeIn();
 }else{
  topBtn.fadeOut();
};
 });
topBtn.on('click', function (){
    $('html,body').animate({ scrollTop: 0 }, 'swing');
      return false;
    });
});



//ハンバーガーメニュー
//$(function(){
//  
//$('#hum').on('click',function(){
//if($(window).innerWidth() <= 1019){
//  $('#bar').not(':animated').toggleClass('click');
//  $('#sp-nav ul').not(':animated').slideToggle(200);
//  };
//});
//$(window).resize(function(){
//  $('#sp-nav ul').hide();//スマホの時
//if($(window).innerWidth() > 1019){ 
// $('#sp-nav ul').show();//タブレット以上の時
// $('#hum').removeClass('click');//PCから戻る時に邪魔な.clickを削除するため
// };
//});
//});


$(function(){
var windowWidth = $(window).width();
$(window).on('load resize',function(){
var ww = $(window).width();
if(windowWidth != ww) {
if($(window).innerWidth() <= 1019){
	$('#sp-nav ul').hide();
}else{
	$('#sp-nav ul').show();
	$('#bar').removeClass('click');//PCの時に邪魔な.clickを削除する
};
 windowWidth = ww;
        }
});
   $('#hum').on('click',function(){
   $('#bar').toggleClass('click');
   $('#sp-nav ul:not(:animated)').slideToggle(100);
  });
});







//温泉ページのアコーディオンメニュー
$(function(){
var flg = "close";
$(window).on('load',function(){

  if($(window).innerWidth() <= 640){
$('ul.outer').css('display','none');
$('#onsenAll h2').on('touchend',function(){
      if($(this).siblings('ul').css('display')=='none'){
      $('ul.outer').slideUp(200);
      $(this).siblings('ul.outer').slideDown(200);
      }else{
       $(this).siblings('ul.outer').slideUp(200);
      }
      
  });
 }else {
 $('ul.outer').css('display','block');
 };


$('li.more').on('touchend',function(){

var flg = "close";
  if($(window).innerWidth() <= 640){
      $(this).siblings('li:nth-child(n+4)').slideToggle(0);
  
  if(flg == "close"){
            $(this).text('4位から10位を隠す');
            flg = "open";
        }else{
            $(this).text('4位から10位を表示する');
            flg = "close"
            };
      };

//$('li.show').on('touchend',function(){
//var flg = "close";
//
//  if($(window).innerWidth() <= 640){
//      $(this).siblings('li').slideToggle(0);
//  };
//  
//  if(flg == "close"){
//           $(this).text('閉じる');
//           flg = "open";
//        }else{
//           $(this).text('もっと見る');
//           flg = "close"
//          };
//
//});
});
});
});




//高校生ページのアコーディオン
$(function(){
$('p.more').on('click',function(){
 if($(window).innerWidth() <= 640){
     $(this).prev('ul').children('li:nth-child(n+4)').slideToggle(0);
     $(this).toggleClass('opened');
     
     if($(this).hasClass('opened')){
       $(this).text('閉じる')
     }else{
       $(this).text('もっと見る');
     }
 };
});
});