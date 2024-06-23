boton = document.getElementById("boton");


document.addEventListener('keydown', e =>{
    console.log(e);
    console.log(e.code);
    console.log(e.key);
    /*
    switch(e.code){
        case "KeyR": boton.setAttribute("color","rojo");break;
        case "KeyA": boton.setAttribute("color","azul");break;
        case "KeyP": boton.setAttribute("color","rosa");break;
        case "KeyV": boton.setAttribute("color","verde");break;           
    }*/
    if(e.code=="KeyR"){
        boton.setAttribute("color","rojo");
    }else if(e.code=="KeyA"){
        boton.setAttribute("color","azul");
    }else if(e.code=="KeyP"){
        boton.setAttribute("color","rosa");
    }else if(e.code=="KeyV"){
        boton.setAttribute("color","verde");
    }
})

