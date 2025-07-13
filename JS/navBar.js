const Nombre = sessionStorage.getItem("Nombre")
const Codigo = sessionStorage.getItem("Codigo")
if(Nombre){
    document.getElementById("user").innerHTML = Nombre
    
    const hojaURL = "https://opensheet.elk.sh/1NlhcKqmAIVO1nAoYasLk8OoRLe7DUvvJ0V77Wlj4frc/Certificados"

    fetch(hojaURL)
    .then(res => res.json())
    .then(data => {
        const registro = data.filter(row => row.Usuario === Codigo)

        const lista = document.getElementById("listaNav")

        if(registro.length === 0){
            lista.innerHTML = "<li>No hay datos disponibles</li>"
        }else{
            registro.forEach(row => {
                const li = document.createElement("li")
                li.innerHTML = `<a href="#" onclick="${row.CodeJS}">
                                <img src="IMG/Icons/${row.Imagen}" class="icon">
                                <label for="" class="nav-item">${row.Nombre}</label>
                                </a>`
                lista.appendChild(li)
            })
        }
    }).catch(error => {
        console.error("Error al Cargar datos: ", error)
        const lista = document.getElementById("listaNav")
        lista.innerHTML = "<li>Error al Conectar los datos.</li>"
    })
}else{
    window.location.href = "login.html"
}