let boton = document.getElementById("boton");
let tema = 0;

boton.addEventListener('click',()=>{

    if(tema==0){
        document.documentElement.style.setProperty('--color-ventana-exterior','#570007');
        document.documentElement.style.setProperty('--color-ventana-interior','#FF0A1F');
        document.documentElement.style.setProperty('--color1','#FFCCD0');
        document.documentElement.style.setProperty('--color2','#FF858F');
    }else if(tema==1){
        document.documentElement.style.setProperty('--color-ventana-exterior','#021400');
        document.documentElement.style.setProperty('--color-ventana-interior','#58FF42');
        document.documentElement.style.setProperty('--color1','#D2FFCC');
        document.documentElement.style.setProperty('--color2','#6FFF5C');
    }else if(tema==2){
        document.documentElement.style.setProperty('--color-ventana-exterior','#272900');
        document.documentElement.style.setProperty('--color-ventana-interior','#F9FF42');
        document.documentElement.style.setProperty('--color1','#FDFFB8');
        document.documentElement.style.setProperty('--color2','#FAFF5C');
    }else if(tema==3){
        document.documentElement.style.setProperty('--color-ventana-exterior','#00031F');
        document.documentElement.style.setProperty('--color-ventana-interior','#000FB8');
        document.documentElement.style.setProperty('--color1','#D6DAFF');
        document.documentElement.style.setProperty('--color2','#6673FF');
    }else if(tema==4){
        document.documentElement.style.setProperty('--color-ventana-exterior','#570007');
        document.documentElement.style.setProperty('--color-ventana-interior','#FF0A1F');
        document.documentElement.style.setProperty('--color1','#FFCCD0');
        document.documentElement.style.setProperty('--color2','#FF858F');
    }else if(tema==5){
        document.documentElement.style.setProperty('--color-ventana-exterior','#570007');
        document.documentElement.style.setProperty('--color-ventana-interior','#FF0A1F');
        document.documentElement.style.setProperty('--color1','#FFCCD0');
        document.documentElement.style.setProperty('--color2','#FF858F');
    }
    if(tema<4){
        tema++;
    }else{
        tema=0;
    }

});