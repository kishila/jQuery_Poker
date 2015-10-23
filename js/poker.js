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
  card_operational();     // カードを操作対象に
  add_hover_fanc();       // 操作対象にオンマウス機能を追加
  add_click_fanc();       // 操作対象にクリック時の機能を追加

  //--カードの初期化
  function card_init() {
    var newly_flag;

    // カードの数字を決定
    for(i = 0; i < 5;i++) {
      do {
        num[i] = num_rand();
        newly_flag = new_num_check(i);
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
  function new_num_check(i) {
    for(j=i-1;j>=0;j--){
      if(num[i] == num[j]) {
        return false;
      }
    }
    return true;
  }

  //-- カードを操作対象に
  function card_operational() {
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
          $(this).fadeTo(0,0.8);
          $(this).css("cursor","pointer"); //---カーソルを指に
      },
      'mouseleave':function(){ // マウスが外れた時の処理
      $(this).fadeTo(0,1);
      $(this).css("cursor","default"); //---カーソルを戻す
      }
    });
  }

  //-- 操作対象にクリック時の機能を追加
  function add_click_fanc() {
    $('.operational').on({
      'click':function() {
        var position = $(this).position();
        if($(this).hasClass('selected')){  // 外すとき
          $(this).removeClass("selected");
          $(this).animate({'top':'+=50px'}, "fast");
        } else {                           // 選ぶとき
          $(this).addClass("selected");
          $(this).animate({'top':'-=50px'}, "fast");
        }
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
  remove_hover_fanc();       // 操作対象のオンマウス機能を削除
  card_unoperational();      // カードを操作対象外に
  card_reposit();            // カードを初期位置に戻す
  card_change();             // 選択されたカードをチェンジ
  card_judge();              // 役の判断


  //-- 操作対象からオンマウス機能を削除
  function remove_hover_fanc() {
    $('.operational').off("mouseenter");
    $('.operational').off("mouseleave");
    $('.operational').off("click");
  }

  //-- カードを操作対象外に
  function card_unoperational() {
    for(i = 0;i < 5;i++){
      $("#card" + i).removeClass("operational");
    }
  }

  //-- カードを初期位置に戻す
  function card_reposit() {
    for(i = 0;i < 5;i++){
      $("#card" + i).animate({'top':'0px'}, 0);
    }
  }

  //-- 選択されたカードをチェンジ
  function card_change() {
    var usedCard = new Array();
    var newly_flag;
    var tmp;

    //- 表示されている5枚のカードを記憶
    for(i = 0; i < num.length; i++) {
      usedCard[i] = num[i];
    }
    //- 選択されているカードの交換
    for(k = 0;k < 5;k++){
      if($("#card" + k).hasClass('selected')) {
        do {
          tmp = num_rand();
          newly_flag = new_num_check(tmp, usedCard);
        } while(!newly_flag)
        num[k] = tmp;
        $("#card" + k).attr("src","./CardImage/" + num[k] + ".gif");
        usedCard.push(num[k]);
        $("#card" + k).removeClass("selected");
      }
    }
  }

  //-- 0～51の乱数を生成
  function num_rand() {
    var val = Math.round( Math.random()*51);
    if (val  < 10) {
      str = "0" + val.toString();
    } else {
      str = val.toString();
    }
    return str;
  }

  //-- 被っていない数字か判断
  function new_num_check(tmp, usedCard) {
    for(i = 0; i < usedCard.length; i++){
      if( tmp == usedCard[i]) {
        return false;
      }
    }
    return true;
  }

  //-- 役の判断
  function card_judge() {
    
  }
});

//////////////////////////////////////////
//--- 「再戦」ボタンが押されたとき
//////////////////////////////////////////
$('#restart').click(function() {
  $("#restart").hide();
  $("#start").show();
  card_back();

  //-- カードを裏返しにし、番号を初期化
  function card_back() {
    for(i = 0;i < 5;i++){
      $("#card" + i).attr("src","./CardImage/card.gif");
    }
  }
});
