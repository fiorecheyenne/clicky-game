import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  padding: 0;
  border: 0.33rem solid white;
  box-shadow: 4px 4px 8px darkgrey;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  :focus {
    outline: none;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  min-width: 100%;
  margin: auto;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0%);
`;

export default function Button({ children, img, alt, onClick, w, h }) {
  return (
    <StyledButton onClick={typeof children == "function" ? children : onClick}>
      <StyledImg src={img} alt={alt} />
    </StyledButton>
  );
}
