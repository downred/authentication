import SignUp from "./signup";
import LogIn from "./login";
import Home from "./home";
import WelcomeScreen from "./welcomeScreen";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence location={location} key={location.pathname}>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
