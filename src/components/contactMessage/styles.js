import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  height: 820px;
  width: 100%;
  gap: 50px;
`;

export const ContainerForms = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  flex-direction: column;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: left;
  display: flex;
  height: 70%;
  width: 80%;
`;

export const InformationsArea = styled.div`
  flex-direction: column;
  display: flex;
  height: auto;
  width: 80%;
  gap: 20px;
`;
