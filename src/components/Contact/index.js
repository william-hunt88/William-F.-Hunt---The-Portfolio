import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Name"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            defaultValue={name}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="message">Your message here</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            defaultValue={message}
            rows="5"
            onBlur={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" data-testid="button">
          Submit
        </Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>

    // <section>
    //   <h1 data-testid="h1tag">Contact me</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         defaultValue={name}
    //         onChange={handleChange}
    //         name="name"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input
    //         type="email"
    //         name="email"
    //         defaultValue={email}
    //         onBlur={handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea
    //         name="message"
    //         defaultValue={message}
    //         rows="5"
    //         onBlur={handleChange}
    //       />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit">
    //       Submit
    //     </button>
    //   </form>
    // </section>
  );
}

export default ContactForm;
