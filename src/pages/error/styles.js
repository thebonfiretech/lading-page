import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`;

export const Box = styled.div`
    text-align: center;
    border-radius: 5px;
    padding: 0 10%;

    & > h1 {
        letter-spacing: 4px;
        font-weight: 700;
        font-size: 110px;
    }

    @media (max-width: 678px) {
        padding: 0;
        & > h1 {
            font-size: 80px;
        }
    }
`;

export const Position = styled.div`
    transform: ${({ rotate }) => `rotate(${rotate})`};
    margin-left: ${({ margin }) => margin};
    margin-top: ${({ top }) => top};

    @media (max-width: 678px) {
        margin-left: ${({ mobileMargin }) => mobileMargin};
    }
        
`;

export const Message = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;

    & > p {
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 20px;
        width: 100%;
    }

    @media (max-width: 678px) {
        & > p {
            font-size: 18px;
        }
    }
`;

export const Icon = styled.div`
    border: solid 2px #fff;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    display: flex;
    height: 68px;
    width: 72px;

    @media (max-width: 678px) {
        height: 60px;
        width: 68px;
    }
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.gradient};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    box-sizing: border-box;
    transition: ease 0.2s;
    letter-spacing: 1px;
    border-radius: 5px;
    font-weight: 800;
    cursor: pointer;
    width: 300px;
    border: none;
    height: 45px;

    &:hover {
        opacity: 81%;
    }

    @media (max-width: 678px) {
        width: 200px;
    }
`;
