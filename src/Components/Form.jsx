import React, { useState } from 'react';

function MyForm() {
    const informData={
        firstName: '',
    lastName: '',
    email: '',
    }
  const [formData, setFormData] = useState(informData);

  const handleInputChange = (event) => {
    // Update the corresponding form data field when input changes
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // You can now send the JSON data to your server or use it as needed
    setFormData(informData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
