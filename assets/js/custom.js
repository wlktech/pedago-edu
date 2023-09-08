// password view codes
function loginPwdView() {
    var x = document.getElementById("password");
    var y = document.getElementById("eye");
    if (x.type === "password") {
        x.type = "text";
        y.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        x.type = "password";
        y.classList.replace("fa-eye-slash", "fa-eye");
    }
}
// password view codes


// remember me codes
function saveLogin() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var rememberMeCheckbox = document.getElementById("rememberMe");

    if (rememberMeCheckbox.checked) {
      var email = emailInput.value.trim();
      var password = passwordInput.value.trim();

      // Save the login details in a cookie or local storage
      // Note: Here, we are using local storage as an example
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      // Clear the saved login details from the cookie or local storage
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
}
function loadSavedLogin() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var rememberMeCheckbox = document.getElementById("rememberMe");

    // Check if there are saved login details in the cookie or local storage
    var savedEmail = localStorage.getItem("rememberedEmail");
    var savedPassword = localStorage.getItem("rememberedPassword");

    if (savedEmail && savedPassword) {
      // Set the saved login details in the input fields
      emailInput.value = savedEmail;
      passwordInput.value = savedPassword;
      rememberMeCheckbox.checked = true;
    }
}
// remember me codes

//slick slide for home banner
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow arrow">',
    nextArrow: '<i class="fas fa-angle-right right_arrow arrow">',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//slick slide for blog
$('.responsive1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow1 arrow">',
    nextArrow: '<i class="fas fa-angle-right right_arrow1 arrow">',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//slick slide for blog
$('.responsive2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-left left_arrow1 arrow">',
    nextArrow: '<i class="fas fa-angle-right right_arrow1 arrow">',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//  Scroll to top for index.html
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// aos
AOS.init({
    duration: 1000, // Set the duration to 1000 milliseconds (1 second)
  });