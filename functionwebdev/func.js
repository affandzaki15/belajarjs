function hitung(a, b) {
  const z = (a + b) * 2;
  console.log(z);
  return hitung;
}
hitung(3, 4);

const sapa = (nama) => "halo " + nama;
console.log(sapa("andi"));

function hitungHarga(harga) {
  if (harga >= 100000) {
    return harga - 0.2 * harga;
  } else if (harga >= 50000) {
    return harga - 0.1 * harga;
  } else {
    return harga;
  }
}
console.log(hitungHarga(20000));

const sapaPagi = buatSapaan("pagi");
const sapaMalam = buatSapaan("malam");

function buatSapaan(waktu) {
  return function (sapa) {
    return "selamat " + waktu + ", " + sapa;
  };
}

console.log(sapaPagi("andi"));
console.log(sapaMalam("Budi"));

// challenge 7
const totalSetelahDiskon = (listHarga) => {
  let hargaa = 0;
  for (let harga of listHarga) {
    hargaa += harga;
  }

  if (hargaa >= 100000) {
    return hargaa - hargaa * 0.1;
  }
  return hargaa;
};

console.log(totalSetelahDiskon([20000, 30000, 50000]));
console.log(totalSetelahDiskon([10000, 20000]));

const counter = buatCounter();

function buatCounter() {
  let count = 0;

  const tambah = () => {
    count++;
  };

  const kurang = () => {
    count--;
  };

  const nilai = () => {
    return count;
  };

  return { tambah, kurang, nilai };
}

counter.tambah();
counter.tambah();
counter.kurang();

console.log(counter.nilai());







function createLimiter(limit) {
  let count = 0;

  return {
    call: function () {
        count++;

      if (count <= limit) {
        return "OK";
      } else  {
        return "BLOCKED";
      }
    },

    reset: function () {
        count = 0;
    },
  };
}

const limiter = createLimiter(3);
console.log(limiter.call()); // OK
console.log(limiter.call()); // OK
console.log(limiter.call()); // OK
console.log(limiter.call()); // BLOCKED

limiter.reset();


const cart = [
  { name: "Buku", price: 20000, qty: 2 },   // 40000
  { name: "Pulpen", price: 5000, qty: 4 },  // 20000
  { name: "Tas", price: 50000, qty: 1 }     // 50000
];

function hitungTotal(cart){
    let total = 0;
    for (let item of cart){
        total += item.price * item.qty;
    }

    if (total >= 100000){
        return total - (total * 0.1);
    } else if (total < 100000){
        return total - (total * 0);
    }
}

console.log(hitungTotal(cart));


const siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 70 },
  { nama: "Cici", nilai: 90 }
];


const hitungNilaiSiswa = siswa => {
    let total = 0;
    for (let item of siswa){
        total += item.nilai;
    }


        return total / siswa.length;
    
}

console.log(hitungNilaiSiswa(siswa))