// utils.ts

let draw = s => {
  s = (typeof s === "object") ? JSON.stringify( s ) : s;
  let el = document.querySelector("#page");
  el.innerHTML += s + "<hr/>" ;
}

export { draw };