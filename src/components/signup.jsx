import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

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
      // console.log(newError);
    } else {
      setError("");
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/log-in");
        })
        .catch((error) => {
          const errorCode = error.code;
          var errorMsg;
          switch (errorCode) {
            case "auth/weak-password":
              errorMsg = "Password should be at least 6 characters!";
              return setError(errorMsg);
            case "auth/invalid-email":
              errorMsg = "Please provide a valid email";
              return setError(errorMsg);
          }
          // console.log(errorCode, errorMsg);
        });
    }
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Header>
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
  );
};

export default SignUp;
