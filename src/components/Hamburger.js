import React from "react";
import styled from "styled-components";

function Hmburger({ color }) {
  const Container = styled.div`
    svg {
      fill: #84be38;
      cursor: pointer;
    }
  `;
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </Container>
  );
}

export default Hmburger;
