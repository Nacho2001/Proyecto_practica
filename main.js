class Reclamo{
    constructor(id,nombre,email,telefono,sector,descripcion,categoria){
        this.nombre = nombre
        this.categoria = categoria
        this.email = email
        this.telefono = telefono
        this.sector = sector
        this.descripcion = descripcion
    }
    datos_usuario(){
        return `Nombre: ${this.nombre} <br>
        Email: ${this.email} <br>
        Telefono: ${this.telefono} <br>`
    }
    reclamo(){
        return `
        Sector: ${this.sector} <br>
        Categoria reclamo: ${this.categoria} <br>
        Reclamo: ${this.descripcion}`
    }
}

let reclamos = []
function principal(){
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    do{
        let sector = document.getElementById("sector").value
        let descripcion = document.getElementById("descripcion").value
        carga_reclamo()
        repeticion()
    }while(confirmacion)
}


function carga_reclamo(){
    let reclamo = new Reclamo(nombre,email,telefono,sector,categoria,descripcion);
    reclamos.push(reclamo)
    alert("Reclamo enviado exitosamente!")
    let confirmacion = confirm("Realizar otro reclamo?")
}

function repetecion(){
    if (confirmacion){
        document.getElementById("nombre").innerHTML = `<input type="text" class="form-control" value=${nombre} disabled>`
        document.getElementById("email").innerHTML = `<input type="text" class="form-control" value=${email} disabled>`
        document.getElementById("telefono").innerHTML = `<input type="text" class="form-control" value=${telefono} disabled>`
        document.getElementById("tipo").innerHTML = `
        <select class="form-select" id="tipo">
            <option value="alumbrado">Alumbrado</option>
            <option value="bacheo">Bacheo</option>
            <option value="r_ramas">Recoleccion de ramas</option>
            <option value="r_residuos">Recoleccion de residuos</option>
            <option value="mantenimiento">Mantenimiento de calles</option>
            <option value="otros">Otros</option>
        </select>`
    }else{
        location.href('muestra_reclamos.html')
    }
}

function vista(){
    document.getElementById(cuerpo).innerHTML += reclamo.datos_usuario();
    for (let i = 0; i < reclamos.length; i++) {
        const element = reclamos[i];
        document.getElementById(cuerpo).innerHTML += `
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
            <div class="card-header">${categoria}</div>
                <div class="card-body">
                <h4 class="card-title">${sector}</h4>
                <p class="card-text">${descripcion}</p>
            </div>
        </div>`
    }
}