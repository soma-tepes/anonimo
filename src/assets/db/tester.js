const datos = [{
    nombre: "Linea",
    familia: "Mx68"
}, {
    nombre: "Lineab",
    familia: "Mx68"
}
]


const array = []

const input = {
    nombre: "Linea",
    familia: "Mx70"
}
const result = datos.some(data => data.nombre == input.nombre);

const a = 5
const b = 6

if (result){
    console.log(a+b)
}
else{
    console.log("no se puede sumar")
}