let nivel = process.argv[2];

if (nivel <= 10){
    console.log("Você é iniciante");
} else if(nivel <=30) {
    console.log("Você é intermediário");
} else if ( nivel >= 31){
    console.log("Você é veterano");
} else {
    console.log("Tu é beta");
}