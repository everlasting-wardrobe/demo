import React, {Component} from 'react';
import Footer from '../footer/footer';
import {UnderlinedInput} from '../../components/input';
import {
  BackgroundWrapper,
  FormBoarder,
  Title,
  InputWrapper,
  FormWrapper,
  Form,
  FormInput,
  SubmitInput,
  CheckBox,
  NavLink,
} from './style';
import {Label} from '../../components/globals';
import {InputBoarderWrapper} from '../../components/wrapper';
import Link from '../../components/link';
import {WORKING_PATH} from '../../api/constants';

const RememberMe = () => (
    <CheckBox>
        <input type={"checkbox"} name={"rememberme"} id={"rememberme"}/>
        <Label htmlFor={"rememberme"}>remember me</Label>
    </CheckBox>
);

export class Login extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <BackgroundWrapper>
        <FormWrapper>
          <FormBoarder>
            <Title>
              {"Log in"}
            </Title>
            <Form
              action="/d/uers"
              accept-charset="UTF-8"
              method="post"
              >
              <InputWrapper>
                <FormInput
                  type={"email"}
                  required
                  autoFocus={"autofocus"}
                  placeholder={"email address"}
                />
              </InputWrapper>
              <InputWrapper>
                <FormInput
                  required
                  minLength={6}
                  type={"password"}
                  placeholder={"password"}
                />
              </InputWrapper>
              <RememberMe />
              <InputWrapper>
                <SubmitInput
                  type="submit"
                  value="Log in"
                />
              </InputWrapper>
              <NavLink to={WORKING_PATH + "signup"}>Sign up</NavLink>
              <NavLink to={WORKING_PATH + "password/new"}>Forgot your password?</NavLink>
            </Form>
          </FormBoarder>
        </FormWrapper>
      </BackgroundWrapper>
    )
  }
}
