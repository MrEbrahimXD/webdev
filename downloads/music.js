

function rfAudio() {
    let classListSarah = document.getElementsByClassName('app');
    let x = Math.round(Math.random());

    if (x == 1) {
        document.getElementById('firstAudio').play();
        document.getElementById('html-id').style.backgroundColor = "#304352";
        document.getElementById('html-id').style.color = "#fff";
        for (let c = 0; c < classListSarah.length; c++){
            classListSarah[c].style.backgroundColor = "#75B2AF";
        }
        document.getElementById('canvas').style.display = "block";
        document.getElementById('firstAudio').addEventListener('ended',function() {
        for (let p = 0; p < classListSarah.length; p++){
            classListSarah[p].style.backgroundColor = "#3041521b";
        }            
            document.getElementById('canvas').style.display = "none";
            document.getElementById('html-id').style.backgroundColor = "#fff";
            document.getElementById('html-id').style.color = "black";
        });
    } else {
        document.getElementById('secAudio').play();
        document.getElementById('html-id').style.backgroundColor = "#304352";
        document.getElementById('html-id').style.color = "#fff";
        for (let m = 0; m < classListSarah.length; m++){
            classListSarah[m].style.backgroundColor = "#75B2AF";
        }
        document.getElementById('canvas').style.display = "block";
        document.getElementById('secAudio').addEventListener('ended' , function() {
            //
            document.getElementById('canvas').style.display = "none";
            document.getElementById('html-id').style.backgroundColor = "#fff";
            document.getElementById('html-id').style.color = "black";
            for (let q = 0; q < classListSarah.length; q++){
                classListSarah[q].style.backgroundColor = "#3041521b";
            } 
        });
    } 
    
}