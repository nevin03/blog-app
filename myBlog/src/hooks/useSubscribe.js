// hooks/useSubscribe.js
import { useState } from "react";

const useSubscribe = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = ({ values }) => {
    // Add any form submission logic here (e.g., API call)
    console.log("Subscribed Email:", values.newsletter);

    // Set the modal message and show the modal
    setModalMessage(`Confirm subscription for: ${values.newsletter}`);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return {
    showModal,
    modalMessage,
    handleSubmit,
    handleCloseModal,
  };
};

export default useSubscribe;
