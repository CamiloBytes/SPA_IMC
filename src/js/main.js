function obtenerInput() {
    const heidth = document.getElementById("height").value
    const weidth = document.getElementById("weight").value
    let imc = weidth / (heidth * heidth)
    let valor= imc.toFixed(2)
    let respuesta=document.getElementById("respuesta")
    respuesta.innerHTML = "El resultado de su IMC es: "+valor
}