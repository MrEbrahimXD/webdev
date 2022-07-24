

function rfAudio() {
    let x = Math.round(Math.random());

    if (x == 1) {
        document.getElementById('firstAudio').play();
        document.getElementById('firstAudio').addEventListener('ended',function(){
            alert('You found the first magic lol ! ');
        });
    } else {
        document.getElementById('secAudio').play();
        document.getElementById('secAudio').addEventListener('ended',function() {
            alert('You found the second magic lol !!!! congrats !');
        });
    } 
    
}




