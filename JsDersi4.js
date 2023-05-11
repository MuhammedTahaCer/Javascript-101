let username=prompt("Adınız")
let age=prompt("Yas")
let callback=document.querySelector(".kosulluDeger")

if(username && age > 18){callback.innerHTML="True"}
else if(!username){callback.innerHTML="Kullanıcı Adı Girin!"}
// callback.innerHTML=`$(username ? username : "Kullanıcı Adı Yok...")`
else if(!age>18){callback.innerHTML="Yaş Bilgisi yok"}
else if(age<18){callback.innerHTML="Yaş Küçük"}
