import styled, {css} from 'styled-components';

export const BurgerSlice = styled.span`
    background-color: #888;
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
`;

export const BurgerWrapper = styled.div`
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px 10px;
    padding: 5px 9px;
    cursor: pointer;
    &:hover { 
        background-color: #ddd;
    }

    @media (min-width: ${props => props.hideAt}) {
        display: none;
    }
`;