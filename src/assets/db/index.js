'use strict'

let etiqueta ="O013C030-59160        R-Pb        US180         EA 430017611400030          14 OF 21            310123300123"
let input =  `O013OR-RB113-FA-L2120LR-Pb        MX44          EA 102127569000010          101122-007`
let terminado = `O001X0284765MX72D3FB50VSYA01L1800A        R-Pb        MX250      102159888500010          170223-013 `


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
    "__EMPTY_3": "MX49 SUB ASSY FOR 39115TRXA1-WHDF",
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
/*O013OR-031-57137-0    R-Pb        PH4260        EA 430016667200010          k220813-007         130822051022
O013C120-59254        R-Pb        MX11500       EA 1021700044               040323
O013C120-59885        R-Pb        MX1050        EA 430017758400010          S50 230202-11       020223100223        000000
O013OR-C045-52489     R-Pb        PH850         EA 430017933200020          k230204-02A         040223270223
O013C120-59885        R-Pb        MX216         EA 430017758400010          S50 230203-12       030223100223
O013C120-59254        R-Pb        MX4000        EA 1021700044               020323
O013OR-RB113-FA-L2120LR-Pb        MX26          EA 102096753700010          120922-006
O013OR-RB113-FA-L2120LR-Pb        MX44          EA 102127569000010          101122-007
O013C045-52480        R-Pb        MX800         EA 102165236800010          140323-002
O013OR-JUMP-838-BLK-1 R-Pb        MX120         EA 102169338600010          110323-019
O013C045-52724        R-Pb        MX58          EA 102155246300010          190123-004
O052C031-57644        R-Pb        US20000       EA 102160539100010        RCP02-1                                    20230309                               090323-005
O052C030-58699        R-Pb        US2500        EA 102136858900010        565227-001  b120223-022    20230212
O013C045-52609        R-Pb        MX400         EA 102165055100010          120323-001
O001X0284765MX72D3FB50VSYA01L1800A        R-Pb        MX250      102159888500010          170223-013
*/
return c
}

const fun_input = assy(input)
const fun_etiqueta = assy(etiqueta)
const fun_terminado = assy(terminado)

console.log(basedata[3].__EMPTY_3)

let funtion2 = (value)=>{
   
    let regex = /(\d+)/g;
    console.log(value)
   
   let  filtrado = basedata.filter(data => data.__EMPTY_3 == value[0].slice(12))
    console.log(filtrado)
       let [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7] = [
      
        value[0].slice(0,4) === 'O001'? value[0].slice(12): value[0].slice(4,22)
        
        ,
        // [1] [2] puede alojar la QTY de Material
        value[1].match(regex) != null ? value[1].match(regex) : " ",
        value[2].match(regex) != null ? value[2].match(regex) : " ",
        // [3][4] puede alojar la orden 
        value[3].match(regex) ? value[3].slice(0,10).match(regex) : " ",
        value[4].match(regex) ? value[4].slice(0,10).match(regex).slice(0,10) : " ",

        value[5],
        value[6]]
        let vision = [L_0 , L_1 ,L_2,L_3,L_4,L_5,L_6,L_7].flat()
      return vision
       
}

console.log(funtion2(fun_input))
console.log(funtion2(fun_etiqueta))
console.log(funtion2(fun_terminado))




