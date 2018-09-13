import styled, { css } from 'styled-components';

export const SizeConverterContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    position: relative;
`;

export const SmartImg = styled.img`
    position: absolute;
    width: ${props => props.params[0]};
    top: ${props => props.params[1]};
    left: ${props => props.params[2]};
    z-index: ${props => props.params[3]};
`;

export const SpinningImg = styled(SmartImg)`
    ${props => props.spinning && css`
        transform: rotate(-360deg);
        transition: 1500ms;
    `}
`;

export const SmartContainer = styled.div`
    width: ${props => props.params[0]};
    height: ${props => props.params[0]};
    position: absolute;
    top: ${props => props.params[1]};
    left: ${props => props.params[2]};
`;

export const PressBtn = styled(SmartImg)`
    cursor: pointer;
    &:active {
        box-sizing: border-box;
        padding: 1px;
    }
`;

export const StepBtnContainer = styled(SmartContainer)`
    text-align: center;
    height: 11%;
    display: flex;
    img {
        width: 24%;
        display: inline-block;
        cursor: pointer;
    }

    img:active {
        box-sizing: border-box;
        padding: 0.5%;
    }
`;

export const InputComboWrapper = styled(SmartContainer)`
    height: 50%;
`;

export const SearchBarWrapper = styled(SmartContainer)`
    font-size: ${props => props.params[3]};
`

export const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 30;
    display: ${props => props.backdropOn? "block" : "none"};
`;