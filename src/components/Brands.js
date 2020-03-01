import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
const Container = styled.div`
  width: 100%;
  background-image: url(${require("../images/bg.png")});
  padding: 4em 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto Slab";
  align-items: center;
  .brands {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    grid-gap: 15%;
    grid-row-gap: 3em;
    margin-bottom: 4em;
    margin-top: 3em;
  }
  .img {
    margin: 2em 2em;
  }
  h6 {
    font-family: "Caveat";
    font-weight: 700;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.4);
  }
  h3 {
    margin-top: 0.25em;
    font-size: 24px;
    font-weight: 700;
  }
`;
const Brands = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "brands" } }) {
        nodes {
          childImageSharp {
            fixed(width: 200, height: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);
  return (
    <Container>
      <h6>Our Clients</h6>
      <h3>Brands We Served</h3>
      <div className="brands">
        {data.allFile.nodes.map((node, index) => (
          <Image
            fixed={node.childImageSharp.fixed}
            alt="brand"
            className="img"
          />
        ))}
      </div>
    </Container>
  );
};

export default Brands;
