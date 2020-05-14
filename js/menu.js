
  // main.js
  $(function(){
    var visual_count = 1;
    if(visual_count > 3){visual_count = 1;}
    setInterval(function(){
      visual_change(num)
      visual_count++;
    },5000);
    $('.menu-box5').hide();
    // 비주얼 버튼 클릭
    $('#nav-menu a').click(function(){
      // 클래스 제거(상태 초기화)
      $('#nav-menu a').removeClass('selected');
  
      // 클래스 추가
      $(this).addClass('selected');
  
      // a태그 하이퍼링크 기본 이벤트 해제
      return false;
  

      //숨기기
      $('.menu-box4').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box').hide();
      $('.menu-box3').hide();


    });
  
    //피자 메뉴 클릭시 새로운 메뉴 표시

    //신 메뉴
    $('#new-m').click(function(){
      $('.menu-box4').show();
      $('#menu1').height('800px');
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box').slideDown();
      $('.menu-box3').slideDown();
    })

    //플러스박스 메뉴
    $('#plus-m').click(function(){
      $('#menu1').height('800px');
      $('.menu-box4').hide();
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box-1').slideDown();
      $('.menu-box1-3').slideDown();
    })

    //투탑박스 메뉴
    $('#two-m').click(function(){
      $('#menu1').height('1200px');
      $('.menu-box4').hide();
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box-1-1').slideDown();
      $('.menu-box1-3-1').slideDown();
    })

    //시카고피자 메뉴
    $('#chicago-m').click(function(){
      $('#menu1').height('800px');
      $('.menu-box4').hide();
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box-1-2').slideDown();
    })

    //클래식피자 메뉴
    $('#classic-m').click(function(){
      $('#menu1').height('1800px');
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box4').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box1-2').slideDown();
      $('.menu-box1-3-2').slideDown();
    })

    //프리미엄피자 메뉴
    $('#premium-m').click(function(){
      $('#menu1').height('1800px');
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box4').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box1-2-1').slideDown();
      $('.menu-box1-3-3').slideDown();
    })

    //몬스터피자 메뉴
    $('#monster-m').click(function(){
      $('#menu1').height('1200px');
      $('.menu-box5').hide();
      $('.menu-box').hide();
      $('.menu-box4').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-3').hide();
      $('.menu-box1-3-5').hide();
      $('.menu-box1-2-2').slideDown();
      $('.menu-box1-3-4').slideDown();
    })

    //사이드 메뉴
    $('#side-m').click(function(){
      $('#menu1').height('2200px');
      $('.menu-box4').hide();
      $('.menu-box5').show();
      $('.menu-box').hide();
      $('.menu-box3').hide();
      $('.menu-box-1').hide();
      $('.menu-box1-3').hide();
      $('.menu-box-1-1').hide();
      $('.menu-box1-3-1').hide();
      $('.menu-box-1-2').hide();
      $('.menu-box1-2').hide();
      $('.menu-box1-3-2').hide();
      $('.menu-box1-2-1').hide();
      $('.menu-box1-3-3').hide();
      $('.menu-box1-2-2').hide();
      $('.menu-box1-3-4').hide();
      $('.menu-box1-2-3').slideDown();
      $('.menu-box1-3-5').slideDown();
    })
  });


    //Store 이미지 호버시
    $(function(){
      $('.box2').mouseover(function(){
          $('.box2 > p').stop().fadeOut(200);
      })
      $('.box2').mouseout(function(){
          $('.box2 > p').stop().fadeIn(100);
      })
  })

  //시크릿 테이스트 호버시
  $(function(){
      $('.box4').mouseover(function(){
          $('.box4 > p').stop().fadeOut(200);
      })
      $('.box4').mouseout(function(){
          $('.box4 > p').stop().fadeIn(100);
      })
  })

  //노티스 글제목 호버시
  $(function(){
      $('.box6 > .con1 > .info li').mouseover(function(){
          $(this).children('a').css('text-decoration','underline');
      })

      $('.box6 > .con1 > .info li').mouseout(function(){
          $(this).children('a').css('text-decoration','none');
      })
  })

  //하단 광고 슬라이드
  $(function(){
    $('.arrow-right').click(function(){
      $('.first-con').hide();
      $('.second-con').show();
    })

    $('.arrow-left').click(function(){
      $('.first-con').show();
      $('.second-con').hide();
    })
  })