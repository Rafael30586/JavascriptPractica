let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let tema = 1;
let fuente = 1;
let fuenteTipo = 1;

//window.getComputedStyle(document.documentElement)
//.getPropertyValue('--color4');

//console.log(window.getComputedStyle(document.documentElement)
//.getPropertyValue('--color4'));

boton1.addEventListener('click',()=>{
    if(tema==1){
        document.documentElement.style.setProperty('--color4','#6355ec')
    }else if(tema==2){
        document.documentElement.style.setProperty('--color4','#ea2fff')
    }else if(tema==3){
        document.documentElement.style.setProperty('--color4','#74c35a')
    }else if(tema==4){
        document.documentElement.style.setProperty('--color4','#5a2e24')
    }else if(tema==5){
        document.documentElement.style.setProperty('--color4','#8549bb')
    }else if(tema==6){
        document.documentElement.style.setProperty('--color4','#9b0b25')
    }
    if(tema<6){
        tema++;
    }else{
        tema=1;
    }
    
});

boton2.addEventListener('click',()=>{
    if(fuente==1){
        document.documentElement.style.setProperty('--color5','#fafb64')
    }else if(fuente==2){
        document.documentElement.style.setProperty('--color5','#00c6ff')
    }else if(fuente==3){
        document.documentElement.style.setProperty('--color5','#c74334')
    }else if(fuente==4){
        document.documentElement.style.setProperty('--color5','#ff8139')
    }else if(fuente==5){
        document.documentElement.style.setProperty('--color5','#06039c')
    }else if(fuente==6){
        document.documentElement.style.setProperty('--color5','#dbad4f')
    }
    if(fuente<6){
        fuente++;
    }else{
        fuente=1;
    }
    
});

boton3.addEventListener('click',()=>{
    if(fuenteTipo==1){
        document.documentElement.style.setProperty('--tamanio-fuente','10px')
    }else if(fuenteTipo==2){
        document.documentElement.style.setProperty('--tamanio-fuente','15px')
    }else if(fuenteTipo==3){
        document.documentElement.style.setProperty('--tamanio-fuente','30px')
    }else if(fuenteTipo==4){
        document.documentElement.style.setProperty('--tamanio-fuente','50px')
    }else if(fuenteTipo==5){
        document.documentElement.style.setProperty('--tamanio-fuente','35px')
    }else if(fuenteTipo==6){
        document.documentElement.style.setProperty('--tamanio-fuente','5px')
    }
    if(fuenteTipo<6){
        fuenteTipo++;
    }else{
        fuenteTipo=1;
    }
    
});