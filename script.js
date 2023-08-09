async function getRandomUser() {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  const value = await response.json();
  const user = value.results[0];
  console.log(user);
  displayUser(user);
}
function displayUser(user) {
  const UserImage = document.querySelector(".user-img");
  const name = document.querySelector(".name");
  const dob = document.querySelector(".dob");
  const country = document.querySelector(".location");
  const number = document.querySelector(".phone");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const gender = document.querySelector(".gender");

  UserImage.innerHTML = `  <img
  src=${user.picture.large}
  class="user-img"/>`;
  name.innerText = `${user.name.first} ${user.name.last}`;
  dob.innerHTML = `<img src="img/cal.svg" alt="" class="cal" />
  <div class="dob-text">${user.dob.date}</div>`;
  gender.innerHTML = ` <img src="img/gender.png" alt="" class="cal" />
  <div class="gender-text">${user.gender}</div>`;
  country.innerHTML = `<img src="img/location.png" alt="" class="cal" />
  <div class="location-text">${user.location.country}</div>`;
  number.innerHTML = ` <img src="img/phone.png" alt="" class="cal" />
  <div class="phone-text">${user.cell}</div>`;
  email.innerHTML = `<img src="img/email.png" alt="" class="cal email-img" />
  <div class="email-text">${user.email}</div>`;
  password.innerHTML = `<img src="img/pass.png" alt="" class="cal" />
  <div class="password-text">${user.login.password}</div>`;
}
getRandomUser();
