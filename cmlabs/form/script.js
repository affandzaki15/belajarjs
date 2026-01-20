const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const fullname = first + " " + last;

    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    document.getElementById("result").innerHTML = `
    <p>Hi, my name is ${fullname}</p>
    <p>Phone Number: ${phone}</p>
    <p>Address: ${address}</p>
    `;
})