import React from 'react';
import Footer from '../footer/footer';
import {UnderlinedInput} from '../../components/input';
import {
  InputWrapper,
  FormWrapper
} from './style';
import {InputBoarderWrapper} from '../../components/wrapper';

export const Signup = ()=>(
  <div>
  <FormWrapper>
  <InputBoarderWrapper>
    <form style={{padding: "60px 0 60px 0"}}>
      <InputWrapper>
        <UnderlinedInput autoFocus={"autofocus"} placeholder={"email address"}/>
      </InputWrapper>
      <InputWrapper>
        <UnderlinedInput placeholder={"password"}/>
      </InputWrapper>
      <InputWrapper>
        <UnderlinedInput placeholder={"re-enter password"}/>
      </InputWrapper>
    </form>
  </InputBoarderWrapper>
  </FormWrapper>
    <Footer />
  </div>

)
