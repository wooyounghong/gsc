console.log('js file is successfully linked');
// routing to the div element;
// without jQuery;
// scroll function that takes in string type of containerId and run this function inside the HTML element
//// example ->
/////  (from): <a href="javascript:undefined;" id="about" onclick="clickScrollTo("about")"></a>
/////   (to):   <div id="about-container"></div>
///////  THIS SHOULD INVOKE THE FUNCTION clickScrollTo() when you click on the navbar anchor element to the container element that you want;

// function inside the JS file that you create to run it on HTML element
// const clickScrollTo = id => {
//   const element = document.getElementById(id);
//   console.log(element);
//   element.scrollIntoView({
//     behavior: 'smooth',
//   });
// };

// with jquery;
// set up jQuery so that when HTML loads, these event handlers will trigger asynchronously;
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
  // scrolling to contact container;
  $('#contact-navbar').click(function() {
    $(window).scrollTop($('#contact-container').offset().top);
  });
  // scroll to contact container;
});
