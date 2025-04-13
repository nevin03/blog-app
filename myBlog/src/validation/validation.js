// validation.js

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailValidation = (value) => {
  // Check if the value is empty
  if (!value) {
    return "Email is required!";
  }
  // Check if the value matches the email format
  if (!emailRegex.test(value)) {
    return "Email format is not correct";
  }
  // Return undefined if valid
  return undefined;
};
