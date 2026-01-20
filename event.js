let count = 0;

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");


increment.addEventListener("click", () =>{
    count++;
    counter.innerHTML = count;
});
decrement.addEventListener("click", () =>{
    count--;
    counter.innerHTML = count;
});
reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
});


const color = ["red", "green", "blue", "yellow"];
const body = document.querySelector("body");
const warna = document.getElementById("warna");
const resetWarna = document.getElementById("reset-warna");


warna.addEventListener("click", ()=>{
    const index = Math.floor(Math.random() * color.length);
    body.style.backgroundColor = color[index];
});

resetWarna.addEventListener("click", () => {
    body.style.backgroundColor = "white";
});
 


const tampilkan = document.getElementById("tampilkan");
const text = document.getElementById("name");
const output = document.getElementById("output");


tampilkan.addEventListener("click", () => {
    output.innerHTML = text.value;
});