'use strict'

let etiqueta ="O013C030-59160        R-Pb        US180         EA 430017611400030          14 OF 21            310123300123"
let input =  `O001X0221590MX65B04C0017988               R-Pb        MX120      102173452300010          230323-015`
let terminado = `O001X0229126MX65B04C0018455               R-Pb        MX46       101990726800010          070322-014`


let basedata = [
  {
    "3/2/23": "Material Master (Box size/Tijuana Plant only)"
  },
  {
    "__EMPTY_Plant": "Plnt",
    "__EMPTY_*": "Matl Group",
    "__EMPTY_**": "MTyp",
    "__EMPTY_Desprtion": "Material Description",
    "__EMPTY_Material": "Material",
    "__EMPTY_***": "Drawing No.",
    "__EMPTY_****": "Uni-Med",
    "__EMPTY_QTY": "Qty por Caja",
    "__EMPTY_QTYP": "Qty por Bolsa",
 
    "__EMPTY_*****": "Unit"
  
  },
  {
    "__EMPTY": "ORC1",
    "__EMPTY_1": "C200",
    "__EMPTY_2": "JA10",
    "__EMPTY_3": "MX65B04C0023721",
    "__EMPTY_4": 313453,
    "__EMPTY_6": "EA",
    "__EMPTY_7": 0,
    "__EMPTY_11": "Parts (Mass Prod.)"
  },
  {
    // [3] 
    "__EMPTY": "ORC1",
    "__EMPTY_1": "C200",
    "__EMPTY_2": "JA10",
    "__EMPTY_3": "MX72D3FB50VSYA01L1800A",
    "__EMPTY_4": 313454,
    "__EMPTY_6": "EA",
    "__EMPTY_7": 0,
    "__EMPTY_11": "Parts (Mass Prod.)"
  },
  {
    "__EMPTY": "ORC1",
    "__EMPTY_1": "C200",
    "__EMPTY_2": "JA10",
    "__EMPTY_3": "MX45D SUB ASSY FOR 39114-TXMA-A111-M1",
    "__EMPTY_4": 313455,
    "__EMPTY_6": "EA",
    "__EMPTY_7": 0,
    "__EMPTY_11": "Parts (Mass Prod.)"
  },]



function assy(entry){
let b = entry.split(" ").filter(element => element!= "")
let c = {... b} 

return c
}

const fun_input = assy(input)
const fun_terminado = assy(terminado)


console.log(basedata[3].__EMPTY_3)

let funtion2 = (value)=>{
    let regex = /(\d+)/g;
       
     let filtrado  = basedata.filter(data=>data.__EMPTY_3.toUpperCase() == value[0].toUpperCase().slice(12))
      console.log(filtrado)


       let [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7] = [
      
      /*   value[0].slice(0,4) === 'O001'? value[0].slice(12): value[0].slice(4,22) */
         
        filtrado.length > 0 ?(filtrado.map(data=> data.__EMPTY_4) ) 
        : value[0].slice(0,4) === 'O001'? value[0].slice(12): value[0].slice(4,22) 
        
        ,
        // [1] [2] puede alojar la QTY de Material
        value[1].match(regex) != null ? value[1].match(regex) : " ",


        value[2].match(regex) != null ? value[2].match(regex) : " ",



        // [3][4] puede alojar la orden 
        value[3].match(regex) ? value[3].slice(0,10).match(regex) : " ",

        value[0].slice(0,4) === 'O001' ? value[4].slice(0,10) :
        value[4].match(regex) ? value[4].slice(0,10).match(regex).slice(0,10) : " ",

        value[5],
        value[6]]
        
        let vision = [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7].flat()
  
        for(let i=0; i<vision.length;i++){
          if(vision[i] == " " || vision[i] == undefined || vision[i] == null){
          delete vision[i]
          }
        }
       
    
      return vision.flat()
       
}
console.log(funtion2(fun_input))

console.log(funtion2(fun_terminado))
let final = funtion2(fun_input)


console.log(final[0])





