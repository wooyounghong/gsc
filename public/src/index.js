console.log('hi');

// routing to the div element;
// without jQuery;

// const clickScrollTo = id => {
//   const element = document.getElementById(id);
//   console.log(element);
//   element.scrollIntoView({
//     behavior: 'smooth',
//   });
// };

// with jquery;
// window.scrollTo(0, 0);

$(document).ready(function() {
  // scrolling to top;
  $('html, body').animate({ scrollTop: 0 }, 700);

  // scroll to services container;
  $('#services-navbar').click(function() {
    $(window).scrollTop($('#services-container').offset().top);
  });
  // scroll to about container;
  $('#about-navbar').click(function() {
    $(window).scrollTop($('#about-container').offset().top);
  });
  $('#contact-navbar').click(function() {
    $(window).scrollTop($('#contact-container').offset().top);
  });
  // scroll to contact container;
});
