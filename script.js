function getRandomUser() {
  let url = "https://randomuser.me/api/";
  let response = fetch(url);
  response
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      const user = value.results[0];
      console.log(user);
      displayUser(user);
    });
}
function displayUser(user) {
  const UserImage = document.querySelector(".user-img");
  const name = document.querySelector(".name");
  const dob = document.querySelector(".dob-text");
  const country = document.querySelector(".location-text");
  const number = document.querySelector(".phone-text");
  const email = document.querySelector(".email-text");
  const password = document.querySelector(".password-text");
  const gender = document.querySelector(".gender-text");

  UserImage.innerHTML = `  <img
  src=${user.picture.large}
  class="user-img"/>`;
  name.innerText = `${user.name.first} ${user.name.last}`;
  dob.innerText = `${user.dob.date}`;
  country.innerText = `${user.location.country}`;
  number.innerText = `${user.cell}`;
  email.innerText = `${user.email}`;
  password.innerText = `${user.login.password}`;
  gender.innerText = `${user.gender}`;
}
getRandomUser();
