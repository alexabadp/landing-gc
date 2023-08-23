import { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [toEmail, setToEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    // const serviceID = "YOUR_EMAILJS_SERVICE_ID";
    const serviceID = "service_dn84ew5";
    // const templateID = "YOUR_EMAILJS_TEMPLATE_ID";
    const templateID = "template_s7cexxw";
    // const userID = "YOUR_EMAILJS_USER_ID";
    const userID = "jahupe@gmail.com";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_email: toEmail,
          message: message,
        },
        userID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div>
      <h2>Send an Email</h2>
      <form onSubmit={handleSendEmail}>
        <label>To Email:</label>
        <input
          type="email"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
        />
        <br />
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailForm;
