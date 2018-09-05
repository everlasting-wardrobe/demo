import styled from 'styled-components';



export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const Input = styled.input`
font-family: inherit;
font-size: inherit;
line-height: inherit;
display: inline-block;
background-color: transparent;
border: none;
outline: none;
border-bottom: 1px solid #c1c1c1;
&:focus {
  border-bottom: 2px solid #e75a50;
}
`;
