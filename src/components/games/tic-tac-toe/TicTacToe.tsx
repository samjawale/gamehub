import React from "react";
import { Space } from "antd";
import useTicTacToeEngine, { Col, Row } from "../../../hooks/useTicTacToeEngine";
import { Board, Cell } from "./Styles";

const TicTacToe: React.FC = () => {
  const { board, currentPlayer, markPlayer, winnerPlayer } = useTicTacToeEngine();

  return (
    <Space direction="vertical">
      Current Player is: {currentPlayer}
      {winnerPlayer ? `Winner is: ${winnerPlayer}` : null}
      <Board>
        {board.map((boardRow, row) =>
          boardRow.map((cell, col) => {
            return (
              <Cell
                key={`cell-${row}-${col}`}
                disabled={!!winnerPlayer || !!cell}
                onClick={() => markPlayer(row as Row, col as Col)}
              >
                {cell}
              </Cell>
            );
          })
        )}
      </Board>
    </Space>
  );
};

export default TicTacToe;
