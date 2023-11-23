const contenedor = document.getElementById("contenedor");
let elementos = [];
let h1;
let texto;
let tamanio = 13;



function crearElementos(){
    for(let i=0;i<=tamanio;i++){
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
            case 3: elementos[i].style.backgroundColor = "#f4a848"; 
            texto = document.createTextNode("#f4a848");
            //elementos[i].appendChild(texto);
            break;  
            case 4: elementos[i].style.backgroundColor = "#8137a5"; 
            texto = document.createTextNode("#8137a5");
            //elementos[i].appendChild(texto);
            break;      
            case 5: elementos[i].style.backgroundColor = "#8d2437"; 
            texto = document.createTextNode("#8d2437");
            //elementos[i].appendChild(texto);
            break;      
            case 6: elementos[i].style.backgroundColor = "#69dac2"; 
            texto = document.createTextNode("#69dac2");
            //elementos[i].appendChild(texto);
            break;      
            case 7: elementos[i].style.backgroundColor = "#ff1a77"; 
            texto = document.createTextNode("#ff1a77");
            //elementos[i].appendChild(texto);
            break;   
            case 8: elementos[i].style.backgroundColor = "#7c8ace"; 
            texto = document.createTextNode("#7c8ace");
            //elementos[i].appendChild(texto);
            break;   
            case 9: elementos[i].style.backgroundColor = "#053f81"; 
            texto = document.createTextNode("#053f81");
            //elementos[i].appendChild(texto);
            break;   
            case 10: elementos[i].style.backgroundColor = "#81c64b"; 
            texto = document.createTextNode("#81c64b");
            //elementos[i].appendChild(texto);
            break;   
            case 11: elementos[i].style.backgroundColor = "#695375"; 
            texto = document.createTextNode("#695375");
            //elementos[i].appendChild(texto);
            break;   
            case 12: elementos[i].style.backgroundColor = "#011ce3"; 
            texto = document.createTextNode("#011ce3");
            //elementos[i].appendChild(texto);
            break;    
            default: elementos[i].style.backgroundColor = "#586a7b"; 
            texto = document.createTextNode("#586a7b");
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

