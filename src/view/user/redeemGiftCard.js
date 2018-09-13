import React from 'react';
import {
  LineBreaker,
  EWColors
} from '../../components/globals';
import {
  UserPanelWrapper,
  Title,
  FormWrapper,
  InputWrapper,
  Form,
  FormInput,
  SubmitInput
} from './style';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {WORKING_PATH} from '../../api/constants';

const RedeemGIftCard = (props) => {
  if(!props.currentUser){
    return (
      <Redirect
        to={{
          pathname : WORKING_PATH + "login",
          state : {from : props.location}
        }}
      />
    )
  }
  return (
    <UserPanelWrapper>
      <FormWrapper>
        <Title>
          {"Redeem Your Gift Card Here"}
        </Title>
        <Form>
          <InputWrapper>
            <FormInput
               required
               placeholder={"enter your gift card code here"}
            />
          </InputWrapper>
          <InputWrapper>
            <SubmitInput
              type="submit"
              value="Redeem"
              onClick = {this.onLoginSubmit}
            />
          </InputWrapper>
        </Form>
      </FormWrapper>
    </UserPanelWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    ...ownProps,
    currentUser : state.userReducer.currentUser
  });
}

export default connect(mapStateToProps)(RedeemGIftCard);
