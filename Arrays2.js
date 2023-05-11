const product=["","P2",,"P3","P4","NP5","P001","P002","P003"]


product.forEach(product=>console.log(product))
product.forEach((product,index)=>console.log(product,index))
product.forEach((productname,index,array) => console.log(array[2]))

product.forEach((product,index,array)=> console.log(array[index]= product[0]=`NewValue`)) //değer atadım 0. indexe.


//Dom ile htmlye yazdırma

const myyListDom=document.querySelector('#ArraysList')
product.forEach( arrayinfo => {
    const createLi=document.createElement('li')
    createLi.innerHTML=arrayinfo
    myyListDom.append(createLi)
    
})//foreach array için kullanılırken for ile yapılan döngüyü değişken bağımsız döndürdüm. // Array.js


//map işlevi:

const mappingthisList=product.map(i=>i.includes("P",1),index=>index)
// console.log(mappingthisList)

const mappingReturns=product.map(index=>index,
    data =>{ return {
    
        productname:data , indexes: `${product[index]}.`, Info: `${data[0]} product is: ${productname}`
        }
    }
)
console.log(mappingReturns)
