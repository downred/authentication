import "./App.css";
import WelcomeScreen from "./components/welcomeScreen";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center
      "
    >
      <WelcomeScreen />
    </Container>
  );
}

export default App;
