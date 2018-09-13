import styled from 'styled-components';
import {UnderlinedInput} from '../../components/input';
import {ProfileSelect, ProfileOption} from '../../components/select';
import {
  EWColors,
  EWFF,
  H2,
  H4,
  NavTab
} from '../../components/globals';
import {NavButton} from '../../components/buttons';
import {InputBoarderWrapper} from '../../components/wrapper';

export const UserPanelWrapper = styled.div`
  background-color: ${EWColors.background};
`

export const BackgroundWrapper = styled.div`
  background-image: url('https://res.cloudinary.com/xiaoxu/image/upload/v1536171244/work/signup_background_min-d8cc193cb5ffee99872fd2db525c0156d5e13155fa9e8abbc8a4322233ab7fad.jpg');
  background-size: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
`
export const FormBoarder = styled(InputBoarderWrapper)`
  transition: ease all 0.4s;
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
  margin-bottom: 45px;
`

export const InputWrapper = styled.div`
  margin: 30px;
  text-align: center;
`

export const FormWrapper = styled.div`
  margin: auto;
  transition: ease all 0.4s;
  @media (min-width: 1300px){
    padding: 6% 0 6% 0;
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
  text-align: center;
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

export const NavLink = styled(NavTab)`
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
  transition: ease all .4s;
  @media (max-width: 800px){
    width: 80%;
  }
  @media (max-width: 600px){
    width: 100%;
  }
`

export const IframePlaceholder = styled.div`
  width: 100%;
  padding-bottom: 56.35%;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

export const Notes = styled(H4)`
  display: block;
  margin: 0 auto;
  width: max-content;
  color: #999;
`;

export const SizedFormInput = styled(FormInput)`
  width: ${props => props.size};
  margin: 10px;
`;

export const SelectorWrapper = styled.div`
  display: inline-block;
  margin: 10px;
  position: relative;
  width: ${props => props.size};
`;

export const DropdownArrowWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
  z-index: 10;
`;

export const IncompletedCircle = styled.span`
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  display: inline-block;
  background-color: #ffffff;
  border: 4px solid #e75a50;
`;

export const CompletedCircle = styled(IncompletedCircle)`
  background-color: #e75a50;
`;

export const ConnectBar = styled.span`
  background-color: #e75a50;
  display: inline-block;
  width: 5em;
  height: 5px;
  box-shadow: 1px 1px 1px 1px;
`;

export const StepsBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin: auto;
`;
export const StyledNavButton = styled(NavButton)`
  width: 30%;
  margin: auto;
  margin-top: 45px;
  @media (max-width: 600px){
    width: 100%;
  }
`
