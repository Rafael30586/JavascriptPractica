let patras = document.getElementById("patras");
let palante = document.getElementById("palante");
let tema = 0;

palante.addEventListener('click',()=>{
    if(tema==0){
        document.documentElement.style.setProperty('--zindex1','30');
    }else if(tema==1){
        document.documentElement.style.setProperty('--zindex2','40');
    }else if(tema==2){
        document.documentElement.style.setProperty('--zindex3','50');
    }else if(tema==3){
        document.documentElement.style.setProperty('--zindex4','60');
    } 
    if(tema<4){
        tema++;
    }else{
        tema==0;
    }
})