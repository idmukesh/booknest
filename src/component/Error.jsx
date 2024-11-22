import { useRouteError } from "react-router-dom"; // Import to handle route errors
import { Link } from "react-router-dom"; // Import Link for navigation

function Error() {
  const err = useRouteError(); // Retrieve the error object from route error hook

  return (
    <>
      <h1>{err.status}</h1> {/* Display the error status code */}
      <h1>{err.statusText}</h1> {/* Display the error status text */}
      <Link to="/"><li>Home</li></Link> {/* Link back to home page */}
    </>
  );
}

export default Error;
