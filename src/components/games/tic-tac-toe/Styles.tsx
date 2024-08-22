import styled from "styled-components";
import { Button } from "antd";

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(1fr, auto);
`;
export const Cell = styled(Button).attrs(() => {
  return {};
})`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
