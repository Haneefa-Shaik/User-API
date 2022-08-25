// debugger;

// import { setImplicitWaitTimeout } from "wd/lib/commands";

// const root = document.getElementById('root');
// const element = document.getElementById("getall_user");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if(response.status === 200)
//     {
//         return response.json();
//     }
//   })
//   .then(data =>  showUsers(data))
//   .catch(err =>  console.error(err));
// }


// function showUsers(data){
//     clearRoot();
//     data.forEach(user => {
//       showUser(user);
//     })
// }

// function showUser(user) {
//         const container = document.createElement('div')
//         container.classList.add('user');

//         const name = document.createElement('h2')
//         name.innerHTML=user.name;

//         const email = document.createElement('p')
//         email.innerHTML=user.email;

//         const phone = document.createElement('p')
//         phone.innerHTML=user.phone;


//         const address = document.createElement('p')
//         address.innerHTML=user.address.city;

//         container.append(name,email,phone, address)
        
//         root.append(container)
// }


// const button = document.getElementById('getuser-by-id');

// button.addEventListener('click', handleClick);

// function handleClick() {
//   const user_input = document.getElementById('number-input').value;
//   clearRoot();
//   if (user_input == "" ) {
//     alert("Please enter something!!");
//   } else if(isNaN(user_input)) {
//     alert("Please enter a valid User ID");
//   } 
//   else if(user_input>10){
//     alert("User ID doesn't exists!!");
//   }else {
//     getuserFunction(user_input);
//   }
  
// }

// function getuserFunction(user_input) {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if(response.status === 200)
//     {
//         return response.json();
//     }
//   })
//   .then(data => {
//     data.forEach(user => {
//       if(user.id == user_input) {
//         showUser(user);
//       } 
//     })
//   })
//   .catch(err =>  console.error(err));
// }

// function clearRoot() {
//     while (root.firstChild) {
//       root.removeChild(root.firstChild);
//     }
// }

import { OUTPUT_BY_ID, GET_ALL_USERS } from "../data/constants.js";
import { clickByIdListener, getAllUsersListener } from "./listeners/listener.js";

clickByIdListener(document.getElementById(OUTPUT_BY_ID));
getAllUsersListener(document.getElementById(GET_ALL_USERS));