import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./components/Home";
import TicTacToe from "./components/games/tic-tac-toe/TicTacToe";
import Snake from "./components/games/snake/Snake";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/tic-tac-toe",
      element: <TicTacToe />
    },
    {
      path: "/snake",
      element: <Snake />
    }
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00b96b",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed"
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
