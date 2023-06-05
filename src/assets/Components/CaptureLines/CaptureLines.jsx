import React, { useState } from 'react'

const CaptureLines = () => {
  
  const [initial, setInitial] = useState('')
  const [option,setOption] = useState (['MX65-D1','Mx65-D2','MX65-A'])
  const [newOption, setNewOption] = useState("");

  const handleSelectOption = (e) => {
    const selectedValue = e.target.value;
    setInitial(selectedValue);

    // If "Add new option" is selected, show the input to add a new option
    if (selectedValue === "__add_new_option__") {
     setNewOption("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initial === "__add_new_option__") {
      setOption([...option, newOption]);
        setNewOption("");
    }
  };

  return (
    <div>
      <h1>Horas Capturadas Lineas</h1>

      <form onSubmit={handleSubmit}>
        <select value={initial} onChange={handleSelectOption}>
          <option value="">Select an option</option>
          {option.map((select, i) => (
            <option key={i} value={select}>
              {select}
            </option>
          ))}
          <option value="__add_new_option__">Add new option</option>
        </select>

        {initial === "__add_new_option__" &&(
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
           
          />
        )}
        <button type="submit" >{initial === "__add_new_option__" ? "Add option" : "Push"}</button>
      </form>
    </div>
  );
}

export default CaptureLines;