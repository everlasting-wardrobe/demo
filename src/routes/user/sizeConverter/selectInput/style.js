import styled from 'styled-components';


export const ItemList = styled.div`
    position: relative;
    width: 93%;
    height: 7em;
    margin-left: 4%;
    background-color: lightgray;
    z-index: 100;
    text-align: center;
    overflow: scroll;
    display: ${props => props.open? 'block': 'none'};
    div:hover {
        background-color: gray;
        cursor: pointer;
    }
`;

export const DisplayBar = styled.div`
    width: 99%;
    background-color: transparent;
    border: none;
    height: 34%;
    text-align: center;
    position: absolute;
    top: 33%;
    left: 1%;
    z-index: 10;
    padding-right: 20%;
    font-size: 1em;
`;

export const SearchBar = styled.input`
    width: 99%;
    background-color: transparent;
    border: none;
    height: 34%;
    text-align: center;
    position: absolute;
    top: 28%;
    left: 1%;
    z-index: 10;
    padding-right: 20%;
    font-size: 1em;
`;

export const EntryBackground = styled.img`
    width: 100%;
    z-index: 1;
`;