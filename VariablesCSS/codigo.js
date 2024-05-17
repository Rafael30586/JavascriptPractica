let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let tema = 1;
let fuente = 1;

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