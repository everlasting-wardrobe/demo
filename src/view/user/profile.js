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
  Notes,
  SizedFormInput,
  SelectorWrapper,
  DropdownArrowWrapper,
  StepCircle,
  ConnectBar,
  CompletedCircle,
  IncompletedCircle,
  StepsBarWrapper,
} from './style';
import {InputBoarderWrapper} from '../../components/wrapper';
import {ProfileSelect, ProfileOption} from '../../components/select';
import ArrowDown from 'react-icons/lib/ti/arrow-sorted-down';

const StepsBar = (props) => {
  let stepsCombo = [];
  for (let i = 0; i < props.size; i++) {
    if (i < props.curStep) {
      stepsCombo.push(<CompletedCircle />);
    } else {
      stepsCombo.push(<IncompletedCircle />);
    }
    if (i !== props.size - 1) {
      stepsCombo.push(<ConnectBar />);
    }
  }
  return (
    <StepsBarWrapper>
      {stepsCombo}
    </StepsBarWrapper>
  );
};

const ProfileSelectBox = (props) => {
    return(
            <SelectorWrapper size={props.size}>
                <ProfileSelect required>
                    {props.options.map(option => (
                        <ProfileOption value={option}>{option}</ProfileOption>
                    ))}
                </ProfileSelect>
                <DropdownArrowWrapper>
                    <ArrowDown />
                </DropdownArrowWrapper>
            </SelectorWrapper>
    );
};

export class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
        gender: ["gender", "boy", "girl", "decline to self identify"],
        topSize: ["Top Size", "0-3 mo", "3-6 mo", "6-9 mo", "9-12 mo", "12-18 mo", "18-24 mo",
                  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", 
                  "S", "M", "L", "XL"],
        bottomSize: ["Bottom Size", "0-3 mo", "3-6 mo", "6-9 mo", "9-12 mo", "12-18 mo", "18-24 mo",
                    "2", "3", "4", "5", "6", "7", "8", "9", "10", 
                    "S", "M", "L", "XL"],
        month: ["month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        day: ["day", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        year: ["year", 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
    };
  }
  
  render(){

    return (
      <BackgroundWrapper>
        <StepsBar size={6} curStep={4} />
        <FormWrapper>
          <FormBoarder>
            <Title>
              {"Profile"}
            </Title>
            <Form
              action="/d/uers"
              accept-charset="UTF-8"
              method="post"
              >
              <Notes>Tell us about your special one...</Notes>
              <InputWrapper>
                <SizedFormInput
                  size={"45%"}
                  type={"email"}
                  required
                  placeholder={"child's first name"}
                />
                <ProfileSelectBox options={this.state.gender} size={"45%"}/>
              </InputWrapper>
              <InputWrapper>
                <ProfileSelectBox options={this.state.topSize} size={"45%"}/>
                <ProfileSelectBox options={this.state.bottomSize} size={"45%"}/>
              </InputWrapper>
              <Notes>Enter your child's birthday:</Notes>
              <InputWrapper>
                <ProfileSelectBox options={this.state.month} size={"25%"}/>
                <ProfileSelectBox options={this.state.day} size={"25%"}/>
                <ProfileSelectBox options={this.state.year} size={"25%"}/>
              </InputWrapper>
            </Form>
          </FormBoarder>
        </FormWrapper>
        <Footer />
      </BackgroundWrapper>
    )
  }
}

var dayGen = function() {
    var arr = [];
    for(var i = 2002; i <= 2018; i++) {
        arr.push(i);
    }
    console.log(arr);
}
