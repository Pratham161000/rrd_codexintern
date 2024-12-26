const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();  
      
      
      console.log('Form submitted!');
      
      
      window.location.reload();
    };
  
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below:</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            pattern="[A-Za-z ]+"  // Only allows letters and spaces
            title="Name should only contain letters and spaces"
            aria-describedby="name-error"
          />
          <div id="name-error" className="error-message"></div>
          
          <input
            type="email"
            placeholder="Your Email"
            required
            title="Please enter a valid email address"
            aria-describedby="email-error"
          />
          <div id="email-error" className="error-message"></div>
          
          {/* Message input field */}
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            pattern="[A-Za-z0-9 .,!?'\-]+"
            title="Message should only contain letters, numbers, and punctuation"
            aria-describedby="message-error"
          ></textarea>
          <div id="message-error" className="error-message"></div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  