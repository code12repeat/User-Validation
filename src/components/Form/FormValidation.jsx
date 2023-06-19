import React, { useState } from 'react';
import './FormValidation.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: '',
      email: '',
      password: ''
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain special characters';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      console.log('Form data:', formData);
      // Perform any necessary actions with the form data
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Password must be at least 8 characters long and contain special characters
    const passwordRegex = /^(?=.*[!@#$%^&*])\S{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <h1>User Validation</h1>
      <form onSubmit={handleSubmit}>
      <div className="user">
      <div className="name">
          <label htmlFor="name">Name:</label>
          <input className="input-box"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input className="input-box"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="pass">
          <label htmlFor="password">Password:</label>
          <input className="input-box"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        
        <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default FormValidation;


