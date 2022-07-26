
function rfAudio() {
    let x = Math.round(Math.random());

    if (x == 1) {
        document.getElementById('firstAudio').play();
        document.getElementById('firstAudio').addEventListener('ended',() => {
            //

        });
    } else {
        document.getElementById('secAudio').play();
        document.getElementById('secAudio').addEventListener('ended' , () => {
            //
        
        });
    } 
    
}


$(document).ready( function() {
    $(".nav-button").click( function() {
      $(this).toggleClass("open")
      $('.nav-ul').toggleClass("open");
    });
  });
