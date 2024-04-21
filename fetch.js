console.log("Hallooo");

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
//peticion al servidor

getUsuarios()
  .then((data) => data.json())
  .then((users) => {
    listadoUsuarios(users.data);
    console.log(users.data);
    return getJanet();
  })
  .then((data) => data.json())
  .then((user) => {
    mostrarJanet(user.data);
  });

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}
function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}
function listadoUsuarios(usuarios) {
  usuarios.forEach((user, i) => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    // Crear la imagen de avatar
    let avatar = document.createElement("img");
    avatar.src = user.avatar;
    avatar.classList.add("card-image");
    avatar.width = "30";

    // Crear el contenido de la tarjeta
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Crear el nombre del usuario
    let nombre = document.createElement("h2");
    nombre.innerHTML = i + 1 + " " + user.first_name + " " + user.last_name;

    // Crear el párrafo con el email
    let email = document.createElement("p");
    email.innerHTML = user.email;

    // Agregar elementos al contenido de la tarjeta
    cardContent.appendChild(nombre);
    cardContent.appendChild(email);

    // Agregar la imagen y el contenido de la tarjeta al contenedor de la tarjeta
    cardContainer.appendChild(avatar);
    cardContainer.appendChild(cardContent);

    // Agregar la tarjeta al contenedor principal
    div_usuarios.appendChild(cardContainer);
    document.querySelector(".loading").style.display = "none";
  
  });

}
function mostrarJanet(user) {
  let nombre = document.createElement("h3"); //creando elemento que queramos
  nombre.innerHTML = +" " + user.first_name + " " + user.last_name; //concatenamos a la variable el texto que vamos a meter
  div_janet.appendChild(nombre); //añadimos al div cada usuario
  let avatar = document.createElement("img");
  avatar.src = user.avatar;
  avatar.width = "50";
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = "none";
}
