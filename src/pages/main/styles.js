import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border: 0.1px solid rgba(255,255,255, 0.1);
    border-radius: 5px;
    padding: 5% 10%;
`