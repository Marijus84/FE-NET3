//!async await syntax

const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e))
//   .finally(() => console.log("fetching finished"));

// const getPosts = async () => {}
async function getPosts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log(" finished ");
  }
}

getPosts();
