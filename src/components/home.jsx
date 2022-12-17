import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLoggedIn(true);
      } else {
        navigate("/log-in");
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  if (isLoggedIn) {
    return (
      <h2>
        Yay! You are now logged in. Try{" "}
        <Button size="lg" onClick={handleLogOut}>
          logging out
        </Button>
      </h2>
    );
  } else {
    return null;
  }
};

export default Home;
