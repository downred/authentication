import { Button, Container } from "react-bootstrap";
import "./modules/welcome-screen.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <motion.div
    >
      {!isLoggedIn && (
        <Container className="d-flex flex-column">
          <h1>Welcome to our website</h1>
          <div className="d-flex align-items-center justify-content-center">
            <Link to={"/sign-up"}>
              <Button variant="btn btn-primary mx-2">Sign up</Button>
            </Link>
            <span>
              Already have an account? <Link to={"/log-in"}>Log In</Link>
            </span>
          </div>
        </Container>
      )}
    </motion.div>
  );
};

export default WelcomeScreen;
