let clases;

hifirush = document.getElementById("hifi-rush");
plataforma = document.createElement("span");
xbox = document.createTextNode("Xbox series S/X");
nintendo = document.createTextNode("Nintendo Switch");
playstation = document.createTextNode("Playstation 5");
pc = document.createTextNode("PC");

a = hifirush.className;
console.log(a);

function asignarPlataformas(elemento){

    clases = elemento.className;

    if(elemento.className==="xb"){ //asi no va a servir

    }else if(elemento.className==="nt"){

    }else if(elemento.className==="pc"){

    }else if(elemento.className==="ps"){

    }

}