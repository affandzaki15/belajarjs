

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("first").value.trim();
  const namas = document.getElementById("last").value.trim();
  const fullname = nama + " " + namas.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value;
  const state = document.getElementById("state").value;
  const countryphone = document.getElementById("numbercountry");
  const code = countryphone.value;
  const phone = document.getElementById("phone").value.trim();
  const fullphone = code + phone;
  const password = document.getElementById("password").value;

  if(
    nama === ""||
    namas === "" ||
    email === "" ||
    country === "" ||
    state === "" ||
    code === "" ||
    phone === "" ||
    password === "" 
  ) {
    alert("Harus diisi semua");
    return;
  }

  if (!email.includes("@")){
    alert("email harus menggunakan @");
    return;
  }

  if (password.length < 6){
    alert("pw harus lebih dari 6 karakter");
    return;
  }

  // simpan local storage
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("email", email);
  localStorage.setItem("country", country); 
  localStorage.setItem("state", state);
  localStorage.setItem("phone", fullphone);
  localStorage.setItem("password", password);
  

  window.location.href = "hasil.html";
});
