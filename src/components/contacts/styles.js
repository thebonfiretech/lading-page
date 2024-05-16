import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-style: none;
  padding: 15px;
  display: flex;
  width: 95%;
  height: 4vh;
  margin: 30px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px; 
    padding: 2px;
    background: linear-gradient(100deg, #0139FE 0%, #029ECF 47%, #00FFB2 100%);
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }

  @media (max-width: 820px) {
   border-image-source: linear-gradient(100deg, #0139FE 0%, #029ECF 47%, #00FFB2 100%);
    border-image-slice: 1; 
    border-style: solid;
    border-width: 2px;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
    padding: 20px;
    &::before {
      display: none;
    }
  }
`;

export const SocialRede= styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  widht: 100%;
  gap: 15px;

  @media (max-width: 820px) {
    & p{
      display: none;
    }
    
  }
`

export const BussinessInfo = styled.div`
  color:  ${({ theme }) => theme.colors.text};
  font-weight: 600;
  display: flex;
  
 & p{
   padding-left: 10px;
 }
`


