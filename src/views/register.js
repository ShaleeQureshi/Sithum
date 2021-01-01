import React, { useCallback } from "react";
import firebase from "firebase";
import { Container, Button, Form } from "react-bootstrap";
import Footer from "../components/footer";
import NonIndexNav from "../components/non-index-nav";

const RegisterApp = ({ history }) => {
  const SignUpUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        firebase.auth().onAuthStateChanged((user) => {
          firebase
            .database()
            .ref(`/users/${user["uid"]}`)
            .update({
              uid: user["uid"],
              email: user["email"],
              creationTime: user["metadata"]["creationTime"],
            })
            .then(function () {
              alert("You have successfully registered!");
              document.getElementById("email").value = "";
              document.getElementById("password").value = "";
            });
        });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <section className="wrapper section-register">
        <NonIndexNav />
        <Container style={{ paddingTop: "20%" }}>
          <div>
            <h1>Register</h1>
            <p>Powered with Google Firebase Authentication</p>
            <Form onSubmit={SignUpUser}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default RegisterApp;
