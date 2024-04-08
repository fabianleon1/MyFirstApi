console.log("Hallooo")



fetch("https://reqres.in/api/users")
.then(data=>data.json())
.then(users=>{

    usuarios=users.data;
    console.log(usuarios)

})