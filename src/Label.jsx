import styled from "styled-components";

export default styled.p`
  background-color: transparent;
  padding: 2px;
  margin: 5px;

  text-align: center;
  color: whitesmoke;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5rem;
  font-size: ${props => props.size || 2.5}rem;
`;
