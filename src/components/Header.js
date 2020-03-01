import React, { useState } from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import Image from "gatsby-image";

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 0% 10%;
  position: absolute;
  z-index: 2;
  background: transparent;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .nav-link {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0em 1.2em;
    color: #444;
    margin: 0em 0.5em;
    &:hover {
      color: #757575;
    }
  }
  .active-link {
    color: #84be38;
  }
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 745px) {
    .nav-link {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;
export default function Navbar() {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const openSideBar = () => {
    toggleSideBar(true);
  };
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fixed(width: 167, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Container>
      <nav>
        <Image fixed={data.file.childImageSharp.fixed} />
        <div>
          <Link className="nav-link active-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/">
            Products
          </Link>

          <Link to="/" className="nav-link">
            About
          </Link>

          <Link to="/" className="nav-link">
            Contact
          </Link>

          <Link to="/" className="nav-link">
            Login 
          </Link>
        </div>
      </nav>

      <span
        className="hamburger"
        onClick={() => openSideBar()}
        style={{ position: "absolute", right: "3em", top: "2.3em" }}
      >
        <Hamburger />
      </span>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </Container>
  );
}
