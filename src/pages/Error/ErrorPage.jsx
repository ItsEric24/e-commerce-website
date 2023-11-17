import { useRouteError } from "react-router-dom";
import "./error.scss";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>OOPS!</h1>
      <p style={{ fontWeight: "bold" }}>
        <i>
          {error.status}, Page {error.statusText}
        </i>
      </p>
      <p>Sorry, an unexpected error has occured, this page is unavailable</p>
    </div>
  );
}
export default ErrorPage;
