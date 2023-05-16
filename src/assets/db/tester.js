const datos =[{
    nombre: "Linea",
    familia: "Mx68"
}]


const array = []

const input = {
    nombre: "Orden",
    familia:"Mx70"
}

const result = datos.filter(data=>data.nombre == input.nombre)

console.log(result)
