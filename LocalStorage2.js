let counter=0
let counter2= localStorage.getItem('counter2')? Number(localStorage.getItem('counter2')):0//stringi numbera çevirdim: hafızadaki değeri defult ettim
let CounterDom=document.querySelector('#counter') 
let PlusDom=document.querySelector('#plus')
let ReduceDom=document.querySelector('#reduce')


CounterDom.innerHTML=counter


PlusDom.addEventListener("click", plusCheck)
ReduceDom.addEventListener("click", plusCheck)

function plusCheck(){//counter konsolda görünmedi, çünkü bu fonk. gelince çalışacak bu sefer
    console.log(this.id)
    this.id=="plus" ? counter +=1 : counter-=1
        localStorage.setItem('counter', counter)
    CounterDom.innerHTML=counter
}

//peki bu bilgiyi almak istiyorusam:
let countInfo=localStorage.getItem('counter') //if exist ile localdeki datayı sorgular:
//şöyle olur:
let countInfo2=localStorage.getItem('counter2') ? counter2+=1: counter2-=1
//şimdi sayfa boş iken default değer verdim...


//şuanda string bir bilgi. Her basıldığında type gör
console.log(typeof(counter2))
