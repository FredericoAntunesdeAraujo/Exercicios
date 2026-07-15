const linkFotoNovo = document.querySelector("#foto"); 
const linkNovo = document.querySelector("#link");
const campoNovo = document.querySelector("#campo");

linkFotoNovo.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuguO5jksz68kFz0Jb4PBJlAVEw9yxNCP6edyOkwoRQw&s=10")
linkNovo.setAttribute("link", "https://github.com/FredericoAntunesdeAraujo");
linkNovo.textContent = "Meu GitHub";

campoNovo.setAttribute("disabled", " ");

console.log(linkFotoNovo.getAttribute("src"));