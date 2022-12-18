import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";
import "./modules/login.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != passwordConf) {
      const newError = "Passwords do not match!";
      setError(newError);
    } else {
      setError("");
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          signOut(auth);
          navigate("/log-in");
        })
        .catch((error) => {
          const { code } = error;

          var errorMsg;
          switch (code) {
            case "auth/weak-password":
              errorMsg = "Password should be at least 6 characters!";
              return setError(errorMsg);
            case "auth/invalid-email":
              errorMsg = "Please provide a valid email";
              return setError(errorMsg);
            case "auth/email-already-in-use":
              errorMsg =
                "This email is already in use. Please use a different email.";
              return setError(errorMsg);
          }
        });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <Card style={{ width: "20rem" }}>
        <Card.Header>
          <button className="back-button" onClick={() => navigate("/")}>
            <BiArrowBack />
          </button>
          <Card.Title className="text-center">Sign up</Card.Title>
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
            <Form.Group controlId="pwordConf" className="mb-3">
              <Form.Label>Confirm your password</Form.Label>
              <Form.Control
                type="password"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100"
              onClick={handleSubmit}
            >
              Create account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default SignUp;
