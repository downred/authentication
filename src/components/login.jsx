import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiArrowBack } from "react-icons/bi";
import "./modules/login.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        const { code } = error;
        var message;
        switch (code) {
          case "auth/wrong-password":
            message = "Invalid password";
            setError(message);
          case "auth/user-not-found":
            message = "This user does not exist";
            setError(message);
        }
      });
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Header>
        <button className="back-button" onClick={() => navigate("/")}>
          <BiArrowBack />
        </button>
        <Card.Title className="text-center">Log in</Card.Title>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>E-mail address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="pword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="w-100"
            onClick={handleSubmit}
          >
            Log in
          </Button>
          <div className="w-100 text-center mt-2">
            <span>
              Need an account? <Link to={"/sign-up"}>Sign Up</Link>
            </span>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LogIn;
