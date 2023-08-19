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
	$("html, body").animate({ scrollTop: 0 }, 1500);
});

//working on zooming and carousel once zoomed
//first learning some basics like toggle class and toggle last clicked item back
// $("img").on("click", function() {
//     $(this).toggleClass("pressed")
//         }
//     );
//this toggles clas "pressed" on specific element on and off with each click on img

//now I need to toggle off the previous one, once new one clicked, let's play
// $("img").click(function () {
// 	$(this).addClass("clicked");
// // $(".clicked").removeClass("pressed");
// });

//Bing AI helping again:

// Store the previous element in a variable
var prev = null;

// Attach a click event handler to all img elements
// $("img").click(function() {
//   // Remove the pressed class from the previous element, if any
//   if (prev) {
//     prev.removeClass("pressed");
//   }
//   // Toggle the pressed class on the current element
//   $(this).toggleClass("pressed");
//   // Update the previous element to the current one
//   prev = $(this);
// });
// thanks robot! ;)

//updated so it works also if user clicks the same element second time in a row
// Store the previous element in a variable
var prev = null;

// Attach a click event handler to all img elements
$("img").click(function () {
	// Check if the current element is the same as the previous one
	if (prev && prev[0] !== this) {
		// Remove the pressed class from the previous element
		prev.removeClass("pressed");
	}
	// Toggle the pressed class on the current element
	$(this).toggleClass("pressed");
	// Update the previous element to the current one
	prev = $(this);
});

$(".menu-pop-up h2").hover(
	function () {
		$(this).toggleClass("highlighted");
	},
	function () {
		$(this).toggleClass("highlighted");
	}
);
