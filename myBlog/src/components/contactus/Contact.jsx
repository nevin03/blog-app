import React from "react";
import { Form } from "informed";
import CustomInput from "../../custom-Fields/CustomInput";
import { emailValidation } from "../../validation/validation";
import styles from "./ContactPage.module.css";
import useContactSubmit from "../../hooks/useContactSubmit";

const ContactPage = () => {
  const { submitContact, loading, error, success } = useContactSubmit();

  const handleSubmit = (values) => {
    submitContact(values);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          label="Name"
          placeholder="Enter your name"
          required
          className={styles.input}
        />
        <CustomInput
          name="email"
          label="E mail"
          placeholder="Enter your email"
          validate={emailValidation}
          className={styles.input}
        />
        <CustomInput
          name="phone"
          label="Phone"
          placeholder="Optional"
          className={styles.input}
        />
        <CustomInput
          name="message"
          label="Message box"
          placeholder="Enter your message"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </Form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Message sent successfully!</p>}
    </div>
  );
};

export default ContactPage;
