console.log("Hallooo Janet");





var boton=document.querySelector("#info")

boton.addEventListener('click', function(){
  

var id=document.getElementById("ingresaid").value;

  if(id==NaN){
    console.log("Error")
  }
  else{
    console.log(id);
    var div_janet = document.querySelector("#janet");
    getJanet()
    .then((data) => data.json())
    .then((user) => {
      mostrarJanet(user.data);
    });
  
  function getJanet() {
    return fetch("https://reqres.in/api/users/" + id);
  }
  
  
  function mostrarJanet(user) {
    let nombre = document.createElement("h3"); //creando elemento que queramos
    nombre.innerHTML = +" " + user.first_name + " " + user.last_name; //concatenamos a la variable el texto que vamos a meter
    div_janet.appendChild(nombre); //añadimos al div cada usuario
    document.querySelector("#janet .loading").style.display = 'none';
  }
  
  }

})
//peticion al servidor
