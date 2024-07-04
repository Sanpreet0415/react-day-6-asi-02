import React, { useRef } from 'react';
import './App.css';

function App() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const handleValidation = (ref) => {
    const value = ref.current.value.trim();
    if (value.length === 0) {
      ref.current.setCustomValidity('This field is required');
    } else {
      ref.current.setCustomValidity('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Custom validation or processing logic can be added here
    alert('Form submitted successfully!');
  };

  return (
    <div className="App">
      <h1>React useRef Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            onFocus={() => handleFocus(nameInputRef)}
            onBlur={() => handleValidation(nameInputRef)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            onFocus={() => handleFocus(emailInputRef)}
            onBlur={() => handleValidation(emailInputRef)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            onFocus={() => handleFocus(passwordInputRef)}
            onBlur={() => handleValidation(passwordInputRef)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
