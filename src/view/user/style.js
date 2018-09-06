import styled from 'styled-components';
import {UnderlinedInput} from '../../components/input';
import {
  EWColors,
  EWFF,
  H2
} from '../../components/globals';
import { InputBoarderWrapper } from '../../components/wrapper';
import { NavTab } from '../../components/globals/index';

export const BackgroundWrapper = styled.div`
  background-image: url('https://res.cloudinary.com/xiaoxu/image/upload/v1536171244/work/signup_background_min-d8cc193cb5ffee99872fd2db525c0156d5e13155fa9e8abbc8a4322233ab7fad.jpg');
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
`
export const FormBoarder = styled(InputBoarderWrapper)`
  @media(max-width: 900px){
    padding: 0;
    width: 100%;
    background-size: 120% 100%;
    background-position: center;
  }
`

export const Title = styled(H2)`
  color: ${EWColors.apricot};
  text-align: center;
  font-family: ${EWFF.subtitle};
  padding-top: 45px;
`

export const InputWrapper = styled.div`
  margin: 30px;
  text-align: center;
`

export const FormWrapper = styled.div`
  margin: auto;
  @media (min-width: 1300px){
    padding: 10% 0 10% 0;
    width: 40%;
  }
  @media (max-width: 1299px){
    padding: 45px 0 60px 0;
    width: 60%;
  }
  @media(max-width: 900px){
    padding: 0;
    width: 100%;
  }
`

export const Form = styled.form`
  width: 90%;
  margin: auto;
  padding: 45px 0 60px 0;
`

export const FormInput = styled(UnderlinedInput)`
  width: 100%;
`

export const SubmitInput = styled(FormInput)`
  color: white;
  background-color: ${EWColors.burntSienna};
`
export const CheckBox = styled.div`
  margin: 30px;
  color: grey;
  label {
    margin-left: 5px;
  }
`;

export const ForgotLinks = styled(NavTab)`
  transition: none;
  width: max-content;
  margin: auto;
  line-height: 5px;
  color: ${EWColors.burntSienna};
`;

export const HowItWorkWrapper = styled.div`
  background-color: ${EWColors.background};
`

export const IframeWrapper = styled.div`
  width: 60%;
  position: relative;
  margin: auto;
  margin-top: 60px;
  @media (max-width: 800px){
    width: 80%;
  }
  @media (max-width: 500px){
    width: 100%;
  }
`

export const IframePlaceholder = styled.div`
  width: 100%;
  padding-bottom: 56.2%;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`
