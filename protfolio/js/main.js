// 1) typed text
// 2) sweet alert
// 3) scrollify 


// type_text
var typed = new Typed('.animate', {
  // Waits 1000ms after typing "First"
  strings: [
    "Developer",
    "Designer",
    "Photoshop"
  ],
  
  typeSpeed:60,
  backSpeed:60,
  loop:true
});

$('.slider-img').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



// sweet alert
$("#submit").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();
   if(email == '' || password == '' )
  {
      swal({
          title: "Fields  Empty!",
          text: "Please check the missing field!!",
          icon: "warning",
          button: "ok",
        });
  } else{
      swal({
          title: "successfully submit",
          icon: "success",
          button: "yes!!",
        });
  }

});

// scrollify

$(function() {
  $.scrollify({
    section : ".main_scroll",
  });
});




// Navbar
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
};




