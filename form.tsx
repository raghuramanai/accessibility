import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    usernameError: '',
    emailError: '',
    phoneError: '',
  });

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Basic phone number validation (assuming 10 digits)
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    let isValid = true;

    // Validation logic for each field
    if (formData.firstName === '') {
      errors.firstNameError = 'First name is required';
      isValid = false;
    }

    if (formData.lastName === '') {
      errors.lastNameError = 'Last name is required';
      isValid = false;
    }

    if (formData.username === '') {
      errors.usernameError = 'Username is required';
      isValid = false;
    }

    if (formData.email === '' || !validateEmail(formData.email)) {
      errors.emailError = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.phone === '' || !validatePhone(formData.phone)) {
      errors.phoneError = 'Please enter a valid phone number';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      // Success case
      alert('Success! Welcome to Zulu. You will receive an email to create a password');
      // You can add code here to send data to your backend or perform further actions
    } else {
      alert('Please fix the errors');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Registration Form">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          aria-invalid={formErrors.firstNameError ? 'true' : 'false'}
          aria-describedby="firstNameError"
        />
        <span id="firstNameError">{formErrors.firstNameError}</span>
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          aria-invalid={formErrors.lastNameError ? 'true' : 'false'}
          aria-describedby="lastNameError"
        />
        <span id="lastNameError">{formErrors.lastNameError}</span>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          aria-invalid={formErrors.usernameError ? 'true' : 'false'}
          aria-describedby="usernameError"
        />
        <span id="usernameError">{formErrors.usernameError}</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={formErrors.emailError ? 'true' : 'false'}
          aria-describedby="emailError"
        />
        <span id="emailError">{formErrors.emailError}</span>
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={formErrors.phoneError ? 'true' : 'false'}
          aria-describedby="phoneError"
        />
        <span id="phoneError">{formErrors.phoneError}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
