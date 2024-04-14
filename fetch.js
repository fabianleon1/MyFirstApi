console.log("Hallooo");

var div_usuarios=document.querySelector('#usuarios')

fetch("https://reqres.in/api/users")
  .then((data) => data.json())
  .then((users) => {
    usuarios = users.data;
    console.log(usuarios);

    usuarios.map((user,i)=>{
        let nombre=document.createElement('p')
        nombre.innerHTML= i+1 + " "+ user.first_name + " "+ user.last_name;    
        div_usuarios.appendChild(nombre)
        document.querySelector('.loading').style.display='none';
    })
  });
