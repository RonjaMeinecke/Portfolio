import "./styles.scss";
import "bootstrap/dist/js/bootstrap.bundle";
$(document).ready(function () {
  $('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $("html, body").animate({ scrollTop: target - 1 }, 1500);
    event.preventDefault();
  });
});

//$(document).ready(function() {
//			$('a[href^="#top"]').click(function(event){
//				var id =$(this).attr("href");
//				var target = $(id).offset().top;
//			$('html, body').animate({scrollTop:target -1}, 1500);
//				event.preventDefault();
//		});
//	});

//$(document).ready(function() {
//			$('a[href^="#lerncampus"]').click(function(event){
//				var id =$(this).attr("href");
//				var target = $(id).offset().top;
//			$('html, body').animate({scrollTop:target -100}, 500);
//				event.preventDefault();
//		});
//	});

//$(document).ready(function() {
//			$('a[href^="#firmaa"]').click(function(event){
//				var id =$(this).attr("href");
//				var target = $(id).offset().top;
//			$('html, body').animate({scrollTop:target -1}, 2000);
//				event.preventDefault();
//		});
//	});

//$(document).ready(function() {
//			$('a[href^="#firmaz"]').click(function(event){
//				var id =$(this).attr("href");
//				var target = $(id).offset().top;
//			$('html, body').animate({scrollTop:target -17}, 500);
//				event.preventDefault();
//		});
//	});

//horizontales smooth scrollen auch möglich:
//
//		$(document).ready(function() {
//			$('a[href^="#"]').click(function(event){
//				var id =$(this).attr("href");
//				var target = $(id).offset().left;
//			$('html, body').animate({scrollLeft:target -17}, 1500);
//				event.preventDefault();
//		});
//	});
