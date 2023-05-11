// html den bir etkinliği yakalamak: Document Object Model - DOM

let greeting = document.querySelector("#greeting") //bir id var ise artık bir doma sahibim
greeting.addEventListener("click", whenclick)

function whenclick(){
    console.log("TIKLANDI !!.")
    console.log(this)// konsola tıklanan nesneyi yazıyor
    console.log(this.innerHTML="içerik dğeişti!!")//içini gördüm hatta her tıkladığımda içerği değiştiriyr
    this.style.color=="red" ? this.style.color="black": this.style.color="blue"
    //this ile hangi aşamada tıklandı gibi...
    
}