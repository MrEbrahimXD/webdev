$(document).ready( function() {
  $(".nav-button").click( function() {
    $('')
    $(this).toggleClass("open");
    $('.ul').toggleClass("open");
    $('.nav-ul').toggleClass("open");
  });
});

// const important = document.querySelector('.important');

// const createInfo = (subject , description)  => {
//   const subject = document.createElement('div');
//   subject.className = "subject";
//   const title = document.createElement('h2');
//   title.className = "title";
//   title.textContent = subject;
//   const description = document.createElement('p');
//   description.className = "description";
//   description.textContent = description;
  // if (hasList === true) {
  //   const list = document.createElement('ul');
  //   list.className = "concepts";
  //   // for (let a = 0; a < concepts.length; a++) {
  //   //   document.createElement('li')
  //   // }
  // }
// }

// createInfo("Physics" , "lorem23")