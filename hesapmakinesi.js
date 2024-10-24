let sayi1 = parseFloat(prompt("Lütfen 1. sayıyı giriniz."));
let sayi2 = parseFloat(prompt("Lütfen 2. sayıyı giriniz."));
//* 1- prompt() fonksiyonu ile kullanıcıdan birinci ve ikinci sayıyı alıyoruz.
//* 2- Bu sayıları parseFloat() ile ondalıklı bir sayıya çeviriyoruz.Böylece hem tam sayılarla hem de ondalıklı sayılarla çalışabiliriz.

let operator = prompt("İşlem türünü seçin ( +, -, *, / )");
//* 3- Ardından, kullanıcıdan işlem yapmak istediği operatörü (örneğin: +, -, *, /) alıyoruz.

let result;
//* 4- result değişkeni tanımlıyoruz. Bu değişkende sonucu saklayacağız.

if (operator == "+") {
  result = sayi1 + sayi2;
} else if (operator == "-") {
  result = sayi1 - sayi2;
} else if (operator == "*") {
  result = sayi1 * sayi2;
} else if (operator == "/") {
  result = sayi1 / sayi2;
} else {
  console.log("Geçersiz İşlem!");
}
//* 5- Eğer kullanıcı geçersiz bir işlem girerse (örneğin: &, % gibi geçersiz karakterler), son else bloğu çalışır ve "Geçersiz işlem!" mesajı gösterilir.

console.log(`Girilen 1. sayı = ${sayi1}`);
console.log(`Girilen 2. sayı = ${sayi2}`);
console.log(`Yapılacak işlem = "${operator}"`);

if (result !== undefined) {
  console.log(`Sonuç: ${result}`);
}
//* 6- Eğer kullanıcı geçerli bir işlem operatörü girdiyse, result değişkeni bir değer alır (örneğin, toplama işlemi yapılır ve sonuç hesaplanır).
//* 7- Eğer işlem geçersizse (yani son else bloğuna düşerse), result değişkeni tanımlanmadığı için undefined olur.
//* 8- if (result !== undefined) kontrolüyle, sadece geçerli işlemler için sonucu console.log() ile gösteriyoruz.
