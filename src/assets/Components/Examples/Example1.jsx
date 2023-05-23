import React, { useState } from 'react'

const Example1 = () => {
    const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [people, setPeople] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const newPeople = [...people];
      newPeople[editIndex] = { name, age };
      setPeople(newPeople);
      setEditIndex(null);
    } else {
      setPeople([...people, { name, age }]);
    }
    setName('');
    setAge('');
  };

  const handleEdit = (index) => {
    setName(people[index].name);
    setAge(people[index].age);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Simple form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">{editIndex !== null ? 'Save' : 'Submit'}</button>
      </form>
      <div>
        <h2>Values of the form</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name}, {person.age}{' '}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Example1