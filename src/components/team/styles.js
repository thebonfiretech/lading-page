import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 100px 0;
  display: flex;
  height: auto;
  width: 100vw;
  gap: 24px;


`;

export const MembersContainer = styled.div`
  justify-content: space-around;
  flex-direction: row;
  display: flex;
  width: 100%;
  gap: 36px;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
