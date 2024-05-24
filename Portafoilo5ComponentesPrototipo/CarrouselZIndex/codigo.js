let patras = document.getElementById("patras");
let palante = document.getElementById("palante");
let tema = 0;


palante.addEventListener('click',()=>{
    if(tema==0){
        document.documentElement.style.setProperty('--zindex1','30');
        document.documentElement.style.setProperty('--zindex2','60');
        document.documentElement.style.setProperty('--zindex3','50');
        document.documentElement.style.setProperty('--zindex4','40');
    }else if(tema==1){
        document.documentElement.style.setProperty('--zindex1','30');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','60');
        document.documentElement.style.setProperty('--zindex4','50');  
    }else if(tema==2){
        document.documentElement.style.setProperty('--zindex1','30');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','50');
        document.documentElement.style.setProperty('--zindex4','60'); 
    }else if(tema==3){
        document.documentElement.style.setProperty('--zindex1','60');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','50');
        document.documentElement.style.setProperty('--zindex4','30');
    } 
    if(tema<3){
        tema++;
    }else{
        tema=0;
    }
})

patras.addEventListener('click',()=>{
    if(tema==0){
        document.documentElement.style.setProperty('--zindex1','30');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','50');
        document.documentElement.style.setProperty('--zindex4','60');
    }else if(tema==1){
        document.documentElement.style.setProperty('--zindex1','60');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','30');
        document.documentElement.style.setProperty('--zindex4','50');  
    }else if(tema==2){
        document.documentElement.style.setProperty('--zindex1','30');
        document.documentElement.style.setProperty('--zindex2','60');
        document.documentElement.style.setProperty('--zindex3','50');
        document.documentElement.style.setProperty('--zindex4','40'); 
    }else if(tema==3){
        document.documentElement.style.setProperty('--zindex1','50');
        document.documentElement.style.setProperty('--zindex2','40');
        document.documentElement.style.setProperty('--zindex3','60');
        document.documentElement.style.setProperty('--zindex4','30');
    } 
    if(tema>0){
        tema--;
    }else{
        tema=3;
    }
})