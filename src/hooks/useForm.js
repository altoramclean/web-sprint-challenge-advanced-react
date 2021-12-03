// write your custom hook here to control your checkout form
import React, { useState } from "react";

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };

    return  [showSuccessMessage, handleChanges, handleSubmit, values];
}

export default useForm;