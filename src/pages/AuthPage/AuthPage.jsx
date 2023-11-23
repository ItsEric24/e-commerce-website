import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import { AuthContainer } from "./auth.styles.jsx";

function AuthPage() {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
}
export default AuthPage;
