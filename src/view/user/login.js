import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../actions/authentication';
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

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault();
    if(this.props.login && typeof this.props.login === 'function'){
        this.props.login();
    }
  }

  render(){
    const {from} = this.props.location.state || {from:{pathname : "/"}};
    const {currentUser, login} = this.props;
    if(currentUser != null){
      console.log(from);
      return <Redirect to={from} />;
    }
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
                      onClick = {this.onLoginSubmit}
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

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    currentUser: state.userReducer.currentUser
  }
}

const mapDispatchToProps = (dispatch) => (
  {login: () => {dispatch(login)}}
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
