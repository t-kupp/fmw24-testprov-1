// 6a. Fetch och DOM (3p)
// Skriv en funktion, displayUserData, som hämtar data från
// https://jsonplaceholder.typicode.com/users med fetch och skapar en lista i HTML där
// varje användares namn och e-post visas som en <li>.

const list = document.querySelector("#user-list");
const select = document.querySelector("#user-select");
const emailOutput = document.querySelector("#email-output");

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  displayData(data);
  displaySelectMenu(data);
}
getData();

function displayData(data) {
  data.forEach((user) => {
    const listEntry = document.createElement("li");
    listEntry.innerHTML = `${user.name}<br>${user.email}`;
    list.appendChild(listEntry);
  });
}

// 6b. Visa användare (3p)
// Hämta data från https://jsonplaceholder.typicode.com/users
// Visa varje användares namn i en drop down (select i HTML).
// När man väljer ett namn i listan så ska användarens e-post
// visas i en div.

function displaySelectMenu(data) {
  data.forEach((user) => {
    const option = document.createElement("option");
    option.innerHTML = `${user.name}`;
    select.appendChild(option);
  });

  emailOutput.innerHTML = data[0].email; // Initially show first email
  select.addEventListener("change", (e) => {
    emailOutput.innerHTML = data[e.target.selectedIndex].email;
  });
}
