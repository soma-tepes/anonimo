
let etiqueta =
 "O013C030-59160        R-Pb        US180         EA 430017611400030          14 OF 21            310123300123"
let data = etiqueta.split(" ")
console.log(data)

let datos = {}

for(let i =0 ; i<data.length; i++){
  if(data[i]!= ""){
    datos[i] = data[i]
  }
}

console.log(datos)