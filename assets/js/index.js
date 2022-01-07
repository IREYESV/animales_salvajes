import {Leon, Lobo, Oso, Serpiente, Aguila} from './animales.js'

$("#btnRegistrar").on("click", function () {
    console.log("hola")
    const animal = $("#animal").val();
    const edad =$("#edad").val();
    const animal = $("#comentarios").val().trim
   
    const errores = [];
    
    if (animal == "") {
        errores.push("selecciona un animal")
}
    if (edad == "") {
        errores.push("selecciona un rango de edad")
}
    if (comentario == "") {
        errores.push("selecciona un comentario")
}
    let nuevoanimal;
    
    if (animal == "leon") {
        nuevoanimal =nuevoleon(animal,edad,comentarios)
    } else if (animal == "lobo") {
        nuevoanimal =nuevolobo(animal,edad,comentarios) 
    }
    
    
})









//<div class="card" style="margin-right: 20px; width: 200px; margin-left: 20px;">
//const modalElem = document.getElementById("exampleModal")const modal = $("#exampleModal").modal();
