$(function () {
  console.log("%c👀发现你了，观你骨骼惊奇，肯定是个IT狗😎。"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:3em")
})

$(function () {
  var title = document.title
  var titleTimer = null
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '😠 死鬼，快回来~ ' + title;
        clearTimeout(titleTimer);
    }
    else {
        document.title = '😜 嘻嘻，想你啦~ ' + title
        titleTimer = setTimeout(function() {
            document.title = title
        }, 1e3)
    }
  })
})

$(function(){
  var header = $('#header')
  var navMenu = $('#nav-menu')
  var layout = $('#layout')
  var container = $('.body_container')
  var music = $('.widget-music')
  var contentContainer = $('.content_container')
  var sidebar = $('#sidebar')
  var timer = null
  var contentContainerHeight = contentContainer.eq(0).outerHeight(true)
  var sidebarHeight = sidebar.outerHeight(true)
  var musicHeight = music.eq(0).outerHeight(true)
  var navOffsetTop = navMenu.offset ? navMenu.offset().top : 0
  var headerHeight = header.outerHeight(true)
  var headerWidth = header.outerWidth()
  var navHeight = navMenu.outerHeight(true)
  var marginTop = container.css('margin-top')
  var marginBottom = container.css('margin-bottom')
  var marginLeft = container.css('margin-left')
  var marginRight = container.css('margin-right')
  var paddingLeft = container.css('padding-left')
  var paddingRight = container.css('padding-right')
  var musicOffsetTop = music.offset() ? music.offset().top : 0
  var headerStyle = {'position':'fixed','top':0,'left': paddingLeft,'right':paddingRight,'z-index':9999,'height':navHeight + 'px','width': headerWidth,'margin':marginTop + ' ' + marginRight + ' ' + marginBottom + ' ' + marginLeft,'padding': 0, 'background-color':'#fff'}
  
  $('.pure-u-md-1-4').after($('#layout > .google-auto-placed'))
  if (contentContainerHeight < sidebarHeight) contentContainer.css('min-height', sidebarHeight + musicHeight +'px')
  
  fixedNav()
  fixedMusic()
  function fixedNav () {
    if (navOffsetTop - $(window).scrollTop() <= 0) {
      navMenu.siblings().hide()
      header.css(headerStyle)
      if (layout.prev().hasClass('google-auto-placed')) {
        header.next().css('padding-top', headerHeight)
        layout.css('padding-top', 0)
      }
      else layout.css('padding-top', headerHeight)
    } else {
      headerHeight = header.outerHeight(true)
      navOffsetTop = navMenu.offset ? navMenu.offset().top : 0
      navMenu.siblings().show()
      header.removeAttr('style')
      if (layout.prev().hasClass('google-auto-placed')) header.next().css('padding-top', 0)
      else layout.css('padding-top', 0)
    }
  }
  function fixedMusic () {
    if (musicOffsetTop - $(window).scrollTop() < navHeight + 10) {
      var adHeight = 0
      music.css({'position':'fixed', 'top': (navHeight + 10) + 'px', 'z-index': 9999})
      if ($('#sidebar .google-auto-placed')[0]) {
        $('#sidebar div').each(function () {
          if ($(this).find('google-auto-placed')) adHeight += parseInt($(this).outerHeight(true))
          if ($(this).hasClass('widget-music')) {
            $(this).next('.google-auto-placed').css('padding-top', parseInt($(this).outerHeight(true)) + 'px' )
            return false
          }
        })
      }
      if (contentContainerHeight < sidebarHeight) contentContainer.css('min-height', sidebarHeight + adHeight + musicHeight +'px')
    } else {
      contentContainer.removeAttr('style')
      music.removeAttr('style')
      music.next('.google-auto-placed').css('padding-top', 'unset')
    }
  }
  $(window).scroll(function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fixedNav()
      fixedMusic()
    });
  })
})

$(function () {
  function grayFilter () {
    $('html').addClass('grayscale1')
  }

  $.ajax({
    url: 'https://quan.suning.com/getSysTime.do',
    type: 'get',
    dataType: 'json',
    success: function(data){
      var nowDate = (data.sysTime2 || '').split(' ')[0]
      if (nowDate === '2020-04-04') grayFilter ()
    },
    error: function(){
      console.log('获取服务器时间失败')
    }
  })
})

$(function () {
  if(window.location.hash){
    var checkExist = setTimeout(function() {
      if ($(window.location.hash).length) {
        $('html, body').animate({scrollTop: $(window.location.hash).offset().top-50}, 1000);
        clearInterval(checkExist);
      }
    }, 100);
  }
})