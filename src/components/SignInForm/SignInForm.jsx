import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./sign-in-form.scss";
import Button from "../Button/Button";
import {
  createUserDocumentAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      const errorMessage = error.code;
      const splitMessage = errorMessage.slice(5);
      alert(splitMessage);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SignInForm;
