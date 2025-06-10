import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-around;
  align-items: center;
  position: relative;
  display: flex;
  gap: 10px;
`;

export const Circle = styled.div`
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 150px;

  @media (max-width: 820px) {
    width: 137px;
  }
`;

export const TextContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 90px;
  widht: 130px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

export const Position = styled.p`
  padding-top: 5px;
  font-size: 12px;
`;
