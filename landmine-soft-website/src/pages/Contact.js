import React from "react";

function Contact() {
  return (
    <div>

      <h1>Contact Us</h1>

      <form>

        <div>
          <label>Name</label><br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Email</label><br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Message</label><br />
          <textarea placeholder="Enter your message"></textarea>
        </div>

        <br />

        <button type="submit">Send Message</button>

      </form>

      <hr />

      <h3>Company Contact Details</h3>

      <p>Email: contact@landminesoft.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: Hyderabad, India</p>

    </div>
  );
}

export default Contact;