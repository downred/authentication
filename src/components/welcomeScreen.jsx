import { Button, Container } from "react-bootstrap";
import "./modules/welcome-screen.css";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div>
      <Container className="d-flex flex-column">
        <h1>Welcome to our website</h1>
        <div className="d-flex align-items-center justify-content-center">
          <Link to={"/sign-up"}><Button variant="btn btn-primary mx-2">Sign up</Button></Link>
          <span>
            Already have an account? <Link to={"/log-in"}>Log In</Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default WelcomeScreen;
