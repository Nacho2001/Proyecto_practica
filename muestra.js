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