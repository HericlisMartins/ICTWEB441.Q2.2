import React, { useState } from "react";

import { Alert, Box, Button, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Get form input values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Validate form input values
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    setIsSubmitted(true);
  };

  return (
    <Box>
      {isSubmitted ? (
        <Typography variant="h6" align="center" gutterBottom>
          <Alert severity="success"> Thank you for your message!!</Alert>
        </Typography>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {errors.name && <Alert severity="error">{errors.name}</Alert>}
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              margin="normal"
            />
            {errors.message && <Alert severity="error">{errors.message}</Alert>}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              margin="normal"
            />
            {errors.email && <Alert severity="error">{errors.email}</Alert>}
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              name={"Submit"}
            >
              Submit
            </Button>
          </form>
        </>
      )}
    </Box>
  );
};

export default ContactForm;
