import { USER_INPUT_ID } from "../../data/constants.js";
import { showUsers,clearRoot, getuserFunction } from "../components/component.js";

export const myFunction =() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(response.status === 200)
      {
          return response.json();
      }
    })
    .then(data =>  showUsers(data))
    .catch(err =>  console.error(err));
  }

  export const handleClick = () => {
    const user_input = document.getElementById(USER_INPUT_ID).value;
    clearRoot();
    if (user_input == "" ) {
      alert("Please enter something!!");
    } else if(isNaN(user_input)) {
      alert("Please enter a valid User ID");
    } 
    else if(user_input>10){
      alert("User ID doesn't exists!!");
    }else {
      getuserFunction(user_input);
    }
    
  }