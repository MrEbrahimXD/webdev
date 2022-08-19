const mainWindow = document.querySelector('html');
const before = document.querySelector('#before');
const pBefore = document.querySelector("#before-p");

const header = document.querySelector('.header');

const sectArry = document.querySelectorAll('section')
window.onload = () => {
    header.style.opacity="0";
    for (let x = 0; x < sectArry.length; x++) {
        sectArry[x].style.opacity = "0";
    }
    mainWindow.style.opacity = "1";
    // window.innerHeight = "100vh";
    setTimeout(()=>{
        header.style.opacity = "1";
        before.style.display= "none";
        pBefore.style.display = "none";
        for (let e = 0; e < sectArry.length; e++) {
            sectArry[e].style.opacity = "1";
        }
    },1400);
    
}