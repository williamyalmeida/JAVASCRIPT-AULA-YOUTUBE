

var tipoUsuario = "qualquer cargo";
switch(tipoUsuario){
    case "Admin":
        console.log(`Bem-vindo Admin`);
        break;
    case "Gerente":
        console.log(`Bem-vindo Gerente`);
        break;
    case "Secretário":
        console.log(`Bem-vindo Secretário`);
        break;
    default:
        console.log(`Não foi Identificado!`);   
}