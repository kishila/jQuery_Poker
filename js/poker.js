//--- �y�[�W�ǂݍ��ݎ��Ɏ��s����������
$(document).ready( function(){
  $("#change").hide();
  $("#restart").hide();
});

//--- �J�n�{�^���������ꂽ�Ƃ��̏���
$("#start").click(function() {
  card_init();            // �J�[�h�̏�����
  available_overlay();    // �I�[�o�[���C�J�n
  button_visualization(); // �{�^���̉���

  //--�J�[�h�̏�����
  function card_init() {
    var num = ["","","","",""];
    var newly_flag;

    // �J�[�h�̐���������
    for(i = 0; i < 5;i++) {
      do {
        num[i] = num_rand()
        newly_flag = new_num_check(num, i);
      } while(!newly_flag);
    }
    // �J�[�h�̏�����
    for(i = 0;i < 5;i++){
      $("#card" + i).attr("src","./CardImage/" + num[i] + ".gif");
    }
  }

  //-- 0�`51�̗����𐶐�
  function num_rand() {
    var val = Math.round( Math.random()*51 );
    if (val  < 10) {
      str = "0" + val.toString();
    } else {
      str = val.toString();
    }
    return str;
  }

  //-- ����Ă��Ȃ����������f
  function new_num_check(num, i) {
    for(j=i-1;j>=0;j--){
      if(num[i] == num[j]) {
        return false;
      }
    }
    return true;
  }

  //-- �I�[�o�[���C��
  function available_overlay() {
    $('.overlay').colorOverlay({
        bgColor : '#000000',
        opacity : 0.3
    });
  }

  //-- �{�^���\������
  function button_visualization() {
    $("#start").hide();
    $("#change").show()
  }
});

//--- �u�����v�{�^���������ꂽ�Ƃ�
$('#change').click(function() {
  $("#change").hide();
  $("#restart").show()
});

//--- �u�Đ�v�{�^���������ꂽ�Ƃ�
$('#restart').click(function() {
  $("#restart").hide();
  $("#start").show();
});
