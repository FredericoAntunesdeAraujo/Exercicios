// let comando = process.argv[2];
let comando = "atacar";

switch (comando) {
    case "atacar":
        if (comando === "atacar"){
            console.log("Ataque");
        }
        break;
    case "fugir":
        if (comando === "fugir"){
            console.log("Fugiu");
        }
        break;
    case "defender":
        if (comando === "defender"){
        console.log("Defender")}
        break;
    case "inventario":
        if (comando === "inventario"){
            console.log("Abriu o inventário");
        };
        break;
    default:
        console.log("Comando não existe.");
}