import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 5em auto;
  display: flex;
  justify-content: space-around;
  grid-gap: 5%;
  flex-wrap: wrap;
  .grid-item {
    color: #808891;
    max-width: 500px;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 10px;
  }
  p {
    font-size: 13px;
    margin-top: 2em;
    margin-bottom: 2em;
    text-align: left;
    font-weight: 500;
  }
  h6 {
    font-weight: 700;
    font-size: 15px;
  }
  .logo {
    width: 167px;
    height: 100px;
  }
  .btn {
    transition: all 0.8s ease;
    outline: none;
    border: none;
    padding: 6px 24px 6px 24px;
    border-radius: 50px;
    background-color: #84be38;
    color: #fff;
    border: 2px solid #84be38;
    transition: all 0.4s;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: transparent;
      color: #84be38;
    }
  }
  input {
    outline: none;
    border: none;
    background: #ececec;
    padding: 10px 0px 10px 16px;
    margin-right: 0.5em;
    border-radius: 50px;
    margin-bottom: 1em;
  }
  .pntr {
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      color: #84be38;
    }
  }
  svg {
    fill: #84be38;
    margin-right: 0.7em;
    transform: translateY(0.26em);
  }
`;
const Contact = () => {
  return (
    <Container>
      <div className="grid-item">
        <img
          src={require("../images/logo-dark.png")}
          alt="item"
          className="logo"
        />
        <p>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
        </p>
        <form>
          <input placeholder="Your Email Adress" type="text" />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
      <div className="grid-item">
        <h6>CONTACT</h6>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <span>63739 Street B:9 City, Country</span>
        </p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg><span>+1 123 312 32 23</span></p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/></svg><span>+1 123 312 32 23</span></p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg><span>info@company.com</span></p>
      </div>
      <div className="grid-item">
        <h6>LINKS</h6>
        <p className="pntr">HOME</p>
        <p className="pntr">PORTFOLIO</p>
        <p className="pntr">CONTACT</p>
        <p className="pntr">ABOUT</p>
      </div>
    </Container>
  );
};

export default Contact;
