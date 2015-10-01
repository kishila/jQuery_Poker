//--- ページ読み込み時に実行したい処理
$(document).ready( function(){
  $('#buttton2').addClass("operational");
  $("img").addClass("operational");
  $(".operational").click(function() {
    alert("Click");
    //$(this).fadeTo(500,0.5);
    //$(this).fadeTo(500,1);
  });
});

$("#buttton1").click(function() {
  $(".mozi").css("color","#9932cc");  // クラスによる指定
  //$("h1").css("color","#9932cc");    // タグによる指定
  //$('#mozi1').css("color","#9932cc");    // idによる指定
});
