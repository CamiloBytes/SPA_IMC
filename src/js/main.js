function obtenerInput() {
    let heidth = document.getElementById("heidth").value
    let weidth = document.getElementById("weidth").value
    const valor = weidth / (heidth * heidth)
    const respuesta=document.getElementById("respuesta")
    respuesta.innerHTML = 'El valor de tu IMC es de: '+valor 
}