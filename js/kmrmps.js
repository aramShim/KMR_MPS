/*kmrmps.js*/
$(function(){
//	alertDiv();
//	resizeWidth();
//	scrollFunc();
//	toolTip();
//	SlideToggle();
//	dimedPop();
	if ($('.copy-btn').length > 0) {copyText();}
	if ($('.js-btn-mypage').length > 0) {btnMypage();}
	if ($('.datepicker-period').length > 0) {dateSetting();	}

	//copytext
	function copyText(){
		$('.copy-btn').click(function(){
			var copyText = $(this).prev().text();
			var textArea = document.createElement('textarea');
			document.body.appendChild(textArea);
			textArea.value = copyText;
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			alert('복사가 완료되었습니다. 원하시는 곳에 붙여넣어 사용하세요.')
		})
	}

	//ui_dimed
	function dimedPop(){
		$('body').on('click','.dimedpop', function(){
			var dimedpop = '#'+$(this).data('dimedpop');
			$(dimedpop).addClass('active');
			$(dimedpop).find($('.dimed_bg')).show();
			scrollDisable();
		});
		$('body').on('click','.dimedpop_close', function(){
			var dimedpop = '#'+$(this).data('dimedpop');
			$(dimedpop).removeClass('active');
			$(dimedpop).find($('.dimed_bg')).hide();
			scrollAble();
			
		});
	}	   
	
	function alertDiv(){
		$('body').on('click','.signal', function(e){
			e.preventDefault()
			var target = $(this).attr('href');
			$(target).addClass('show');
		});		
		$('body').mouseup(function(e){
			var layer = $('.signal-content');
			if (layer.has(e.target).length === 0)
			{
				layer.removeClass('show')
			}
		})
	}
	
	function SlideToggle(){
		$('body').on('click','.slideToggle', function(){
			var toggle = '#'+$(this).data('toggle');
			$(this).toggleClass('active')
			$(toggle).slideToggle();
		});		
	}
	//left메뉴
	var depli = $('.nav-menu').children('li').children('a');
	
	depli.click(function(e){		
		if ($(this).siblings('ul').length != 0)
		{
			e.preventDefault();
			e.stopPropagation();
		}		

		depli.removeClass('on');
		
		$(this).addClass('on');
		$('.on').parents('li').toggleClass('mm-active');		
		
		//local에 저장
		var activeElement =  $(this).text();
        localStorage.setItem('active', activeElement);

	});
	
	function scrollDisable(){
		$('html, body').addClass('scroll_hidden');
		$('body').addClass('scroll_hidden').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
		})
	}

	function scrollAble(){
		$('html, body').removeClass('scroll_hidden');
		$('body').removeClass('scroll_hidden').off('scroll touchmove mousewheel')
	}

	// 메뉴 창크기에 따라 resize
	function resizeWidth(){
		var $w = $(window); 
		var scrTop = $w.scrollTop();
		
		if ($w.width() < 1400)
		{
			$('.wrap').find('.aside').addClass('close');
			$('.wrap').find('.logo').find('img').attr('src','/img/m_logo.png');
			//$('#header').addClass('active');
			$('#container').css('height','auto');	
		}
		

		$(window).resize(function(){
			if ($w.width() < 1400)
			{
				$('.wrap').find('.aside').addClass('close');
				$('.wrap').find('.logo').find('img').attr('src','/img/m_logo.png');
				//$('#header').addClass('active');
				$('#container').css('height','auto');
			}			
		})

	}


	//tooltip
	function toolTip(){
		$('.tooltip > a').each(function(){
		$(this).click(function(e){
				e.preventDefault();
				e.stopPropagation();
				$(this).siblings('.tooltip_content').toggleClass('hide');
			})
		});
			
		$('.tooltip_close').each(function(){
			$(this).click(function(){
				$(this).parents('.tooltip_content').addClass('hide');
			})
		});
	}	
	$('.js-tabgroup > div').hide();
	$('.js-tabgroup > div:first-of-type').show();
	$('.js-tabs a').click(function(e){
	  e.preventDefault();
		var $this = $(this),
			tabgroup = '#'+$this.parents('.js-tabs').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();  
	})

	$('.accordian').click(function(){
		var accgroup = '#'+$(this).data('accgroup');
		$(this).toggleClass('active');
		$(accgroup).slideToggle();
	});

});

//dateSetting
function dateSetting(){
	var now = new Date();
	var tomorrow = new Date(now.setDate(now.getDate() + 1));
	const option = {
				"format": "YYYY-MM-DD", 
				"separator": " ~ ", 
				"applyLabel": "확인", 
				"cancelLabel": "취소", 
				"fromLabel": "From",
				"autoApply": true,
				"toLabel": "To", 
				"customRangeLabel": "Custom", 
				"weekLabel": "W", 
				"daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"], 
				"monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
	};
	$('.datepicker-period').daterangepicker({ 
		"locale": option, 
		"showDropdowns" : true,
		"autoApply" : true,
		"singleDatePicker": true,
		"startDate": new Date(),
		"drops": "auto" 
	});
	$('.datepicker-periods').daterangepicker({ 
		"locale": option, 
		"showDropdowns" : true,
		"autoApply" : true,
		"singleDatePicker": false,
		"startDate": new Date(),
		"drops": "auto" 
	});

}
function btnMypage(){
	$('.js-btn-mypage').click(function(){
		$(this).toggleClass('open');
		$(this).next('.mypage-wrap').toggleClass('open');
	})
}

function wPopup(popUrl, name, top, left, width, height) {
  window.open(popUrl, name, 'top=' + top + ',left=' + left + ',width=' + width + ',height=' + height + ',status=no, menubar=no, toolbar=no, resizable=no');
}