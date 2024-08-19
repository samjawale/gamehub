import styled from "styled-components";

export const Board = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid black;
`;

export const CurrentSnake = styled.div<{ $length: number }>`
  width: ${props => props.$length}px;
  height: 5px;
  position: relative;
  top: 5px;
  left: 5px;
  background-color: black;
`;
