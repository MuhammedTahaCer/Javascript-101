//Dom içinden nesne getirme

//https://developer.mozilla.org/en-US/docs/web/api/document/getelementbyid
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let title= document.getElementById('baslik')
// console.log(title.innerHTML='yeni baslik deneme')
title.innerHTML='yeni baslik'
console.log(title.innerHTML)//titile değişkenim değişti ama ekrana yansıtmadım

let mylink=document.querySelector("#liste")
// let mylink=document.querySelector("ul>li>a")
mylink.innerHTML += ' güncellenememiştir'
mylink.style.color="red"//fontsize felan eklenemiyor, intellisense çalışmıyor
link.classlist.add('jsClassEkledi')
