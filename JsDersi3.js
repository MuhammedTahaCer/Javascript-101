let sonuncu=document.querySelector("#liste>li:last-child")
sonuncu.innerHTML="Son eklenen yaızm değişti"
let ilk=document.querySelector("#liste>li:first-child")
ilk.innerHTML="İlk eklenen yaızm değişti"

let ulDOM=document.querySelector("#liste")
let liDOM=document.createElement("li")
liDOM.innerHTML="JavaScript ile Eklendim.." //ekleme işlemi: append
ulDOM.append(liDOM)
ulDOM.prepend(liDOM)