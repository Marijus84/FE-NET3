const form = document.querySelector("form");
const input = document.querySelector("input");

input.addEventListener("blur", (e) => {
  const value = e.target.value;

  if (!value) return;

  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  const paragraph = document.createElement("p");
  paragraph.style.padding = "0.5rem";
  if (isNaN(value) || parseInt(value) < 0 || parseInt(value) > 99) {
    paragraph.textContent = `Tai yra ne skaičius arba mažesnis už 0 arba didesnis 99. Jūs įvedėte ${value}`;
    paragraph.classList.add("error");
    document.body.append(paragraph);
  } else {
    paragraph.textContent = `Tai yra skaičius ${value}`;
    paragraph.classList.add("success");
    document.body.prepend(paragraph);
  }
  document.querySelector("input").value = "";
});
