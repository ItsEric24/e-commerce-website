import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "./../../utils/firebase/firebase.js";

function Signin() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page </h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </div>
  );
}
export default Signin;
