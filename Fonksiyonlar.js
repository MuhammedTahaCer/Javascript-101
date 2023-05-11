//Önemli olan bir fonksiyon tek bir göreve hizmet etmesidir.

function hello(){//() -> parametre göderip göndermeyeceğini belirliyorum
    console.log("Merhaba")
}

function ehliyet(){
    if(username && age > 18){callback.innerHTML="True"}
else if(!username){callback.innerHTML="Kullanıcı Adı Girin!"}
else if(!age>18){callback.innerHTML="Yaş Bilgisi yok"}
else if(age<18){callback.innerHTML="Yaş Küçük"}

}

//===Parametreler ve Return Alma====

let username ="Deneme" //Fonksiyonun Deneme'ye bağımlı. Fonk. dışarıya bağımlılığını azaltmam Gerekir.

function selamlama(username=""){//default parametre verebilriim.
    // console.log(`Merhaba ${username ? username:""}`)
    console.log(`Merhaba ${username}`)
}


selamlama("Apple")// Artık değere girersem Otomatik eşitliyor

console.log(username)//değişken
selamlama()//fonl parametre göndermedik - hali

function selamlama2(username, lastname){
    let info=`Merhaba ${username} ${lastname}` // Ad soyad bilgisi dışarıya veriyor_?
    return info
}

selamlama("parametrem")


selamlama2("Ad Bilgisi", "Soyad Bilgisi") // bu atamalar gelmiyor ?

let info =selamlama2("Ad Bilgisi", "Soyad Bilgisi") // diyerek info içine aktarmış oldum ama undefined uyarısı vermekte. Çünkü func içindeki bilgiyi dışarıdan tanımalmaya çalışıyorum. Bu değişken görevi görüyor

let selamlamainfo=selamlama2("Muhammed", "Cer")
console.log(selamlamainfo) //şimdi oldu


//Bu fonc verdiğim id bulsun ve ekrana yazsın

function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info //direk olarak içine değeri yazıyor
}

domIdWriteInfo('baslik', selamlama2("Ad" ,"Soyad")) //return aldığım için artık parametre gönderebilirim direk (selamla2 gibi). Ekranda idsi baslik olan yere Merhaba Ad Soyad yazacak


//örnek iki

let htmlinfo =`<span style="color:red">Meraha, Renk Seçtiniz: Kırımızı!</span>`
domIdWriteInfo('baslik' , htmlinfo) // *** bir fonc. birden fazla parametre alabilir, return edebilir veya etmez.
    