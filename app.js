// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Debe ingresar un nombre");
        }
    else {
        lista.push(nombre);
        lista.innerHTML= "";
            console.log(lista);
            document.getElementById("amigo").value = "";
        }
        mostrarAmigos();
    }
function mostrarAmigos() {
            listaAmigos.innerHTML= "";
            for (let nombre of lista) {
                document.createElement("li");
                listaAmigos.innerHTML += `<li>${nombre}</li>`;
                }
            }
            if (lista.length != 0) {
                listaAmigos.innerHTML = "Amigos: " + lista.length;
                }
                else {
                    listaAmigos.innerHTML = "No hay amigos en la lista";
                }
    
function sortearAmigo() {
    if (lista.length == 0) {
        alert("No hay amigos en la lista");
        }
        else {
            let AmigoSorteado = lista[Math.floor(Math.random() * lista.length)];
            resultado.innerHTML = "El amigo sorteado es: " + AmigoSorteado;
            console.log(AmigoSorteado);
            console.log(listaAmigos);
        }
    }