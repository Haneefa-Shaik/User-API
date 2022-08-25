

export const showUsers = (data) => {
    clearRoot();
    data.forEach(user => {
      showUser(user);
    })
}

export const showUser = (user)=>{
        const container = document.createElement('div')
        container.classList.add('user');

        const name = document.createElement('h2')
        name.innerHTML=user.name;

        const email = document.createElement('p')
        email.innerHTML=user.email;

        const phone = document.createElement('p')
        phone.innerHTML=user.phone;


        const address = document.createElement('p')
        address.innerHTML=user.address.city;

        container.append(name,email,phone, address)
        
        root.append(container)
}

export const getuserFunction = (user_input) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(response.status === 200)
      {
          return response.json();
      }
    })
    .then(data => {
      data.forEach(user => {
        if(user.id == user_input) {
          showUser(user);
        } 
      })
    })
    .catch(err =>  console.error(err));
  }
  

export const clearRoot = () => {
    const root = document.getElementById('root');
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }
}
