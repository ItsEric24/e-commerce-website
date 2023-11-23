import { useRouteError } from "react-router-dom";
import { ErrorPageContainer } from "./error-page";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <ErrorPageContainer>
      <div>
        <h1>OOPS!</h1>
        <p style={{ fontWeight: "bold" }}>
          <i>
            {error.status}, Page {error.statusText}
          </i>
        </p>
        <p>Sorry, an unexpected error has occured, this page is unavailable</p>
      </div>
    </ErrorPageContainer>
  );
}
export default ErrorPage;
