const contenedor = document.getElementById("contenedor");
let elementos = [];
let h1;
let texto;
let tamanio = 12;



function crearElementos(){
    for(let i=0;i<tamanio;i++){
        h1 = document.createElement("h1");
        elementos.push(h1);
        
        elementos[i].setAttribute("id",`elemento${i}`);
        elementos[i].setAttribute("class","bloque");

        switch(i){
            case 0: elementos[i].style.backgroundColor = "#1abd44";
            texto = document.createTextNode("#1abd44");
            //elementos[i].appendChild(texto);
            break;
            case 1: elementos[i].style.backgroundColor = "#a6a714";
            texto = document.createTextNode("#a6a714");
            //elementos[i].appendChild(texto);
            break;
            case 2: elementos[i].style.backgroundColor = "#189bc9"; 
            texto = document.createTextNode("#189bc9");
            //elementos[i].appendChild(texto);
            break;      
        }
        elementos[i].appendChild(texto);
    }
}

function insertarElementos(){
    for(let i=0;i<tamanio;i++){
        contenedor.appendChild(elementos[i]);
    }
}

crearElementos();
insertarElementos();

console.log(elementos);

