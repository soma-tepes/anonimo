let bd = {

"basedata": [
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
      "__EMPTY": "ORC1",
      "__EMPTY_1": "C200",
      "__EMPTY_2": "JA10",
      "__EMPTY_3": "MX65A-4SW-NH",
      "__EMPTY_4": 313454,
      "__EMPTY_6": "EA",
      "__EMPTY_7": 0,
      "__EMPTY_11": "Parts (Mass Prod.)"
    },]}


    let b = bd.basedata.slice(2,5)

    console.log(b)