import React, { useState } from 'react';

const FormWithDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    // Do something with the selectedOption value, such as sending it to an API or processing it further
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <h2>Form with Dropdown Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dropdown">Select an option:</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && <p>Form submitted with selected option: {selectedOption}</p>}
    </div>
  );
};

export default FormWithDropdown;
