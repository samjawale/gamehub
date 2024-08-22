import { useState } from "react";

export type Player = "X" | "O";
export type Cell = Player | "";
export type Board = Array<Array<Cell>>;

export type Row = 0 | 1 | 2;
export type Col = Row;

type Return = {
  board: Board;
  currentPlayer: Player;
  winnerPlayer: Player | undefined;
  markPlayer: (row: Row, col: Col) => void;
};
const useTicTacToeEngine = (): Return => {
  const [board, setBoard] = useState<Board>(new Array(3).fill("").map(() => new Array(3).fill("")));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winnerPlayer, setWinnerPlayer] = useState<Player>();

  const checkWinner = (board: Board) => {
    if (
      board[0][0] !== "" &&
      // topmost row
      ((board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
        // leftmost column
        (board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
        // top-left to bottom-right diagonal
        (board[0][0] === board[1][1] && board[0][0] === board[2][2]))
    ) {
      setWinnerPlayer(board[0][0]);
    }

    // middle column
    if (board[0][1] !== "" && board[0][1] === board[1][1] && board[0][1] === board[2][0]) {
      setWinnerPlayer(board[0][1]);
    }

    if (
      board[0][2] !== "" &&
      // rightmost column
      ((board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
        // top-right to bottom-left diagonal
        (board[0][2] === board[1][1] && board[0][2] === board[2][0]))
    ) {
      setWinnerPlayer(board[0][2]);
    }

    // middle row
    if (board[1][0] !== "" && board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
      setWinnerPlayer(board[1][0]);
    }

    // bottom row
    if (board[2][0] !== "" && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
      setWinnerPlayer(board[2][0]);
    }

    // no winner yet
  };

  const markPlayer = (row: Row, col: Col) => {
    if (board[row][col] === "O" || board[row][col] === "X") return;

    const newBoard = board.slice();
    newBoard[row][col] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    checkWinner(newBoard);
  };

  return { board, currentPlayer, winnerPlayer, markPlayer };
};

export default useTicTacToeEngine;
