const form = document.querySelector("#registrationForm");
const hasil = document.querySelector("#displayArea")
    
form.addEventListener("submit", function(event){
    event.preventDefault();

    const first = document.querySelector("#firstName").value;
    const last = document.querySelector("#lastName").value;
    let phone = document.querySelector("#phoneInput").value;

    if(first === "" || last === "" || phone ==="") {
        alert("lengkapcou");
        return;
    }

    if(phone.startsWith("0")){
        phone = "+62" + phone.slice(1);
    } else if(!phone.startsWith("+62")){
        phone = "+62" +phone;
    }

    hasil.innerHTML = `
        <h3>Hi, my name is ${first} ${last}</h3>
        <p>Phone: ${phone} </p>
    
    
    `

    form.reset()
})