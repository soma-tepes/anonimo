


let etiqueta ="O013C030-59160        R-Pb        US180         EA 430017611400030          14 OF 21            310123300123"
let input =  'O013C045-52609        R-Pb        MX400         EA 102165055100010          120323-001'


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
O013C045-52609        R-Pb        MX400         EA 102165055100010          120323-001*/
return c
}
const array = assy(input)


var regex = /(\d+)/g;

console.log(assy(input))
let L_0 = array[0].slice(4,22);console.log(L_0)
let L_1 = array[1] ; console.log(L_1 ? L_1 : " ")
let L_2 = array[2];console.log(L_2 ? L_2 : " ")
let L_3 = array[3];console.log(L_3 ? L_3 : " ")
let L_4 = array[4];console.log(L_4 ? L_4 : " ")
let L_5 = array[5];console.log(L_5 ? L_5 : " ")
let L_6 = array[6];console.log(L_6 ? L_6 : " ")
let L_7 = array[7];console.log(L_7 ? L_7 : " ")


