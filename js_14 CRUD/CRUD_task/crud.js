const BASE_URL = "https://kaker-js-crud.onrender.com/cafe-04/party";

//! GET

const getPartyMembers = async () => {
  try {
    const response = await fetch(BASE_URL);
    const partyMembers = await response.json();
    return partyMembers;
  } catch (err) {
    console.log(err);
  }
};

//! POST

const postGuest = async (guest) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

// window.location.reload();

//! PUT
// method name must be - updateGuest
// window.location.reload();

//! DELETE
// deleteGuest
// window.location.reload();
