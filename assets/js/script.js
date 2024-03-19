"use strict";

(function ($) {
  "use strict";

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  /* ----------------------------------------------------------- */

  /*  Fixed header
  /* ----------------------------------------------------------- */

  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.site-navigation').addClass('menu_fixed header-white animated fadeInDown');
    } else {
      $('.site-navigation').removeClass('menu_fixed header-white animated fadeInDown');
    }
  });
  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.scroll-to-top').removeClass('reveal');
    }
  }); // Counter

  $(document).on('ready', function () {
    $(".navbar-nav a,.js-scroll-trigger").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      } // End if

    });
  });

//   function sendMail() {
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     }

//     emailjs.send("service_r84665f", "template_6fq0ees", params)
//         .then(function(response) {
//             console.log('Email sent successfully:', response);
//             // Display success message or perform other actions
//             document.querySelector('.contact__msg').style.display = 'block';
//         })
//         .catch(function(error) {
//             console.error('Email sending failed:', error);
//             // Display error message or perform other actions
//         });
// }


function sendMail() {
  let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  }

  // Assuming this is your email sending logic
  emailjs.send("service_r84665f", "template_6fq0ees", params)
      .then(alert('Email sent successfully!'))(function (response) {
          console.log('Email sent successfully', response);
          document.querySelector('.contact__msg').style.display = 'block';
      })
      .catch(function (error) {
          console.error('Email sending failed:', error);
          // Handle error scenario
      });
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  sendMail(); // Call your sendMail function
});

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("[data-fade-in]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


  $('.testimonials-slides').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    center: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 3
      }
    }
  });

  

  function toggleIcon(e) {
    $(e.target).prev('.panel-heading').find(".more-less").toggleClass('fa-minus fa-plus');
  }

  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
  /* ---------------------------------------------
         Contact Form
  --------------------------------------------- */

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data; // Success function

  function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
  } // fail function



  function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  // function sendMail () {
  //   let params = {
  //     name : document.getElementById("name").value,
  //     email : document.getElementById("email").value,
  //     message : document.getElementById("message").value
  //   }

  //   emailjs.send("service_95kiphv", "template_re8d8h7", params).then(alert("Email sent successfully"))
  // }
  // sendMail();



  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    sendMail();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: form_data
    }).done(done_func).fail(fail_func);
  });

  
 


  
})(jQuery);