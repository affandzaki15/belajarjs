// // arrow

// const kaliDua = (x) => x * 2;
// console.log(kaliDua(5));

// // literals
// let nama = "affan";
// let umur = 21;
// console.log(`Halo, nama saya ${nama}, umur saya ${umur}`);

// // destructuring
// const warna = ["red", "green", "blue", "yellow"];
// const[a,b,,d]= warna;
// console.log(a);
// console.log(b);
// console.log(d);

// // queryselector
// document.querySelector("#demo").textContent = "Apasih";
// document.querySelector(".apa").innerHTML = "Apasih";
// document.querySelector("p").style.color = "red";

// // latisol 1 arrow
// const luasPersegi = (s) => s * s;
// console.log(luasPersegi(4));

// const sapa = (namas) => `Halo, selamat datang ${namas}`;
// console.log(sapa("affan"));

// // latol 2 literal
// const produk = "Laptop";
// const harga = 7500000;

// console.log(`Produk ${produk} di jual dengan harga ${harga}`);

// let a = 5;
// let b = 7;
// console.log(`hasil penjumlahan ${a} + ${b} adalah ${a + b}`);

// // latsol 3 destructuring
// const angkas = [10, 20, 30, 40];
// const [x,,y] = angkas;
// console.log(x,y);
// console.log(y);


// const mahasiswa = {
//     namas: "affan",
//     umurs: 21,
//     jurusans: "matematika komputasi"
// };

// const {namas, jurusans} = mahasiswa;
// console.log(namas, jurusans);


// // latsol 4

// document.querySelector("#texs").textContent = "Halo Affan";
// document.querySelector(".box").textContent = "Kotak Pertama";


// bomus
const nilei = [80,90,75];

const [j,k,l]= nilei;
const rataRata = ((j +k +l)/3).toFixed(2);
console.log(`rata rata nilai adalah ${rataRata}`);


// document.querySelector("#app").innerHTML = "Halo, ini teks yang ditambahkan lewat javascript"

