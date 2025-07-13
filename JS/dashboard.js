const basicaA = document.getElementById('basicoAvent')
const basicaC = document.getElementById('basicoConqu')
const directorA = document.getElementById('directAvent')
const directorC = document.getElementById('directConqu')

function basicaAvent(){
    basicaA.checked = true
    basicaC.checked = false
    directorA.checked = false
    directorC.checked = false
}

function basicaConqui(){
    basicaA.checked = false
    basicaC.checked = true
    directorA.checked = false
    directorC.checked = false
}

function directorAvent(){
    basicaA.checked = false
    basicaC.checked = false
    directorA.checked = true
    directorC.checked = false
}

function directorConqui(){
    basicaA.checked = false
    basicaC.checked = false
    directorA.checked = false
    directorC.checked = true
}

function desconectar(){
    sessionStorage.setItem("Codigo", null)
    sessionStorage.setItem("Nombre", null)
    window.location.href = "index.html"
}