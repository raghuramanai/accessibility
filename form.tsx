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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    let isValid = true;

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
    displayMessage(isValid);
  };

  const displayMessage = (isValid) => {
    const messageElement = document.getElementById('message');
    if (isValid) {
      messageElement.innerText = 'Success! Welcome to Zulu. You will receive an email to create a password';
      messageElement.classList.remove('error');
      messageElement.classList.add('success');
    } else {
      messageElement.innerText = 'Please fix the errors';
      messageElement.classList.remove('success');
      messageElement.classList.add('error');
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
    <div>
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
        {/* Other form fields follow similar structure */}

        <button type="submit">Submit</button>
      </form>
      <div id="message" role="alert" aria-live="polite"></div>
    </div>
  );
};

export default RegistrationForm;
