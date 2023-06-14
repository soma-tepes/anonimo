import React from 'react'

const ModalCon = ({handleDownload,downloadLink}) => {
  return (
    <div>
    <button onClick={handleDownload}>Descargar JSON</button>
 <a ref={downloadLink} style={{ display: 'none' }} />

    </div>
  )
}

export default ModalCon