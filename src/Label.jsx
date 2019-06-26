import styled from "styled-components";

export default styled.p`
    background-color: white;
    padding: 10px;
    marginL 5px;
    display: table; 
    font-family: "Montserrat", sans-serif;
    font-size: ${props => props.size || 1.2}rem;
    `;
