// Import stylesheets
import './style.css';

const draw = s => {
  s = typeof s === "object" ? JSON.stringify(s) : s ;
  document.querySelector("#app").innerHTML += `<p>${s}</p>`;
}

let topic: string = "Typescript";
draw(topic);
