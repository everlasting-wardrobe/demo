import React from 'react';
import{
  Title,
  UserPanelWrapper,
  FormWrapper,
  Form,
  FormInput,
  SubmitInput,
  InputWrapper,
  NavLink,
} from './style';
import {WORKING_PATH} from '../../api/constants';

export const ForgetPassWordPanel = () => (
  <UserPanelWrapper>
    <FormWrapper>
      <Title>
        Forgot Your Password?
      </Title>
      <Form
        action={"/d/users/password"}
        accept-charset={"UTF-8"}
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
          <SubmitInput
            type={"submit"}
            required
            value={"Send me reset password instructions"}
          />
        </InputWrapper>
        <NavLink to={WORKING_PATH+'Login'}>
          {"Log in"}
        </NavLink>
        <NavLink to={WORKING_PATH+'signup'}>
          {"Sign up"}
        </NavLink>
      </Form>
    </FormWrapper>
  </UserPanelWrapper>

)
