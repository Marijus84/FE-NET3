//! POST

const reqresBaseUrl = "https://reqres.in/";

// const userToAdd = {
//   name: "testUser",
//   job: "testJob",
// };

// const addUser = async (user) => {
//   const response = await fetch(reqresBaseUrl + "api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });
//   const data = await response.json();
//   console.log(data);
// };

// addUser(userToAdd);

//!PUT

// const userId = 5;
// const userToUpdate = {
//   name: "updateUser",
//   job: "updateJob",
// };

// const updateUser = async (id, user) => {
//   const response = await fetch(reqresBaseUrl + "api/users/" + id, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });
//   const data = await response.json();
//   console.log(data);
// };

// updateUser(userId, userToUpdate);

//! DELETE

const userToDeleteId = 5;

const deleteUser = async (id) => {
  const response = await fetch(reqresBaseUrl + "api/users/" + id, {
    method: "DELETE",
  });
  console.log(response.status);
};

deleteUser(userToDeleteId);
