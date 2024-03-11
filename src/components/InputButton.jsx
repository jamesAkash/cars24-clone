import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--primary-bg);
  border: none;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: clamp(14px, 1.2vw, 18px);
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;

  @media (max-width: 820px) {
    padding: 8px 12px;
  }
`;

const InputButton = ({ children, icon, location }) => {
  return (
    <Button>
      {location && location}
      {children}
      {icon}
    </Button>
  );
};

export default InputButton;
