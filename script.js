const formulario = document.querySelector("#formulario");

formulario.addEventListener( "submit", validarFormulario )

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const producto = document.querySelector("#producto").value
    const marca = document.querySelector("#marca").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre}! agregaste un/una ${producto} con la marca de ${marca}`
}

