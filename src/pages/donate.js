import React, { useState } from "react";
import { Link } from "gatsby";
import { css, jsx } from "@emotion/core";
import { Waypoint } from "react-waypoint";
import { useSpring, animated, config } from "react-spring";
import Layout from "../components/layout";
import Header from "../components/header";
import InfoFooter from "../components/info-footer";
import Footer from "../components/footer";

const DonatePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header />
        <main
          css={css`
            margin-top: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            max-width: 960px;
            margin: 0 auto;
            background: #fff;
            @media only screen and (max-width: 1000px) {
              margin: 0 auto;
              padding: 1rem;
              max-width: 100%;
            }
            h2 {
              color: #000;
              font-size: 4rem;
              text-align: center;
              @media only screen and (max-width: 1000px) {
                text-align: left;
              }
            }

            p {
              color: #000;
              font-size: 1.6rem;
              padding: 0rem;
              margin-bottom: 1rem;
              @media only screen and (max-width: 1000px) {
              }
            }
          `}
        >
          donate!
        </main>
        <InfoFooter />
        <Footer />
      </Layout>
    </React.Fragment>
  );
};

export default DonatePage;
