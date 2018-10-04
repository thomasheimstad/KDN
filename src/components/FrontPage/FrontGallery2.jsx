import React from 'react';
import NavLink from 'gatsby-link';
import { Parallax, ParallaxLayer } from 'react-spring'
const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)

const scroll = to => this.refs.parallax.scrollTo(to)
const FrontGallery2 = ({ transition }) => (
  <div style={transition && transition.style}>
    <Parallax
      className="container"
      ref="parallax"
      pages={3}
      horizontal
      scrolling={false}
    >
      <Page
        offset={0}
        gradient="pink"
        caption="who we are"
        first="Lorem ipsum"
        second="dolor sit"
        onClick={() => this.scroll(1)}
      />
      <Page
        offset={1}
        gradient="teal"
        caption="what we do"
        first="consectetur"
        second="adipiscing elit"
        onClick={() => this.scroll(2)}
      />
      <Page
        offset={2}
        gradient="tomato"
        caption="what we want"
        first="Morbi quis"
        second="est dignissim"
        onClick={() => this.scroll(0)}
      />
    </Parallax>
    <div>
      <NavLink to="/page-2/">Go to cat</NavLink>
    </div>

  </div>
)
export default FrontGallery2;
