import React, { useState } from 'react';
import styles from './contactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Output formData to console for testing
    // Add logic to handle form submission (e.g., send data to backend)
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Let&apos;s <span>Talk</span></h1>
        <p>Any questions? Need a website?</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>
        <div className={styles.input}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div className={styles.message}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            placeholder="Message"
          />
        </div>
        <button className={styles.btn} type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
