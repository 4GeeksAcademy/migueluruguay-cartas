/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("palos");
  console.log("values");
  const palos = [`♦`, `♥`, `♠`, `♣`];
  const values = [
    " 2 ",
    " 3 ",
    " 4 ",
    " 5 ",
    " 6 ",
    " 7 ",
    " 8 ",
    " 9 ",
    " 10 ",
    " j ",
    " q ",
    " k ",
    " a ",
  ];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];
};
