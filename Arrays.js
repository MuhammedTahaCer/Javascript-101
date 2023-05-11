//listeler
let content_1 ="content_1"
let content_2 = false
let mylist =[1,2,3, content_1, content_2]
let lst0 =[content_1, 4,5,6,  content_2]
let list1 =[0, content_1, 7,8,9,  content_2]

let emptylist=[]

console.log (mylist[mylist.length-1 ])


let popped=mylist.pop([mylist.lenght-1][1])




//Sona öge veya eleman eklemek -> push

//başa eklemek ->unshift

//sondakini çıkarmak -> pop

// baştakini çıkarmak -> shift

// Listeden öge veya eleman ayırmak -> splice
mylist.splice(2,3)//index 2'den itibaren 3 ögeyi aldım

// Bir ögenin index bilgisini bulmak, istenen indexe öge eklemek (indexOf), liste birleştirmek

//Liste kopyalamak
    /* 
    var copied=lastlist.slice

    copied.pop(copied.length-1)

    copied.pop((copied.length)-1)
    copied
    // ƒ slice() { [native code] }
    copied
    // ƒ slice() { [native code] }
    var copied=lastlist.slice()

    copied.pop(copied.length-1)

    copied.push('newValue1')

    copied.push('newValue2')

    copied.push('newValue3')

    copied
    // (8) [0, 'content_1', 7, 8, 9, 'newValue1', 'newValue2', 'newValue3']
    lastlist
    // (6) [0, 'content_1', 7, 8, 9, false] 
    */

//Liste ile Dögüler

const CreateList=document.querySelector('#liste')//dom oluşturdum

for(i=0;i<mylist.length;i++){
    const addLi=document.createElement('li')
    addLi.innerHTML=mylist[i]
    CreateList.append(addLi)
}

for(i=0;i<mylist.length;i++){
    if(mylist[i]=3) {continue} //{break}
    const addLi=document.createElement('li')
    addLi.innerHTML=mylist[i]
    CreateList.append(addLi)
}