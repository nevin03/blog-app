// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const Subscribe = ({ showModal, handleClose, message }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleCheckboxChange = () => setIsChecked(!isChecked);
//   const handleConfirm = async () => {
//     if (!isChecked) {
//       alert("You must accept the terms to subscribe.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:1337/api/subscriptions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data: {
//             subscribe: email, // Use "subscribe" instead of "email"
//           },
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Subscription error:", errorData);
//         throw new Error("Subscription failed");
//       }

//       handleClose();
//       alert("You're subscribed!");
//     } catch (error) {
//       console.error("Subscription error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <Modal show={showModal} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Subscription Confirmation</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>{message}</p>
//         <p>
//           If you subscribe, you will receive:
//           <ul>
//             <li>Weekly notifications about the latest updates.</li>
//             <li>Daily notifications about tech happenings.</li>
//           </ul>
//         </p>

//         <Form.Group controlId="formEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Check
//           className="mt-3"
//           type="checkbox"
//           label="I accept the terms and conditions."
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//         />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleConfirm} disabled={!isChecked}>
//           Confirm Subscription
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Subscribe;
