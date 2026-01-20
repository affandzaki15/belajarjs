// let nilai = 100;
// if(nilai > 75){
//     console.log("Goal");
// }


// let angka = 7;

// if (angka > 2){
//     console.log("angka lebih besar dari 2");
// }
// else{
//     console.log("angka lebih kecil dari 2");
// }

// let nilei = 40;
// if(nilei>80){
//     console.log("A");
// }else if(nilei >50){
//     console.log("C");
// }else if(nilei >=40){
//     console.log("D");
// }else {
//     console.log("E");
// }



// let weather = "";
// switch (weather){
//     case "mendung":
//         console.log("dirumah aja");
//         break;
//         case "hujan":
//         console.log("dirumah");
//         break;
//         default:
//             console.log("aja");
// }


// let num = 8;
// if (num%2 === 0){
//     console.log("genap");
// }else {
//     console.log("ganjil");
// }


// let nom = 0;
// if(nom % 2 == 0){
//     console.log("genap");
// }else if (nom % 2 != 0){
//     console.log("ganjil");
// }else if (nom == 0){
//     console.log("nol");
// }
// else {
//     console.log("bukan angka");
// }


// // loop for
// for (let i = 0; i < 5; i++) {
//     console.log("Perulangan ke-" + i);
// }

// // loop while
//  let hitu = 0;
//  while(true){
//     let angka = Math.floor(Math.random() * 10);
//     console.log(angka);
//     hitu++;
//     if (angka === 5) {
//         console.log("angka 5 di temukan,", hitu, "perulangan");
//         break;
//     }
//  }


// //  array dasar panjang 

// let bola = ["ronaldo", "messi", "neymar"];

// console.log(bola[1]);
// console.log("berapa pesepakbola yang menjadi goat", bola.length);



// for(i = 0; i < 5; i++){
//     console.log("pesepakbola", "" + i);
// }



// let hewen = ["kucing", "anjing", "gajah"];
//  for (let i = 0; i < hewen.length; i++ ){
//     console.log(hewen[i]);
//  } 


//  let hewan = ["kucing", "anjing", "gajah"];

//  let index = 0;
//  while (index < hewan.length){
//     if(index % 2 === 1){
//         console.log(hewan[index]);
//     }
//     index++;
//  }

// function mobil (){
//     return ["mobil1", "mobil2", "mobil3"];
// }

// let mobilku = mobil();
// console.log(mobilku);



// let nums = [1,2,7,6,8,9];

// let total = 0;
// for (let i = 0; i<nums.length; i++){
//     total += nums[i];
// }

// console.log(total);


// let numsss = [ 3,5,6,7,3,2,5,9,3,1,6];

// let p = 0;
// while (p<numsss.length){
//     if(numsss[p] > 5){
//         console.log(numsss[p])
//     }
//     p++;
// }

// let nilaiUjian = [90, 80, 70, 60,50];


// for(let i= 0; i<nilaiUjian.length; i++){
//     console.log(nilaiUjian[i]);
// }


// let tots = 0;
// for(let i = 0; i<nilaiUjian.length; i++){
//     tots += nilaiUjian[i]; 
// }

// let rataRata = tots / nilaiUjian.length;
// console.log(rataRata);



// let ses = ["api", "air", "pada", "poco", "lemm"];

// let ind = 0;
// while (ind <ses.length){
//     if(ses[ind].length > 3){
//         console.log(ses[ind])
//     } ind++;
// }


// let numsss = [ 3,5,6,7,3,2,5,9,3,1,6];

// let p = 0;
// while (p<numsss.length){
//     if(numsss[p] > 5){
//         console.log(numsss[p])
//     }
//     p++;
// }


// let user = {
//     name: "dzaki",
//     age: 22,
//     gender: "male",
//     gre: function(){
//         return " halo, saya " + "" + this.name;
//     }
// }
// console.log(user.gre());


// let mahasiwa = {
//     nams: "dean",
//     nim: 220,
//     jurusan: "math",
//     perkenalan: function(){
//         return " Halo, nama saya " + this.nams + " dengan NIM " + this.nim + " dari Jurusan " + this.jurusan;
//     }
// }

// mahasiwa.ipk =3.5;
// mahasiwa.jurusan = "teknik informatika";
// console.log(mahasiwa.nams);
// console.log(mahasiwa);
// console.log(mahasiwa.perkenalan());

let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log(luas);



function tambah(a,b){
    return a + b;
}

console.log(tambah(7,3));
function kurang(a,b){
    return a - b;
}

console.log(kurang(7,3));


let angk = 11;
    if  (angk % 2 === 0){
        console.log( "genap");
    } else { 
        console.log("ganjil");
    }


let frien = ["affan", "budi", "caca"];

for (let i = 0; i<frien.length; i++){
    console.log(frien[i]);
}

let buks = {
    judul: "belajar js",
    penulis: "affan",
    tahun: 2021,
    info: function(){
        return this.judul + " ditulis oleh " + this.penulis + " pada tahun "
+ this.tahun;    }
}

console.log(buks.info());




let nama = "Affan";
document.getElementById("demo").innerHTML = "Halo, " + nama + "!";


function ubahTeks(){
    document.getElementById("demo2").innerHTML = "Teks sudah berubah";
}


let angka = 0

function tamba(){
    angka++;
    document.getElementById("counter").innerHTML = angka;
}

function kurag(){
    angka--;
    document.getElementById("counter").innerHTML = angka;
}


function ubahHalo(){
    document.getElementById("haloo").style.color = "red";
}



function ubahHal(){
    let p = document.getElementById("hal");
    if (p.style.display === "none"){
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}


let teks = document.getElementById("mathh");

let teksAwal = "Belajar Math";
let warnaAwal = "black";

let teksBaru = "Belajar Math dan Math";
let warnaBaru = "red";


let status = false;


function ubahh(){
    if (!status){
        teks.innerHTML = teksBaru;
        teks.style.color = warnaBaru;
        status = true;
    } else {
        teks.innerHTML = teksAwal;
        teks.style.color = warnaAwal;
        status = false;
    }
}