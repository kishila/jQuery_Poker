//--- ページ読み込み時に実行したい処理
$(document).ready( function(){
  //$('#buttton2').addClass("operational");
  $("img").addClass("overimg");
  $(".operational").click(function() {
    alert("Click");
  });

  $('.overimg').on({
      'mouseenter':function(){ // マウスが重なったときの処理
          $(this).fadeTo(500,0.5);
      },
      'mouseleave':function(){ // マウスが外れた時の処理
      $(this).fadeTo(500,1);
      },
      'click':function() {
        var position = $(this).position();
        if($(this).hasClass('selected')) {  // 外すとき
          $(this).removeClass("selected");
          $(this).animate({"top": "+=50px"},  150);
        } else {                           // 選ぶとき
          $(this).addClass("selected");
          $(this).animate({"top": "-=50px"},  150);
        }
      }
  });
});

//--- ボタン1をクリックしたときの処理
$("#buttton1").click(function() {
  //- 色変更
  $(".mozi").css("color","#9932cc");  // クラスによる指定
  //$("h1").css("color","#9932cc");    // タグによる指定
  //$('#mozi1').css("color","#9932cc");    // idによる指定
  //console.log(/*出力したい変数やメッセージ*/);
});

//--- ボタン2をクリックしたときの処理
$("#buttton2").click(function() {
  //$('#card1').animate({'margin-top':'-=50px'});
  $('#card1').animate({'top':'+=50px'});
  //$('#mozi').animate({'marginLeft': '+=500px'});
});
