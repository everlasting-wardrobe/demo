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
  ForgotLinks,
} from './style';
import {InputBoarderWrapper} from '../../components/wrapper';
import Link from '../../components/link';

const RememberMe = () => (
    <CheckBox>
        <input type={"checkbox"} name={"rememberme"} id={"rememberme"}/>
        <label for={"rememberme"}>remember me</label>
    </CheckBox>
);

export class Login extends Component{
  constructor(props){
    super(props);
  }

  
  render(){

    const backupLinks = (
        <ForgotLinks to={""}>Sign up</ForgotLinks>
    );

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
              <ForgotLinks to={""}>Sign up</ForgotLinks>
              <ForgotLinks to={""}>Forgot your password?</ForgotLinks>
            </Form>
          </FormBoarder>
        </FormWrapper>
        <Footer />
      </BackgroundWrapper>
    )
  }
}
