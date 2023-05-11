let counter =0
let CounterDom=document.querySelector('#counter')
let PlusDom=document.querySelector('#plus')
let ReduceDom=document.querySelector('#reduce')

CounterDom.innerHTML=counter//içerideki değeri olaya bağlıyorum. O da artık let counter içinde saklanıyor
PlusDom.addEventListener("click", function(){
    console.log(this.id) 
})//artık değeri çekebiliyorum

PlusDom.addEventListener("click", plusClicked)
ReduceDom.addEventListener("click", plusClicked)

function plusClicked(){
    console.log(this.id)
    if (this.id=="plus"){
        CounterDom.innerHTML=counter+=1
    } else{
        CounterDom.innerHTML=counter-=1
    }
}

//kısaltıyoruz..

PlusDom.addEventListener("click", plusCheck)
ReduceDom.addEventListener("click", plusCheck)

function plusCheck(){
    console.log(this.id)
    // this.id=="plus" ? CounterDom.innerHTML= counter +=1 : CounterDom.innerHTML= counter-=1
    this.id=="plus" ? c= counter +=1 : c= counter-=1
    CounterDom.innerHTML=c //bunu altta tanımlamak gerekiyor :/
}
