let nombre = (prompt("Por favor, digite su nombre")); 
let numeroIdentificacion = (prompt("Por favor, digite su numero de identificacion"));
let email = prompt("Por favor, digite su correo electronico") 
//NO ES LA FORMA ADECUADA DE USAR SWITCH CASE 
switch (false) {
    case email.includes("@"):
        console.log(nombre,"su correo no cumple con los requisitos establecidos por ende no es valido");
        break;
    //SINTAXIS INVALIDA
    case numeroIdentificacion:length=>(5)
        console.log(nombre,"su numero de identificacion no cumple con los requisitos establecidos por ende no es valido");
        break;
    //ESTA COMPARACION NO ES VALIDA PARA DECIR QUE LOS DATOS SON INCORRECTOS
    case email.includes("@") && numeroIdentificacion:length=>(5);
        console.log(nombre,"ni su correo, ni su numero de identificacion cumplen con los requisitos establecidos por ende no son validos");
        break;
    default: 
        console.log("Su correo electronico",email,"y su numero de identificacion,",numeroIdentificacion,"son validos");
        break;
}

nota: 1,56