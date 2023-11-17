import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "./../../utils/firebase/firebase.js";

function Signin() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page </h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
      <SignUpForm />
    </div>
  );
}
export default Signin;
