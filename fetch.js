console.log("Hallooo");

var div_usuarios=document.querySelector('#usuarios')
var div_janet=document.querySelector('#janet')
 //peticion al servidor

  getUsuarios().then((data) => data.json())
  .then((users) => {
    listadoUsuarios ( users.data);
    return getJanet();

  });

  function getUsuarios(){
    return fetch("https://reqres.in/api/users")
  }
  function getJanet(){
    return fetch("https://reqres.in/api/users?page=2")
  }
function listadoUsuarios(usuarios){

  usuarios.map((user,i)=>{
    let nombre=document.createElement('H2') //creando elemento que queramos
    nombre.innerHTML= i+1 + " "+ user.first_name + " "+ user.last_name;   //concatenamos a la variable el texto que vamos a meter 
    div_usuarios.appendChild(nombre) //añadimos al div cada usuario
    document.querySelector('.loading').style.display='none';
  })
}
function mostrarJanet(usuario){

 
    let nombre=document.createElement('') //creando elemento que queramos
    nombre.innerHTML= i+1 + " "+ user.first_name + " "+ user.last_name;   //concatenamos a la variable el texto que vamos a meter 
    div_janet.appendChild(nombre) //añadimos al div cada usuario
    document.querySelector('.loading').style.display='none';

}