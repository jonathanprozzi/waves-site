import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { useSpring, animated, config } from 'react-spring';

const LiteBeamProductSection = () => {
  const { litebeamImage } = useStaticQuery(
    graphql`
      query {
        litebeamImage: file(relativePath: { eq: "litebeam.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const [on, toggle] = useState(false);

  const enterLeft = useSpring({
    opacity: on ? 1 : 0,
    transform: on ? `translate3d(0,0,0)` : `translate3d(-100%, 0, 0)`,
  });

  return (
    <React.Fragment>
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          if (!on) toggle(true);
        }}
      />
      <animated.section
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 0vh;
          background: #fff;
          margin: 10rem 5rem;

          @media only screen and (max-width: 1000px) {
            margin-top: 0;
            grid-template-columns: 1fr;
          }
        `}
        style={enterLeft}
        id="litebeam-product-section"
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <Img
            fluid={litebeamImage.childImageSharp.fluid}
            css={css`
              border-radius: 8px;
              box-shadow: 0px 5px 10px rgba(123, 167, 255, 0.4);
              width: 100%;
              height: 80%;
              object-fit: cover;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 40%;
            margin: 0 auto;
            max-width: 70%;
          `}
        >
          <h2
            css={css`
              font-size: 4rem;
              padding: 0 4rem;
              @media only screen and (max-width: 1000px) {
                padding: 0;
                margin: 0;
              }
            `}
          >
            Pricing Should Never Be the Barrier to Access
          </h2>
          <p
            css={css`
              font-size: 2rem;
              padding-top: 0;
              padding-bottom: 1.5rem;
              padding-left: 4rem;
              color: #222;
              @media only screen and (max-width: 1000px) {
                padding: 0;
              }
            `}
          >
            $120 install fee.
            <br />
            Minimum $5 donation per month.
          </p>
        </div>
      </animated.section>
    </React.Fragment>
  );
};

export default LiteBeamProductSection;
