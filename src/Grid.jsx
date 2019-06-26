import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem 1rem;
  padding: 2rem 1rem;
  width: ${props => props.width || 600}px;
  height: ${props => props.height || 450}px;
  margin: auto;
`;
