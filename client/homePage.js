// function helloUser(){
//     const currentUrl = window.location.href;
//     console.log(currentUrl);

//     let userName = localStorage.getItem(userName)
//     const body = document.getElementsByTagName("body")
//     const h1 = document.createElement('h1')
//     h1.innerHTML = userName
//     body[0].append(h1)

//     document.getElementById('greeting').innerHTML = 'Hello' + userName
// }

let userName = localStorage.getItem('userName')
const body = document.getElementsByTagName("body")
const h1 = document.createElement('h1')
h1.textContent = "Hello " + userName
body[0].append(h1)
// document.getElementById('greeting').innerHTML = 'Hello ' + userName