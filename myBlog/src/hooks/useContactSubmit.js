import { useState } from "react";
import axios from "axios";

const useContactSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async ({ values }) => {
    console.log("Form Values:", values);
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/contacts",
        {
          data: values, // Ensure this structure matches the expected model in Strapi
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure the content type is correct
          },
        }
      );

      console.log("Response:", response); // Log the response to see if it's correct

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
      } else {
        setError("Failed to submit");
      }
    } catch (err) {
      console.error("Error:", err); // Log error for better visibility
      setError(err.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContact,
    loading,
    error,
    success,
  };
};

export default useContactSubmit;
