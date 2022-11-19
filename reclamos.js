class Reclamo{ // Define clase reclamos y obtiene las propiedades del objeto
    constructor(nombre,email,telefono,categoria,sector,descripcion){
        //Los datos de usuario son propiedades privadas
        this._nombre = nombre
        this._email = email
        this._telefono = telefono
        this.categoria = categoria
        this.sector = sector
        this.descripcion = descripcion
    };
    //Getter (propiedades privadas)
    get nombre(){
        return this._nombre
    };
    get telefono(){
        return this._telefono
    };
    get email(){
        return this._email
    };
    // Crea objeto "usuario"
    datos_usuario(){
        return {nombre: this.nombre, telefono: this.telefono, email: this.email}

    };
    generar_reclamo(){
        // Crea el objeto datos_reclamo
        let datos_reclamo = {categoria:this.categoria,sector:this.sector,descripcion:this.descripcion}
        // Envia el reclamo al arreglo "reclamos"
        reclamos.push(datos_reclamo) 


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
    // Ejecuta el metodo generar_reclamo
    reclamo.generar_reclamo()
    // Notificación al usuario de envio de datos
    alert("Reclamo enviado exitosamente!")
    // Se cargará otro?
    confirmacion = confirm("Realizar otro reclamo?")
    if(confirmacion){
        // Si decide cargar otro, va a función repeticion
        repeticion()
    }else{
        // Si no muestra los que estan cargados
        presentacion()
    }
}

function repeticion(){ // deshabilita campos de usuario y blanqua los de reclamos
    nombre.setAttribute("disabled","true")
    email.setAttribute("disabled","true")
    telefono.setAttribute("disabled","true")
    sector.value = ""
    categoria.value = ""
    descripcion.value = ""
}

function presentacion(){
    // "usuario" obtine el array de reclamos
    let usuario = reclamo.datos_usuario()
    // Toma el div userdata y muestra los datos de usuario
    document.getElementById("userdata").innerHTML += `
    <a>Nombre: ${usuario.nombre}</a><br>
    <a>Teléfono: ${usuario.telefono}</a><br>
    <a>Email: ${usuario.email}</a>`
    // Para cada reclamo imprime una fila con categoria, sector y descripcion
    for (let i = 0; i < reclamos.length; i++) {
        const element = reclamos[i];
        document.getElementById("tabla_body").innerHTML += `
        <td>${element.categoria}</td>
        <td>${element.sector}</td>
        <td>${element.descripcion}</td>`
    }
    // El formulario queda oculto para dejar espacio a la tabla
    document.getElementById("formulario").setAttribute("hidden","true")
    // La tabla se hace visible
    document.getElementById("tabla").removeAttribute("hidden")
}