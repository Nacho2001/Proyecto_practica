let categoria;
function def_alumbrado(){
categoria = "alumbrado"
}
function def_bacheo(){
categoria = "bacheo"
}
function def_r_ramas(){
categoria = "r_ramas"
}
function def_r_residuos(){
categoria = "r_residuos"
}
function def_mantenimiento(){
categoria = "mantenimiento"
}
function def_otro(){
categoria = "otro"
}

class Reclamo{
    constructor(nombre,email,telefono,sector,categoria,descripcion){
        this.nombre = nombre
        this.categoria = categoria
        this.email = email
        this.telefono = telefono
        this.sector = sector
        this.descripcion = descripcion
    }
    datos_usuario(){
        return `
        <div style="margin-top: 2%; margin-left: 2%">
            Nombre: ${this.nombre} <br>
            Email: ${this.email} <br>
            Telefono: ${this.telefono} <br>
        <div>`
    }
    reclamo(){
        return `
        Sector: ${this.sector} <br>
        Categoria reclamo: ${this.categoria} <br>
        Reclamo: ${this.descripcion}`
    }
}

var confirmacion;

var reclamos = []
let nombre;
let email;
let telefono;
let sector;
let descripcion;

function principal(){
    nombre = document.getElementById("nombre").value
    email = document.getElementById("email").value
    telefono = document.getElementById("telefono").value
    sector = document.getElementById("sector").value
    descripcion = document.getElementById("descripcion").value
    console.log(categoria)
    carga_reclamo()
}

var reclamo;
function carga_reclamo(){
    reclamo = new Reclamo(nombre,email,telefono,sector,categoria,descripcion);
    reclamos.push(reclamo)
    alert("Reclamo enviado exitosamente!")
    confirmacion = confirm("Realizar otro reclamo?")
    if(confirmacion){
        repeticion()
    }else{
        location.assign('muestra_reclamos.html')
        reclamos.forEach(element => {
            console.log(element)
        });
    }
}

function repeticion(){
    if (confirmacion){
        document.getElementById("nombre").setAttribute("disabled","true")
        document.getElementById("email").setAttribute("disabled","true")
        document.getElementById("telefono").setAttribute("disabled","true")
        document.getElementById("sector").value = ""
        document.getElementById("descripcion").value = ""
        document.getElementById("tipo").removeAttribute("disabled")
    }else{
        location.assign('muestra_reclamos.html')
    }
}


function vista(){
    //reclamo = new Reclamo("name","email@e.es","555","la paz","bacheo","caida");
    //reclamos.push(reclamo)
    document.getElementById("cuerpo").innerHTML += reclamos[0].datos_usuario();
    for (let i = 0; i < reclamos.length; i++) {
        const element = reclamos[i];
        document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${element.sector}</td>
            <td>${element.categoria}</td>
            <td>${element.descripcion}</td>
        </tr>`
    }
}

