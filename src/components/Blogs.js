import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 5em auto;
  padding: 2em 10px 0em 10px;
  width: 100%;
  font-family: "Roboto Slab";
  color: #808891;
  .blog-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10em 0em 12em 0em;
  }
  .img {
    width: 450px;
    height: 430px;
  }
  .img-2 {
    width: 306px;
    height: 565px;
  }
  .content {
    max-width: 600px;
    margin: 2em 0em;
  }
  h2 {
    color: #585e56;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1em;
    margin-right: 1em;
  }
  .title-flex {
    display: flex;
  }
  svg {
    margin-top: 0.75em;
  }
  @media only screen and (max-width: 745px) {
    svg{
      display: none;
    }
    .img {
    width: 100% ;
    }
  .img-2 {
    width: 290px;
    } 
  }
`;
const Blogs = () => {
  return (
    <Container>
      <div className="blog-card">
        <div className="content">
          <div className="title-flex">
            <h2>Body Lotions for Everyday Hydration</h2>
            <svg
              width="95"
              height="10"
              viewBox="0 0 95 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
                stroke-width="3"
                stroke="#6CC139"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            porttitor nisl nec ex consectetur, quis ornare sem molestie. Sed
            suscipit sollicitudin nulla tempor congue. Integer sed elementum
            odio. Quisque ullamcorper quis sapien eget lobortis. Vivamus sodales
            varius turpis, et rhoncus arcu mollis vel. Proin tellus mi, dictum
            quis sapien nec, lobortis convallis erat. Cras tincidunt nulla sed
            ligula euismod, a maximus lorem ultricies. In ut pretium erat, id
            tincidunt augue.
          </p>
          <button className="btn-fill">Read more</button>
        </div>
        <img src={require("../images/i1.jpg")} alt="item" className="img" />
      </div>
      <div className="blog-card blog-card-2">
        <img
          src={require("../images/i2.jpg")}
          alt="item"
          className="img img-2"
        />
        <div className="content">
          <div className="title-flex">
            <h2>Best Oil for Skin Moisturizer</h2>
            <svg
              width="95"
              height="10"
              viewBox="0 0 95 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
                stroke-width="3"
                stroke="#6CC139"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            porttitor nisl nec ex consectetur, quis ornare sem molestie. Sed
            suscipit sollicitudin nulla tempor congue. Integer sed elementum
            odio. Quisque ullamcorper quis sapien eget lobortis. Vivamus sodales
            varius turpis, et rhoncus arcu mollis vel. Proin tellus mi, dictum
            quis sapien nec, lobortis convallis erat. Cras tincidunt nulla sed
            ligula euismod, a maximus lorem ultricies. In ut pretium erat, id
            tincidunt augue.
          </p>
          <button className="btn-fill">Read more</button>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
