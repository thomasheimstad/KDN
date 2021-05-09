import React, {Fragment, useState, useEffect} from "react";
import Helmet from "react-helmet";
import WindowDimensionsProvider from '../components/context/WindowDimensionsProvider';
import Siteconfig from "../../data/Siteconfig";
import { useSpring, animated, config } from 'react-spring';
import Nav from '../components/nav/Nav';
import Footer from "../components/footer/Footer";
import '../css/styles.scss';
import favicon from '../../content/img/logo-512x512.png';

const AniWrapper = (props) => {
  const contentProps = useSpring({ config: config.fast, from: { opacity: 0 }, to: { opacity: 1 } })
  return(
    <animated.div style={contentProps}>
      {props.children}
    </animated.div>
  )
}
const Layout = (props) => {
  let [myLocation, setMyLocation] = useState("");
  useEffect(()=>{
    setMyLocation(props.location.pathname);
  },[])
  const { children } = props;

    return (
      <>
        <WindowDimensionsProvider>
          <Helmet>
            <title>{`${Siteconfig.siteTitle} |  `}</title>
            <meta name="description" content={config.siteDescription} />
            <link rel='shortcut icon' type='image/png' href={`${favicon}`} />
          </Helmet>
          {myLocation === "/" ? '' : <Nav/>}
          {/*<Transition>{children}</Transition>*/}
          {/*<Transition keys={location.pathname}
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)'}}
            leave={{ opacity: 0, transform: 'translate3d(-100%,0,0)' }}>
              {styles => <animated.div style={{ ...styles}} className="app-wrapper">
                {this.getLocalTitle() === "Home" ? <Nav home /> : <Nav/>}
                {children}
              </animated.div>}
          </Transition> */}
          <AniWrapper>
            {children}
          </AniWrapper>
          { myLocation === "/" ||
            myLocation === "/contacts" ?
            '' :
            <Footer />
          }
        </WindowDimensionsProvider>
      </>
    );
  }
  export default Layout;
