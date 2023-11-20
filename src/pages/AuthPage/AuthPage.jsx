import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import "./AuthPage.scss";

function AuthPage() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
export default AuthPage;
