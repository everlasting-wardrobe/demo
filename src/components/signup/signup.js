import React, {Component} from 'react';
import './signup.css';
import styled from 'styled-components';
import {Input} from '../globals/index';

const SignUpInput = styled(Input)`
margin-top: 20px;
margin-bottom: 20px;
width: -webkit-fill-available;
margin-left: 6%;
margin-right: 6%;
`

const FormGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;


class SignUp extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className={"signup-header"}>
        </div>
        <div className={"signup-wrapper"}>
          <div className={"signup-box-wrapper"}>
            <div className={"signup-lable"}>
               Sign up
            </div>
            <SignUpInput type="email" placeholder="email address"  name = "user[email]" id ="user_email" />
            <SignUpInput type="password" placeholder="password"  name = "user[password]" id ="password" />
            <SignUpInput type="password" placeholder="re-enter password"  name = "user[password_confirmation]" id ="user_password_confirmation" />
            <FormGroup>
              <a>Sign Up</a>
            </FormGroup>
            <a className={"Login-link"}>Log in</a>
          </div>
        </div>
        <div className={"signup-footer"}>
        </div>
      </div>
    )
  }
}

export default SignUp;
