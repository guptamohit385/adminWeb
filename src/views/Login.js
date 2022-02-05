import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Button
} from "reactstrap";

const Login = () => {
  return (
    <div>
    <Row>
      <Col md="4">
      <img
      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
      alt="login form"
    />
      </Col>
      <Col md="4" style={{top:150}}>
        <h2>
        Sign into your account
        </h2>
        <form>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
              <span className="form-check-sign">
                <span className="check"></span>
            </span>
            </Label>
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Col>
    </Row>
    </div>
  );
};

export default Login;