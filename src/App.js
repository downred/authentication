import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/animated-routes";

function App() {
  return (
    <Container
      className="vh-100 d-flex align-items-center justify-content-center
      "
    >
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
