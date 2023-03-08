const h1 =  document.getElementById('aya');
const Box = document.getElementById('box');
const thing = document.querySelector('svg #line');
const container = document.querySelector('.container');
const last = document.getElementById('last');

setTimeout(() => {
  Box.style.opacity = 0;
  Box.style.display = "none";
  typeEffect(aya,60);
}, 6000);


Splitting();
const $ = document.querySelectorAll.bind(document);
const chars = document.querySelectorAll(".char");
const config = {
  delay: 1,
  repeat: 1,
  yoyo: true
};
const id = {};
const elements = {
  one: ".col1-row1",
  two: ".col2-row1",
  three: ".col3-row1",
  four: ".col4-row1",
  five: ".col1-row2",
  six: ".col2-row2",
  seven: ".col3-row2",
  eight: ".col4-row2",
  nine: ".col1-row3",
  ten: ".col2-row3",
  eleven: ".col3-row3",
  twelve: ".col4-row3",
  thirteen: ".col1-row4",
  fourteen: ".col2-row4",
  fifteen: ".col3-row4",
  sixteen: ".col4-row4"
};

Object.keys(elements).forEach((key) => {
  id[key] = $(`${elements[key]} .triangle`);
});

const tl = new TimelineMax(config);

const explodeTime = 2;
const explodeEase = SlowMo.ease.config(0.7, 0.7, false);

tl.to(id.one, explodeTime, { x: -500, y: -500, ease: explodeEase }, "explode")
  .to(id.two, explodeTime, { x: 400, y: -500, ease: explodeEase }, "explode")
  .to(id.three, explodeTime, { x: -400, y: -500, ease: explodeEase }, "explode")
  .to(id.four, explodeTime, { x: 500, y: -500, ease: explodeEase }, "explode")
  .to(
    id.five,
    explodeTime,
    { x: -500, y: -500, rotate: "-30deg", ease: explodeEase },
    "explode"
  )
  .to(
    id.six,
    explodeTime,
    { x: -500, y: 500, rotate: "30deg", ease: explodeEase },
    "explode"
  )
  .to(
    id.seven,
    explodeTime,
    { x: 400, y: -500, rotate: "-30deg", ease: explodeEase },
    "explode"
  )
  .to(
    id.eight,
    explodeTime,
    { x: 500, y: 500, rotate: "30deg", ease: explodeEase },
    "explode"
  )
  .to(id.nine, explodeTime, { x: -500, y: 400, ease: explodeEase }, "explode")
  .to(id.ten, explodeTime, { x: -600, y: 700, ease: explodeEase }, "explode")
  .to(id.eleven, explodeTime, { x: 600, y: 700, ease: explodeEase }, "explode")
  .to(id.twelve, explodeTime, { x: 500, y: 400, ease: explodeEase }, "explode")
  .to(
    id.fourteen,
    explodeTime,
    { x: -500, y: 500, ease: explodeEase },
    "explode"
  )
  .to(id.fifteen, explodeTime, { x: 500, y: 500, ease: explodeEase }, "explode")
  .staggerFrom(
    Array.from(chars),
    1.5,
    {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: Back.easeOut
    },
    0.01,
    "-=1.2"
  );


setTimeout(() => {
  container.style.opacity = 0;
  document.body.style.backgroundColor = "#cf4f6664";
  container.style.display = "none";
  typeEffect(last,70);
  last.style.visibility = "visible";
  
}, 13000);

setTimeout(() => {
  document.body.style.backgroundColor = "#ee4363c9";
}, 30000);
  
      