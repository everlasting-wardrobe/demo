import styled from 'styled-components';
import {UnderlinedInput} from '../../components/input';
import {ProfileSelect, ProfileOption} from '../../components/select';
import {
  EWColors,
  EWFF,
  H2,
  H3,
  H4,
  NavTab,
  URLBackgroundWrapper,
  FlexCol,
  FlexRow,
  Img,
} from '../../components/globals';
import {NavButton} from '../../components/buttons';
import {InputBoarderWrapper} from '../../components/wrapper';
import {
  RedButtonLink,
  TransparentButtonLink,
} from '../../components/link';

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

export const HugeTitle = styled(Title)`
  font-size: 6em;
  color: white;
`;

export const LargeTitle = styled(Title)`
  font-size: 4.5rem;
  margin-bottom: 0;
  color: rgb(231, 90, 80);
`;

export const SubTitle = styled(H3)`
  font-size: 2.2em;
  color: white;
  font-weight: 300;
`;

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

export const RespMarginStepsBar = styled(StepsBarWrapper)`
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 900px) {
    margin-bottom: -37px;
  }
  @media(min-width: 1300px) {
    padding-top: 60px;
    margin-bottom: -47px;
  }
`;

export const StyledNavButton = styled(NavButton)`
  width: 30%;
  margin: auto;
  margin-top: 45px;
  @media (max-width: 600px){
    width: 100%;
  }
`
export const RspBackgroundWrapper = styled(BackgroundWrapper)`
  @media (max-width: 650px) {
    background-size: 650px;
  }
`;


// LANDING PAGE

//slogan section

export const RockButton = styled(RedButtonLink)`
  margin: 0 auto;
  margin-top: 6rem;
  font-size: 2rem;
  padding: 1.5rem 1.5rem;
  width: max-content;

  @media (max-width: 1150px) {
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

`;

export const SloganBackgroundWrapper = styled(URLBackgroundWrapper)`
  padding-top: 10%;
  @media (max-width: 1150px) {
    background-size: 1150px;
    font-size: 12px;
  }

  @media (max-width: 850px) {
    font-size: 9px;
  }
  @media (max-width: 700px) {
    background-position: center;
  }
  @media (max-width: 450px) {
    font-size: 7px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
`;

//How it work

export const HIWStepWrapper = styled(FlexCol)`
  width: 100%;
  @media (min-width: 770px) {
    width: 50%;
  }
  @media (min-width: 990px) {
    width: 23%;
  }
`;

export const HIWTitle = styled(LargeTitle)`
  @media (max-width: 770px) {
    font-size: 2.5rem;
  }
`;
export const HIWStepTitle = styled(SubTitle)`
  color: black;
  font-weight: 300;
`;
export const DscrptText = styled.p`
  font-family: Lato;
  line-height: 2.5rem;
  font-size: 1.2rem;
  color: rgb(142,141,138);
  font-style: italic;
  margin: 0 0.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border-width: 3rem;
  font-weight: 300;
  text-align: center;

  @media (min-width: 770px) {
    line-height: 1.5rem;
  }
  @media (min-width: 1100px) {
    line-height: 2.5rem;
  }
`;
export const HIWStepComboWrapper = styled(FlexRow)`
  margin: 0 150px;
  padding-top: 90px;
  align-items: normal;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 990px) {
    margin: 0 10%;
  }
`;

export const HIWStepIcon = styled(Img)`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

//benefit section

export const BenefitWrapper = styled(FlexRow)`
  background-color: ${EWColors.burntSienna};
  width: 100%;
  padding: 5rem 8rem;
  justify-content: space-around;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const BenefitTitle = styled(H3)`
  font-size: 2.5rem;
  width: 33rem;
  color: white;
  line-height: 3.5rem;
  font-weight: 300;

  @media (max-width: 1100px) {
    font-size: 1.8rem;
    width: 25rem;
  }
`;

export const BenefitLink = styled(TransparentButtonLink)`
  margin-bottom: 0.5rem;
  transition: ease all .4s;

  @media (max-width: 1100px) {
    font-size: 1.2rem;
    width: 15rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;

export const BenefitLinksWrapper = styled(FlexCol)`
  width: 19rem;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-top: 3rem;
  }
`;

//Recycle
export const RecIcon = styled(Img)`
  width: 8.5rem;
  height: 8.5rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const RecTitle = styled(HIWStepTitle)`
  font-family: Handlee;
  font-size: 2rem;
`;

export const RecDscrpt = styled(DscrptText)`
  font-size: 1.5rem;
  color: black;
  font-style: normal;
`;

export const RecStepWrapper = styled(FlexCol)`
  width: 100%;
  @media (min-width: 770px) {
    width: 45%;
  }
`;

export const RecStepComboWrapper = styled(HIWStepComboWrapper)`
  @media (min-width: 990px) {
    margin: 0 200px;
  } 
`;