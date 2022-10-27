import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, providerLogIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
      })

      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    console.log(email, password);
  };

  return (
    <div>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log in
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <div className="text-center">
        <p>
          <Link to="/register">Please Register</Link>
        </p>
        <Button onClick={handleGoogleSignIn} variant="primary" className="m-3">
          Sign in With Google
        </Button>
        <br />
        <Button variant="primary">Sign in with GitHub</Button>
      </div>
    </div>
  );
};

export default Login;
