import React, {Fragment} from "react";
import Helmet from "react-helmet";
import WindowDimensionsProvider from '../components/context/WindowDimensionsProvider';
import siteConfig from "../../data/SiteConfig";
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
export default class Layout extends React.Component {
  state = {
    myLocation: ''
  }
  componentDidMount = () => {
    this.setState({
      myLocation: location
    })
  }
  render() {
    const { children, location } = this.props;
    let handleClicker = () => {
      console.log(this.state.myLocation)
    }

    return (
      <>
        <WindowDimensionsProvider>
          <Helmet>
            <title>{`${config.siteTitle} |  `}</title>
            <meta name="description" content={config.siteDescription} />
            <link rel='shortcut icon' type='image/png' href={`${favicon}`} />
          </Helmet>
          {this.state.myLocation.pathname === "/" ? '' : <Nav/>}
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
          { this.state.myLocation.pathname === "/" ||
            this.state.myLocation.pathname === "/contacts" ?
            '' :
            <Footer />
          }
        </WindowDimensionsProvider>
      </>
    );
  }
}
