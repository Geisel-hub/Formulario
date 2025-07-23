
function basicaAvent(){
    const AventurerosBasica = document.getElementsByName('ADV-Basico')
    for(let i = 0; i < AventurerosBasica.length; i++){
        AventurerosBasica[i].style.display = "flex"
    }

    const ConquistadoresBasica = document.getElementsByName('PAT-Basico')
    for(let i = 0; i < ConquistadoresBasica.length; i++){
        ConquistadoresBasica[i].style.display = "none"
    }

    const AventurerosDirector = document.getElementsByName('ADV-Direct')
    for(let i = 0; i < AventurerosDirector.length; i++){
        AventurerosDirector[i].style.display = "none"
    }

    const ConquistadoresDirector = document.getElementsByName('PAT-Direct')
    for(let i = 0; i < ConquistadoresDirector.length; i++){
        ConquistadoresDirector[i].style.display = "none"
    }
}

function basicaConqui(){
    const AventurerosBasica = document.getElementsByName('ADV-Basico')
    for(let i = 0; i < AventurerosBasica.length; i++){
        AventurerosBasica[i].style.display = "none"
    }

    const ConquistadoresBasica = document.getElementsByName('PAT-Basico')
    for(let i = 0; i < ConquistadoresBasica.length; i++){
        ConquistadoresBasica[i].style.display = "flex"
    }

    const AventurerosDirector = document.getElementsByName('ADV-Direct')
    for(let i = 0; i < AventurerosDirector.length; i++){
        AventurerosDirector[i].style.display = "none"
    }

    const ConquistadoresDirector = document.getElementsByName('PAT-Direct')
    for(let i = 0; i < ConquistadoresDirector.length; i++){
        ConquistadoresDirector[i].style.display = "none"
    }
}

function directorAvent(){
    const AventurerosBasica = document.getElementsByName('ADV-Basico')
    for(let i = 0; i < AventurerosBasica.length; i++){
        AventurerosBasica[i].style.display = "none"
    }

    const ConquistadoresBasica = document.getElementsByName('PAT-Basico')
    for(let i = 0; i < ConquistadoresBasica.length; i++){
        ConquistadoresBasica[i].style.display = "none"
    }

    const AventurerosDirector = document.getElementsByName('ADV-Direct')
    for(let i = 0; i < AventurerosDirector.length; i++){
        AventurerosDirector[i].style.display = "flex"
    }

    const ConquistadoresDirector = document.getElementsByName('PAT-Direct')
    for(let i = 0; i < ConquistadoresDirector.length; i++){
        ConquistadoresDirector[i].style.display = "none"
    }
}

function directorConqui(){
    const AventurerosBasica = document.getElementsByName('ADV-Basico')
    for(let i = 0; i < AventurerosBasica.length; i++){
        AventurerosBasica[i].style.display = "none"
    }

    const ConquistadoresBasica = document.getElementsByName('PAT-Basico')
    for(let i = 0; i < ConquistadoresBasica.length; i++){
        ConquistadoresBasica[i].style.display = "none"
    }

    const AventurerosDirector = document.getElementsByName('ADV-Direct')
    for(let i = 0; i < AventurerosDirector.length; i++){
        AventurerosDirector[i].style.display = "none"
    }

    const ConquistadoresDirector = document.getElementsByName('PAT-Direct')
    for(let i = 0; i < ConquistadoresDirector.length; i++){
        ConquistadoresDirector[i].style.display = "flex"
    }
}

function desconectar(){
    sessionStorage.setItem("Codigo", null)
    sessionStorage.setItem("Nombre", null)
    window.location.href = "index.html"
}

function activarSeminario(taller){
    const clase = document.getElementById(taller)
    clase.style.display = "flex"
}

function desactivarSeminario(taller){
    const clase = document.getElementById(taller)
    clase.style.display = "none"
}