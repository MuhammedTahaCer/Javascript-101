let notbilgisi =prompt("Notunu Gir")
let callback;
let stylish =document.querySelector(".callback")

if (notbilgisi>0 &&  notbilgisi<=100){
    stylish.classList.add('text-primary')
if(notbilgisi >90){ callback="AA"}
if(notbilgisi >80){ callback="BB"}
if(notbilgisi >70){ callback="CC"}
if(notbilgisi >60){ callback="DD"}
if(notbilgisi <60){ callback="EE"}
} else {
    callback="Lütfen 1 ile 100 arası değer girin"
 stylish.classList.remove('text-primary')
 stylish.classList.add( 'text-sec')
}

let info=document.querySelector(".callback")
callback.innerHTML=`${info}`