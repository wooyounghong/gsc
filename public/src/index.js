// console.log('hi');

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
  // create a scroll to top when the page renders;
  // console.log('this', this);
  $(window).scrollTop();
});
