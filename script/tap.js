$(function(){
	$('.tabcontent01 > div').hide();
	$('.tabnav01 a').click(function () {
		$('.tabcontent01 > div').hide().filter(this.hash).fadeIn();	
		$('.tabnav01 a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();

	$('.tabcontent02 > div').hide();
	$('.tabnav02 a').click(function () {
		$('.tabcontent02 > div').hide().filter(this.hash).fadeIn();	
		$('.tabnav02 a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
