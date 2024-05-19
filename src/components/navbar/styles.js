import styled from 'styled-components';

export const Container = styled.div`
    justify-content: space-between;
    padding-top: 30px;
    display: flex;
    height: 56px;
    width: 90%;

    & .buttonMobile{
        display: flex;
        gap: 15px;
    }

    & .link{
        display: block;
    }


     @media (max-width: 820px) {
        .buttonMobile {
            display: none;
        }
    }

    & svg{
        cursor: pointer;
        display: none;

        @media (max-width: 820px) {
            display: block;
        }
    }
`;

export const LogoArea = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;

    & img {
        height: 6vh;
    }

    & p {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 17px;
    }
    
`;

export const NavigationArea = styled.div`
    align-items: center;
    display: flex;
    gap: 30px;
    padding: 20px;
  

    & a {
        text-transform: capitalize;
         transition: all 1s ease;
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
        color: white;
    }

    & a:hover{
        color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 820px) {
        display: none;
  
    }

`;

