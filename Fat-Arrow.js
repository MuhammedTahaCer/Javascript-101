
function hello(firstname){
    console.log(`Merhaba $(name)`)
}

hello("Fonksyion JS !!")

// Bunu  affow func dönüştürüyorum

const helloFunc_v1 = (firstname) => {
    console.log(`Merhaba $(name)`)
}
//tek işlem ve tek param için paranteze ihtiyacım yok
const helloFunc_v2 = firstname => console.log(`Merhaba $(name)`)
helloFunc_v2("Arrow Alternatif Fonksiyon")

//konsola yazdır ve return et
const helloFunc_v3 = (name, surname) => {
let myInfo = `Merhaba, ${Muhammed} ${Cer} !!!`
console.log(myInfo)
return myInfo
}

// *** Arrowlar bir func içinde return alınırken genellikle kullanılıyor (map, filter vs)

// ** Bir değişkene bağlamadan da parametreleri yazıp kullanabilirim

// ** 