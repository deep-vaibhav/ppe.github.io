const sub_container = document.querySelector('.sub-container');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

tl.fromTo(sub_container,1, {height: "0%"}, {height: "80%" })
   .fromTo(sub_container, 1.2, {width: "60%"}, {width:"70%"})
   .fromTo(logo, 1.2, {y: "-200%"}, {y: "8%"}, "-=1.2")
   .fromTo(slider, 1.2, {x:"-100%"}, {x: "0%"}, "-=1.2")