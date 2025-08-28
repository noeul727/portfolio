$(document).ready(function(){
  var page = $('.fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['home','contents', 'introduction', 'personal project', 'team project','BX Design'],
    showActiveTooltip: false,
    navigationPosition: 'left',
    responsiveWidth: 1024,
    onLeave: function(index, nextIndex, direction){
      if(nextIndex == 6){
        $("#fp-nav").fadeOut();
      } else {
        $("#fp-nav").fadeIn();
      }
    },
    afterRender: function(){
      const tooltips = ['home','contents', 'introduction', 'personal project', 'team project','BX Design'];
      $('#fp-nav ul li').each(function(index){
        $(this).append('<span class="custom-tooltip">' + tooltips[index] + '</span>');
      });

      // Self-introduction 버튼 기능 설정
      setupIntroductionButtons();
    }
  });

  function setupIntroductionButtons() {
    var $skillPanel = $('.self-introduction .left');   // 스킬 영역
    var $aboutPanel = $('.self-introduction .left02'); // about me 영역

    // 초기 상태: about me 보임, skill 숨김
    $aboutPanel.css({opacity: 1});
    $skillPanel.css({opacity: 0});

    // 클릭 시 자연스러운 페이드 전환
    function fadeTo($showPanel, $hidePanel) {
      $hidePanel.stop().animate({opacity: 0}, 500);
      $showPanel.stop().animate({opacity: 1}, 500);
    }

    // About me 버튼 클릭
    $('.self-introduction .right-txt .aboutme').click(function(e) {
      e.preventDefault();
      fadeTo($aboutPanel, $skillPanel);
    });

    // Skill 버튼 클릭
    $('.self-introduction .right-txt .skill').click(function(e) {
      e.preventDefault();
      fadeTo($skillPanel, $aboutPanel);
    });

    // Project 버튼 클릭
    $('.self-introduction .right-txt .project').click(function(e) {
      e.preventDefault();
      $.fn.fullpage.moveTo(4);
    });
  }
});