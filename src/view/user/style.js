import styled from 'styled-components';
import {UnderlinedInput} from '../../components/input';
import {
  EWColors,
  EWFF,
  H2
} from '../../components/globals';
import {InputBoarderWrapper} from '../../components/wrapper';


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
