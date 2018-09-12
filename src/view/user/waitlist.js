import React, {Component} from 'react';
import {
  Title,
  StyledNavButton,
  UserPanelWrapper,
  FormWrapper,
  Form,
  FormInput,
  SubmitInput,
  InputWrapper
} from './style';
import {H3, H4} from '../../components/globals';
import {Button} from '../../components/buttons';

export class WaitList extends Component{
  constructor(props){
    super(props);
    this.state = {
      toCheckOut : false
    }
  }

  onJoinButtonClick = () => {
    this.setState({toCheckOut: true});
  }

  render(){
    return (
      <UserPanelWrapper>
        <FormWrapper>
          <H4>
            {"Due to stunning demand"}
          </H4>
          <Title>
            {"You Have Been Added to the Waitlist"}
          </Title>
          <H3>
            {"Pay Now and Jump to the Front of the Line"}
          </H3>
          {!this.state.toCheckOut? (
            <Button onClick={this.onJoinButtonClick}>
              {"Join The Club! 40$"}
            </Button>
          ) : (
            <div>
              <InputWrapper
                name="ccname"
                id="frmNameCC"
                required placeholder="Full Name"
                autoComplete="cc-name"
              />
              <InputWrapper>
                <FormInput
                  required
                  id={"frmCCNum"}
                  name={"cardnumber"}
                  autoComplete="cc-number"
                  placeholder={"card number"}
                  type={"cc-number"}
                />
              </InputWrapper>
              <InputWrapper>
                <FormInput
                  required
                  id={"frmCCExp"}
                  name={"cc-exp"}
                  autoComplete="cc-exp"
                  placeholder={"MM-YYYY"}
                />
              </InputWrapper>
              <InputWrapper>
                <FormInput
                  required
                  id={"frmCCCVC"}
                  name={"cvs"}
                  autoComplete="cc-csc"
                  placeholder={"cvc"}
                />
              </InputWrapper>
              <InputWrapper>
                <SubmitInput
                  type="submit"
                  value="Checkout"
                />
              </InputWrapper>
            </div>
          )}
        </FormWrapper>
      </UserPanelWrapper>
    )
  }
}
