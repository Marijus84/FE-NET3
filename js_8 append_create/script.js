//! JS elements create, append, prepend, remove etc;
// const h1 = document.createElement("h1");
// h1.textContent = "Hi, I am Heading created with JS";
// document.body.append(h1);

// const h2 = document.createElement("h2");
// h2.textContent = "I am Heading 2";
// h2.setAttribute("class", "red");
// console.log(h2.getAttribute("class"));
// h2.classList.add("red");
// h2.classList.remove("red");
// h2.classList.toggle("red");

// document.body.prepend(h2);

// document.querySelector("h1").remove();
// document.querySelector("h2").remove();

/*
- on form submit:  
    + create UL if does not exist; 
    + create LI; 
    + add textContent for LI from input (get value from input); 
    + append LI to UL; 
    + append UL to BODY; 
    + on click event strike through LI; 
    + on contextmenu event remove LI;  
    + validate if not empty input;
*/

const ulElement = document.createElement("ul");
document.body.append(ulElement);

document.querySelector("form").addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const input = document.querySelector("input");

  if (!input.value) {
    console.warn("Input was empty");
    return;
  }

  const listItem = document.createElement("li");

  listItem.textContent = input.value;
  listItem.style.fontSize = "2rem";

  listItem.addEventListener("click", (e) => {
    e.target.classList.toggle("strike");
  });

  listItem.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.target.remove();
  });

  document.querySelector("ul").appendChild(listItem);

  input.value = "";
}
