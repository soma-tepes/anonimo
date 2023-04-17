
import * as xlsx from 'xlsx';
import React, { useState } from 'react'


const Converter = () => {

  const [data, setData] = useState()
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = xlsx.read(data, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const json = xlsx.utils.sheet_to_json(worksheet);
      console.log(json);
       setData(json)
      // Crear un archivo JSON y un enlace de descarga
      const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "data.json";
      link.click();
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <div>Converter
      <input type="file" onChange={handleFileUpload} />
    </div>
  )
}

export default Converter