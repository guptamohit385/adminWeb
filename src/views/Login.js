import React, { useEffect, useState  } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from "redux/action";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Button
} from "reactstrap";

const Login = (props) => {

  const history = useHistory();

  const [ allValues, setAllValues] = useState({
       email: '',
       password: '',
       errors: {}
  })

  const handleOnchange = (e) =>{
        setAllValues({...allValues, [e.target.name]: e.target.value })
  }

  const gotoAgentDashBoard = (status) =>{
        if(status === 200){
            history.push('/admin/dashboard');
        }else{
             history.push('/error');
        }
  }

   const handleOnSubmit = (e) =>{
          e.preventDefault();
          if (handleValidation()) {
                // this.setState({loader: true});
                props.login(allValues, gotoAgentDashBoard)
                //  console.log("Validation Completed Successfully");
          }
    }

const handleValidation = () => {
      let email = allValues.email;
      let password = allValues.password;
      let errors = {};
      let formIsValid = true;

      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

      if(!email){
          errors['email'] = 'Email should not be empty.'
          formIsValid = false
      }

      if(email && !regex.test(email)){
            errors['email'] = 'Please Enter a valid Email.'
            formIsValid = false
      }

      if(!password){
          errors.password = 'Password should not be empty'
          formIsValid = false
    }

      if( password  && password.length <3){
            errors.password = 'Password is invalid.'
            formIsValid = false
      }
      setAllValues({...allValues, errors: errors })
      return formIsValid;
  }

  // console.log(allValues);

  return (
    <div>
    <Row>
      <Col md="4">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="login form"
            />
      </Col>
      <Col md="4" style={{top:150}}>
        <h2> Sign into your account</h2>
        <form onSubmit={handleOnSubmit}>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={allValues.email}
                onChange ={(e) =>handleOnchange(e)}
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={allValues.password}
                onChange ={(e) =>handleOnchange(e)}
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

const mapDispatchToProps = {
  login:login
}

export default connect(null,mapDispatchToProps)(Login)