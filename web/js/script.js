$(function() {
$(".headericon").click(function () {
	$("html,body").animate({
		scrollTop: 0 }, 500);
	return false;
	});
});

$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		pause: 5000
	});
});
