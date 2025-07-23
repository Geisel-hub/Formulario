const clouName = 'dv0gvojyg'
const uploadPreset = 'public_upload'

async function subirArchivo(fileInput){
    const archivo = document.getElementById(fileInput).files[0]
    /*const resultado = document.getElementById(result)

    if(!archivo){
        resultado.textContent = "Selecciona un Archivo PDF."
        return
    }*/

    const url = `https://api.cloudinary.com/v1_1/${clouName}/raw/upload`
    
    const formData = new FormData()
    formData.append('file', archivo)
    formData.append('upload_preset', uploadPreset)

    //resultado.textContent = "⏳ Subiendo tarea..."

    try{
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })

        const data = await response.json()

        if(data.secure_url){
            //resultado.textContent = "✅ Archivo subido con éxito"
            alert("✅ Archivo subido con éxito")
        }else{
            //resultado.textContent = "❌ Error:\n" + JSON.stringify(data, null, 2)
            alert("❌ Error:\n" + JSON.stringify(data, null, 2))
        }
    }catch(error){
        //resultado.textContent = "❌ Error de red:\n" + error.message
        alert("❌ Error de red:\n" + error.message)
    }
}