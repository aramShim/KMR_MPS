/*kmrmps.js*/
$(function(){
	if ($('.aside-menu').length > 0) {asideMenu();}
	if ($('.nav-list').length > 0) {leftMenu();}
	if ($('.js-btn-mypage').length > 0) {btnMypage();}
	if ($('.datepicker-period').length > 0) {dateSetting();}
});
//asideMenu
function asideMenu(){
	$('.aside-menu button').click(function(){
		$('#wrap').toggleClass('wide');
	})
	$('.aside-header button').click(function(){
		$('#wrap').toggleClass('wide');
	})
	$('.aside-bg').click(function(){
		$('#wrap').toggleClass('wide');
	})
}
//left menu
function leftMenu(){
	var depli = $('.nav-list > a');
	
	depli.click(function(e){	
		e.preventDefault();
		e.stopPropagation();

		$(this).toggleClass('active')
		$(this).siblings('ul').slideToggle();

	});
}	

//demosong ingo -> new button
function newColumn(status){
	const tableId = $(status);
	const newRow = tableId.find('tbody tr').eq(0).clone(true); //첫번째 값 복사
	//행 초기화
	newRow.find('td').each(function(){
		$(this).find('input').val('');
		$(this).find('input').prop('checked', false);
		$(this).find('select').val('');
	})
	tableId.append(newRow);
}
function delColumn(a){
	a.closest('tr').remove();	
}

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
