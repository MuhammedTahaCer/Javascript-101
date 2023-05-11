//İlk Defa form submit Öğreniyorum

let myformDom = document.querySelector("#userForm")
myformDom.addEventListener('submit', myFormSubmit)

function myFormSubmit(event){
    event.preventDefault() //manuel göndermek için
    console.log("İşlem gerçekleştir") //henüz gönderemiyor. Event lazım

    //validi almak istiyorum
    let takeValid=documentquerySelector('#scrorePut')
    console.log(takeValid.value)
}


// ****Form Çalışması*****

//formu tanımlıyorum
let myuserform=document.querySelector('#userForm')

//submiti tanımlıyorum
myuserform.addEventListener('submit', UserSubmit)

//alerti tanımlıyorum
const createAlert = document.querySelector('.alert')
const myAlertWarning= 
`
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Hata!</strong> Değer Girmedin... <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const myAlertSuccess= 
`
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Başarılı</strong> Değer Gönderildi :) <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function UserSubmit(event){
    event.preventDefault()//form işlemini default engelledim.
    //myAddData(takeName.value, takeScore.value) // 1. İşlem sonu
    // myAddStylishData(takeName.value, takeScore.value) // 2. İşlem sonu
    myControFunc()//3. İşlem: artık sadece fonk ile bilgi alıp kontrol ediyorum
}

//listemi tanımlıyorum
let myList=document.querySelector('#myList')

//1. İşlem :tabloya ekleme işlemi
const myAddData=(a,b)=>{//a ve b username ile scroe temsil
    let createLi=document.createElement('li')
    createLi.innerHTML=`${a} ${b}`
    myList.appendChild(createLi)
} //addMyData yapısını fonkisyona ekleyebilirim artık.


//2. İşlem: constu style sahibi olacak şekilde revize ediyorum
const myAddStylishData=(a,b)=>{
    let createLi=document.createElement('li')
    createLi.innerHTML=` ${a} <span class="badge bg-primary rounded-pill">
                        ${b} </span>`
    createLi.classList.add('list-group-item', 'd-flex', 'justify-content-center', 'align-items-center')
    myList.append(createLi)

}

//Değer girişini kontrol etsin:
function myControFunc(){
    const takeName=document.querySelector('#username')//birinci bilgiyi aldım
    const takeScore=document.querySelector('#scorePut')//ikinci bilgiyi aldım
    
    if(takeName.value && takeScore.value){
        myAddStylishData(takeName.value, takeScore.value)
        takeName.value="", takeScore.value=""
    // Herşey yolundaysa allert danger warning değil success olsun
    createAlert.innerHTML= myAlertSuccess
    }else{
        // console.log('Hatalı Giriş..!')
        createAlert.innerHTML=myAlertWarning
    }
}


//----- Alerti Fonksiyon haline getirip değer atama ----

const SpecialAllert=(title, message, alertyping)=>{
    `
<div class="alert alert-${alertyping} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
}

function sendSpecialAllert(){
    const takeName=document.querySelector('#username')//birinci bilgiyi aldım
    const takeScore=document.querySelector('#scorePut')//ikinci bilgiyi aldım
    
    if(takeName.value && takeScore.value){
        myAddStylishData(takeName.value, takeScore.value)
        takeName.value="", takeScore.value=""
        createAlert.innerHTML=SpecialAllert(
            "Başarılı!",
            "Değerler Eklendi",
            "success"
        )
    }else{
        // console.log('Hatalı Giriş..!')
        createAlert.innerHTML=SpecialAllert(
            "Hata!",
            "Eksik Değer Girildi",
            "danger"
        )
    }
}
