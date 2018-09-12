import React, {Component} from 'react';
import {
  UserPanelWrapper,
  Title,
  FormWrapper,
  Form,
  InputWrapper,
  FormInput,
  SubmitInput
} from './style';
import {TextArea} from '../../components/globals';

export const ContactUs = () => (
  <UserPanelWrapper>
    <FormWrapper>
      <Title>
        {"Contact Us"}
      </Title>
      <Form>
        <InputWrapper>
          <FormInput
            type={"text"}
            required
            autoFocus={"autofocus"}
            placeholder={"Name"}
          />
        </InputWrapper>
        <InputWrapper>
          <FormInput
            type="email"
            required
            placeholder={"Email"}
          />
        </InputWrapper>
        <InputWrapper>
          <TextArea
            placeholder={"Message"}
          />
        </InputWrapper>
        <InputWrapper>
          <SubmitInput
            type="submit"
            value="Send Message"
          />
        </InputWrapper>
      </Form>
    </FormWrapper>
  </UserPanelWrapper>
)
