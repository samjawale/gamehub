import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Space>
      <Button onClick={() => navigate("/tic-tac-toe")}>Tic-Tac-Toe</Button>

      <Button onClick={() => navigate("/snake")}>Snake</Button>
    </Space>
  );
};

export default Home;
