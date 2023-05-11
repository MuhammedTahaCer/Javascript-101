// Object Oluşturmak

let arrayObj=[1,2,3]
let objectnew={my_Obj: 1}

console.log("Nesnem:" , typeof(arrayObj))
console.log("Yenisi...", typeof(objectnew))


let item={}
let itemnew=new Object()
console.log("İlk nesnem: ",objectnew) //Tıpkı liste gibi içine ulaşabiliyorum



//Key - Value ilişkisi

let laptop={
    brand:"Hp" ,//brand benim key adım
    Model:"Pavillion",
    modelno:13,
}

console.log(laptop.brand, laptop["brand"]) //iki şekilde de çağırabilirisn. Not: eğer value null ise çift tırnak içinde yaz... ["brand"]
console.log(laptop)


//Keye yeni Value vermek
laptop.brand="Macbook"
laptop["brand"]="Hp" // logdaki gibi ,benzer şekilde kullanılabilir.

laptop.versiyon="M.2"//yeni key berdim objeye
console.log(laptop)

//key value ulaşmak:
mykeys=Object.keys(laptop)
console.log(mykeys)
console.log(Object.keys(laptop))

//mesela tüm laptopların bilgilerini getirme...
mykeys.forEach(e => {
    console.log(e)
    console.log(laptop[e]) // element, burada key'lere denk geliyor. //e yi düz paranteze yazmak laptopu bir  fonksiyon olarak algılatır...
     
});

//value bilgisi çekmek
console.log(
    Object.values(laptop)//bu value ulaşmamı sağlıyorsa...
)
//değişken = log
let laptopvalues=  Object.values(laptop)
//ekrana yazdır
laptopvalues.forEach(laptopvalues => {
    console.log("value of laptop: ", laptopvalues)
});



// objelere method(lar) ekleme. fonksiyonel işler yapabilmek için

laptop.Brandfullname=function() {return `${this.brand} ${this.Model}`}

//consolda bu şekilde çağırdığım zaman artık bunun bir fonk. olduğunu görebilirim.

laptop.Brandfullname() //şeklinde bilgiye ulaşabilirim.

