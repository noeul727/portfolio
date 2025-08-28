$(document).ready(function(){
  var page = $('.fullpage').fullpage({
    
    navigation : true,
    navigationTooltips: ['home','contents', 'introduction', 'personal project', 'team project','BX Design'],
    showActiveTooltip: false, // false로 설정 (우리가 직접 만들 거라서)
    navigationPosition: 'left',

    //1024이하 동작 x
    responsiveWidth: 1024,

    //마지막 영역 #fp-nav 숨기기
    onLeave : function(index, nextIndex, direction){
      if(nextIndex == 6){
        $("#fp-nav").fadeOut();
      }else{
        $("#fp-nav").fadeIn();
      }
    },

    // fullPage 초기화 후 실행
    afterRender: function(){
      // 각 네비게이션에 텍스트 직접 추가
      const tooltips = ['home','contents', 'introduction', 'personal project', 'team project','BX Design'];
      
      $('#fp-nav ul li').each(function(index){
        $(this).append('<span class="custom-tooltip">' + tooltips[index] + '</span>');
      });

      // 초기 상태: left 영역 내용만 숨김 (공간은 유지)
      $('.self-introduction .inner .left').css('opacity', '0');
      
      // 스킬 버튼 클릭 이벤트
      $('.self-introduction .right-txt .skill').click(function(e) {
        e.preventDefault();
        showSkillPanel();
      });

    }

    
  });

  // 스킬 패널 토글 함수
  function showSkillPanel() {
    const leftPanel = $('.self-introduction .inner .left');
    
    // 이미 보이는 상태라면 숨기기
    if (leftPanel.css('opacity') == '1') {
      leftPanel.animate({
        'transform': 'translateX(-100%)'
      }, 500, function() {
        leftPanel.css('opacity', '0');
      });
    } else {
      // 숨겨진 상태라면 보이기
      leftPanel.css({
        'transform': 'translateX(-100%)',
        'opacity': '1'
      }).animate({
        'transform': 'translateX(0%)'
      }, 500);
    }
  }
  
});