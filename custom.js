// function myFuntion(){

//   if ($(window).width() < 960) {
//     document.getElementByClassName("home").style.width = "100%";
//     document.getElementByClassName("home").style.height = "33.33%";
//     document.getElementByClassName("products").style.width = "100%";
//     document.getElementByClassName("products").style.height = "33.33%";
//     document.getElementByClassName("testimonial").style.width = "100%";
//     document.getElementByClassName("testimonial").style.height = "33.33%";

//   }

// }

// $(document).ready(function(){
//   if ($(window).width() < 960) {
//     document.getElementById("home").style.width = "100%";
//     document.getElementById("home").style.height = "33.33%";
//     document.getElementById("products").style.width = "100%";
//     document.getElementById("products").style.height = "33.33%";
//     document.getElementById("testimonial").style.width = "100%";
//     document.getElementById("testimonial").style.height = "33.33%";

//   }
// });


// $(document).resize(function(){
//     if($(window).width()>=960){
// $("#gallery-resp").css("display", "none");}
// else{
// $("#gallery").css("display", "none");}
// });

$(document).ready(function(){
  if($(window).width()<768){
    document.getElementById('card-1').style.margin="10%";
    document.getElementById('card-2').style.margin="8%";
    document.getElementById('card-3').style.margin="8%";
    document.getElementById('card-1').style.width="85%";
    document.getElementById('card-2').style.width="85%";   
    document.getElementById('card-3').style.width="85%";
    document.getElementById('card-1').style.height="90%";
    document.getElementById('card-2').style.height="90%";   
    document.getElementById('card-3').style.height="90%";    
  }
});

function openNav() {
	if ($(window).width() < 768) {
    document.getElementById("mySidenav").style.width = "100%";


}
else {
    document.getElementById("mySidenav").style.width = "35%";

}
 }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
  $(".btn-1").click(function(){
    $(".comment-1").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $(".btn-2").click(function(){
    $(".comment-2").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $(".btn-3").click(function(){
    $(".comment-3").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $(".btn-4").click(function(){
    $(".comment-4").fadeToggle("slow");
  });
});
$(document).ready(function(){
	  $(".news-icons").click(function(){
	  	$("p1").toggleClass("hidden");
	  	});
	});

// $(element).toggleClass("A B");

// $(document).ready(function(){
//   if ($(window).width() < 960) {
//       $("").toggleClass("gallery-resp");
//       };
//   });

var width = $(window).width();
$(window).on('resize', function() {
  if ($(this).width() != width) {
    width = $(this).width();
    console.log(width);
  }
});