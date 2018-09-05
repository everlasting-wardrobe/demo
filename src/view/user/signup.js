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
  SubmitInput
} from './style';
import {InputBoarderWrapper} from '../../components/wrapper';

export class Signup extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <BackgroundWrapper>
        <FormWrapper>
          <FormBoarder>
            <Title>
              {"Sign up"}
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
              <InputWrapper>
                <FormInput
                  required
                  minLength={6}
                  type={"password"}
                  placeholder={"re-enter password"}
                />
              </InputWrapper>
              <InputWrapper>
                <SubmitInput
                  type="submit"
                  value="Sign up"
                />
              </InputWrapper>
            </Form>
          </FormBoarder>
        </FormWrapper>
        <Footer />
      </BackgroundWrapper>
    )
  }
}
