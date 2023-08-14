let slideSpeed = 300;

$(".close-button").on("click", function () {
	$(".menu-pop-up").slideUp(slideSpeed);
	// $(".menu-hamburger").toggle();
});

$(".menu-hamburger").on("click", function () {
	$(".menu-pop-up").slideDown(slideSpeed);
	// $(".menu-hamburger").toggle();
});

//chevron-up scroll to top of the page
// $(".chevron-up").click(function () {
// 	$(document).scrollTop(0);
// });

//better with slow animation
$(".chevron-up").on("click", function () {
	$("html, body").animate({ scrollTop: 0 }, 2000);
});