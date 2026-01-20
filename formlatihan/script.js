const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    // deklarasi form
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("date").value;
    const pesan = document.getElementById("message").value;

    const gender1 = document.querySelector('input[name="gender"]:checked');
    const gender = gender1 ? gender1.value : "-";

    // result
    document.getElementById("result-nama").innerText = nama;
    document.getElementById("result-date").innerText = tanggal;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-pesan").innerText = pesan;

    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleString("id-ID");

    form.reset();
})