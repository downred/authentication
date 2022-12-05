import { Button, Container } from "react-bootstrap";
import "./modules/welcome-screen.css";
const WelcomeScreen = () => {
  return (
    <div>
      <Container className="d-flex flex-column">
        <h1>Welcome to our website</h1>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="btn btn-primary mx-2">Sign up</Button>
          <span>
            Already have an account? <a href="/signup">Log In</a>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default WelcomeScreen;
