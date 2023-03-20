//! GET

const GITHUB_URL = "https://api.github.com/users";

const renderGithubUsers = () => {
  fetch(GITHUB_URL)
    .then((response) => response.json())
    .then((data) => renderHTML(data))
    .catch((e) => console.log(e))
    .finally(() => console.log("fetching finished"));
};

document.querySelector("button").addEventListener("click", renderGithubUsers);

function renderHTML(data) {
  console.log(data);
  const list = document.createElement("ul");
  data.forEach((user) => {
    const img = document.createElement("img");
    img.src = user.avatar_url;
    img.style.width = "100px";
    document.body.append(img);
    // const listItem = document.createElement("li");
    // listItem.textContent = user.login;
    // list.append(listItem);
  });
  //   document.body.append(list);
}
