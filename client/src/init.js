debugger;

const root = document.getElementById('root');
const element = document.getElementById("allinput");
element.addEventListener("click", myFunction);

function myFunction() {
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


function showUsers(data)
{
    data.forEach(user => {
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
    })

}