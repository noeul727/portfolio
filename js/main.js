$(document).ready(function(){
  var page = $('.fullpage').fullpage({
    
    navigation: true,
    navigationTooltips: ['home','contents', 'introduction', 'personal project', 'team project','BX Design'],
    showActiveTooltip: false, // false로 설정 (우리가 직접 만들 거라서)
    navigationPosition: 'left',

    //1024이하 동작 x
    responsiveWidth: 1024,

    //마지막 영역 #fp-nav 숨기기
    onLeave: function(index, nextIndex, direction){
      if(nextIndex == 6){
        $("#fp-nav").fadeOut();
      } else {
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

      // Self-introduction 섹션 버튼 기능 설정
      setupIntroductionButtons();
    }
  });

  // Self-introduction 섹션 버튼 기능 설정
  function setupIntroductionButtons() {
    // 초기 상태: about-panel을 기본으로 표시
    $('.self-introduction .about-panel').addClass('active');
    
    // About me 버튼 클릭
    $('.self-introduction .right-txt .aboutme').click(function(e) {
      e.preventDefault();
      showPanel('about-panel');
    });

    // Skill 버튼 클릭
    $('.self-introduction .right-txt .skill').click(function(e) {
      e.preventDefault();
      showPanel('skill-panel');
    });

    // Project 버튼 클릭 (다음 섹션으로 이동)
    $('.self-introduction .right-txt .project').click(function(e) {
      e.preventDefault();
      $.fn.fullpage.moveTo(4); // personal-project 섹션으로 이동
    });
  }

  // 패널 표시 함수
  function showPanel(panelClass) {
    // 모든 패널 숨기기
    $('.self-introduction .panel').removeClass('active');
    
    // 선택한 패널만 보이기
    $('.self-introduction .' + panelClass).addClass('active');
  }
});