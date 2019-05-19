import React, {Fragment} from "react";
import Helmet from "react-helmet";
import WindowDimensionsProvider from '../components/context/WindowDimensionsProvider';
import siteConfig from "../../data/SiteConfig";
import { useSpring, animated, config } from 'react-spring';
import Nav from '../components/Nav/Nav';
import '../css/styles.scss';

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
    percentage: 0,
    windowHeight: '',
    windowWidth: '',
  }
  handleScroll = () => {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight',
        ih = this.state.windowHeight;
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - (ih)) * 100;
    this.setState({
      percentage: percent
    })
  }
  handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        this.setState({
          windowWidth: x,
          windowHeight: y
        })
  }
  componentDidMount = () => {
    this.handleScroll();
    this.handleResize();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.handleResize);
  }
  render() {
    const { children, location, state } = this.props;
    return (
      <>
        <WindowDimensionsProvider>
        <Helmet>
          <title>{`${config.siteTitle} |  `}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Nav/>
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
        </WindowDimensionsProvider>
      </>
    );
  }
}
