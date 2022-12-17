import "./App.css";
import WelcomeScreen from "./components/welcomeScreen";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import LogIn from "./components/login";
import Home from "./components/home";

function App() {

  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center
      "
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
