//----大域変数----------------
var num = ["","","","",""];

//---r ページ読み込み時に実行したい処理
$(document).ready( function(){
  $("#change").hide();
  $("#restart").hide();
});

//////////////////////////////////////////
//--- 開始ボタンが押されたときの処理
//////////////////////////////////////////
$("#start").click(function() {
  card_init();            // カードの初期化
  button_visualization(); // ボタンの可視化
  card_class_change();    // カードを操作対象に
  add_hover_fanc();       // 操作対象にオンマウス機能を追加

  //--カードの初期化
  function card_init() {
    var newly_flag;

    // カードの数字を決定
    for(i = 0; i < 5;i++) {
      do {
        num[i] = num_rand()
        newly_flag = new_num_check(num, i);
      } while(!newly_flag);
    }
    // カードの変更
    for(i = 0;i < 5;i++){
      $("#card" + i).attr("src","./CardImage/" + num[i] + ".gif");
    }
  }

  //-- 0～51の乱数を生成
  function num_rand() {
    var val = Math.round( Math.random()*51 );
    if (val  < 10) {
      str = "0" + val.toString();
    } else {
      str = val.toString();
    }
    return str;
  }

  //-- 被っていない数字か判断
  function new_num_check(num, i) {
    for(j=i-1;j>=0;j--){
      if(num[i] == num[j]) {
        return false;
      }
    }
    return true;
  }

  //-- カードにクラスを追加、操作対象に
  function card_class_change() {
    for(i = 0;i < 5;i++){
      $("#card" + i).addClass("operational");
    }
  }

  //-- ボタン表示処理
  function button_visualization() {
    $("#start").hide();
    $("#change").show();
  }

  //-- 操作対象にオンマウス機能を追加
  function add_hover_fanc() {
    $('.operational').on({
      'mouseenter':function(){ // マウスが重なったときの処理
          $(this).fadeTo(500,0.5);
      },
      'mouseleave':function(){ // マウスが外れた時の処理
      $(this).fadeTo(500,1);
      }
    });
  }
});

//////////////////////////////////////////
//--- 「交換」ボタンが押されたとき
//////////////////////////////////////////
$('#change').click(function() {
  $("#change").hide();
  $("#restart").show();
  remove_hover_fanc();       // 操作対象にオンマウス機能を追加
  card_class_change();

  //-- カードからクラスを削除
  function card_class_change() {
    for(i = 0;i < 5;i++){
      $("#card" + i).removeClass("operational");
    }
  }

  function remove_hover_fanc() {
    $('.operational').off("mouseenter");
    $('.operational').off("mouseleave");
  }
});

//////////////////////////////////////////
//--- 「再戦」ボタンが押されたとき
//////////////////////////////////////////
$('#restart').click(function() {
  $("#restart").hide();
  $("#start").show();
  card_back();

  //-- カードを裏返しに
  function card_back() {
    for(i = 0;i < 5;i++){
      $("#card" + i).attr("src","./CardImage/card.gif");
    }
  }
});
