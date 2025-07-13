const scriptURL = "https://script.google.com/macros/s/AKfycbwdvTQ4Hwq6_r9r-Ai0YhYB6uvvlectgVmNugWhLU4rKvfDLmHeXOn21Z0nZ0yHCPBzow/exec"

document.getElementById("formArchivo").addEventListener("submit", async function(e) {
    e.preventDefault()
    
    const file = document.getElementById("archivo").files[0]
    const nombre = document.getElementById("nombreArchivo").value || file.name

    const reader = new FileReader()
    reader.onload = async function() {
        const base64 = reader.result.split(",")[1]

        const formData = new FormData()
        formData.append("archivoBase64", base64)
        formData.append("nombreArchivo", nombre)
        formData.append("tipoMime", file.type)

        const response = await fetch(scriptURL, {
            method: "POST",
            body: formData
        })

        const texto = await response.text()
        document.getElementById("mensaje").textContent = texto
    }

    reader.readAsDataURL(file)
})