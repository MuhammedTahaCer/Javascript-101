//local dataya erişim
window.localStorage

// set-get data in storrage
window.localStorage.setItem('theme','dark');
window.localStorage.getItem('theme');

//daha kompleks data yapısı ve dataları getirme
let items=[1,2,3,'hello','myfriend',]

var user ='Muhammed CER'

items.Add(user)
items+=user


localStorage.setItem('LoginData', items)
localStorage.setItem('LoginData', JSON.stringify(items))
JSON.parse(localStorage.getItem('LoginData'))


let keys = Object.keys(localStorage);
for(let key of keys) {
  console.log(`${key}: ${localStorage.getItem(key)}`);
}