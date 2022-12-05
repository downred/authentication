import "./App.css";
import WelcomeScreen from "./components/welcomeScreen";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center
      "
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/sign-up" element={<h1>Sign up</h1>} />
          <Route path="/log-in" element={<h1>Log In</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
