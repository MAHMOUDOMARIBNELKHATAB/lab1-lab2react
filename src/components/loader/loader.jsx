import "./loader.css";
import Spinner from "react-bootstrap/Spinner";
import {Link} from "react-router-dom";




const Loader = ({ children, loading, error }) => {
  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
  if (error) {
    return (
      <>
      <div className="body">
        <h2> 404</h2>
        <p>Oops something went wrong</p>
        <Link to="/" className="Link-error">Back to Home  </Link>



      </div>
      </>
    );
  }
  return <div>{children}</div>;
};

export default Loader;
