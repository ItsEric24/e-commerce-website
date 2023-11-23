/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../FormInput/FormInput";
import { SignUpFormContainer } from "./sign-up.styles";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email or password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          htmlFor="name"
          type="text"
          id="name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          htmlFor="email"
          type="email"
          id="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          htmlFor="password"
          type="password"
          id="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          htmlFor="confirm-password"
          type="password"
          id="confirm-password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  );
}
export default SignUpForm;
