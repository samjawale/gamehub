import React, { useState } from "react";
import { Board, CurrentSnake } from "./Styles";

const Snake: React.FC = () => {
  const [snakeLength] = useState(100);

  return (
    <Board>
      <CurrentSnake $length={snakeLength} />
    </Board>
  );
};

export default Snake;
