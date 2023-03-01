//! CSS manipulation with JS

console.dir(document.querySelector("#first"));
console.dir(document.querySelector("#first").style);

const allDivs = document.querySelectorAll("div");

//! 1. manipulate .style.property
for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].style.width = "200px";
  allDivs[i].style.height = "200px";
  allDivs[i].style.backgroundColor = "green";
  allDivs[i].style.border = "1px solid black";
}

//! 2. use setAttribute method('style', value)
allDivs[1].setAttribute(
  "style",
  "border: 1px solid red; width: 200px; height: 200px; background-color:blue"
);

//! 3. set with style.cssText
allDivs[2].style.cssText =
  "border: 1px solid red; width: 200px; height: 200px; background-color: orange";

//? Mini task
//? Susikurti HTML'e h1, h2, h3 su bet kokiu tekstu viduj;
//? ir pakeisti jų spalvą su 3 skirtingais būdais;
