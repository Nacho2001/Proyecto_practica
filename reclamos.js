class Reclamo{ // Define clase reclamos y obtiene las propiedades del objeto
    constructor(nombre,email,telefono,categoria,sector,descripcion){
        this._nombre = nombre
        this._email = email
        this._telefono = telefono
        this.categoria = categoria
        this.sector = sector
        this.descripcion = descripcion
    };
    get nombre(){
        return this._nombre
    };
    get telefono(){
        return this._telefono
    };
    get email(){
        return this._email
    };
    datos_usuario(){
        return {nombre: this.nombre, telefono: this.telefono, email: this.email}

    };
    generar_reclamo(){ // Crea un arreglo con los datos del objeto
        let datos_reclamo = {categoria:this.categoria,sector:this.sector,descripcion:this.descripcion}
        reclamos.push(datos_reclamo) // Envia el reclamo al arreglo "reclamos"


    }
}
// Variable de confirmacion (Desea cargar otro reclamo?)
let confirmacion;

// Arreglo vacio de reclamos
let reclamos = []

//Objeto usuario
let usuario;
// Variables que toman valores recolectados del formulario
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let categoria = document.getElementById("categoria");
let sector = document.getElementById("sector");
let descripcion = document.getElementById("descripcion");

//Lleva las variables a la clase
let reclamo = new Reclamo(nombre.value,email.value,telefono.value,categoria.value,sector.value,descripcion.value)

//Funcion accionada por el formulario y obtiene los datos del mismo
function principal(){
    // Ejecuta el metodo añadir_reclamo
    reclamo.generar_reclamo()
    alert("Reclamo enviado exitosamente!")
    confirmacion = confirm("Realizar otro reclamo?")
    if(confirmacion){
        repeticion()
    }else{
        presentacion()
    }
}

function repeticion(){
    nombre.setAttribute("disabled","true")
    email.setAttribute("disabled","true")
    telefono.setAttribute("disabled","true")
    sector.value = ""
    categoria.value = ""
    descripcion.value = ""
}

function presentacion(){
    let usuario = reclamo.datos_usuario()
    document.getElementById("userdata").innerHTML += `
    <a>Nombre: ${usuario.nombre}</a><br>
    <a>Teléfono: ${usuario.telefono}</a><br>
    <a>Email: ${usuario.email}</a>`
    for (let i = 0; i < reclamos.length; i++) {
        const element = reclamos[i];
        document.getElementById("tabla_body").innerHTML += `
        <td>${element.categoria}</td>
        <td>${element.sector}</td>
        <td>${element.descripcion}</td>`
    }
    document.getElementById("formulario").setAttribute("hidden","true")
    document.getElementById("tabla").removeAttribute("hidden")
}