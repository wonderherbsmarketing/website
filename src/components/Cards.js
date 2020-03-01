import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 5em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 5%;
  font-family: "Roboto Slab";
  .card {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 2.5em;
    color: #73787b;
    position: relative;
  }
  h1 {
    color: #eaf4dd;
    font-weight: 700;
    font-size: 103px;
    position: absolute;
    top: 0.25em;
    z-index: -1;
  }
  h4 {
    font-weight: 500;
    margin-top: 2em;
  }
  p {
    font-size: 15px;
    margin-top: 2em;
    text-align: center;
  }
`;
const Cards = () => {
  return (
    <Container>
      <div className="card">
        <h1>01</h1>
        <h4>Natural Process</h4>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
      <div className="card">
        <h1>02</h1>
        <h4>Healthy Products</h4>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
      <div className="card">
        <h1>03</h1>
        <h4>Full of Vitamins</h4>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
          Maecenas tempus, tellus eget condimentum.
        </p>
      </div>
    </Container>
  );
};

export default Cards;
