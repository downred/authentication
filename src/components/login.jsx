import { Button, Card, Form } from "react-bootstrap";

const LogIn = () => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Header>
        <Card.Title className="text-center">Log in</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>E-mail address</Form.Label>
            <Form.Control type="email" placeholder="Enter your e-mail" />
          </Form.Group>
          <Form.Group controlId="pword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Log in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LogIn;
