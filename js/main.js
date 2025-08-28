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
    }
    
  });
  
});