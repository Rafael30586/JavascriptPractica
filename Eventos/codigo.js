const caja1 = document.getElementById("caja1")
const formulario = document.getElementById("formulario")
let formData = new FormData(formulario)

document.addEventListener("DOMContentLoaded", ()=>{ // El evento es la carga de los elementos del DOM
    console.log("El DOM está completamente cargado")
})

caja1.addEventListener("mouseenter",()=>{
    caja1.classList.toggle("cupids_eye")
})

caja1.addEventListener("mouseleave",()=>{
    caja1.classList.toggle("borde")
})

formulario.addEventListener("submit",(event)=>{ 
    event.preventDefault()
    alert(`Formulario enviado`)
    console.log(event)
    console.log(formData)
})





