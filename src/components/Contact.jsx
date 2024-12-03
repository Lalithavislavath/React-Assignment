import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>
          Name: <input type="text" placeholder=" Enter Your Name" required />
        </label>
        <label>
          Email: <input type="email" placeholder=" Enter Your Email" required />
        </label>
        <label>
          Message: <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
