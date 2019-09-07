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

$(document).ready(function() {
    openNav();
    closeNav();
})

function openNav() {
    if ($(window).width() < 768) {
        document.getElementById("mySidenav11").style.width = "100%";


    } else {
        document.getElementById("mySidenav11").style.width = "35%";

    }
}

function closeNav() {
    document.getElementById("mySidenav11").style.width = "0%";
}

