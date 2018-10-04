import React, {Fragment} from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import { Transition, Spring, animated } from 'react-spring';
import Nav from '../components/Nav/Nav';
import '../css/styles.scss';

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
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children, location, state } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
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
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => <animated.div style={{ ...styles}} className="app-wrapper">
              {this.getLocalTitle() === "Home" ? <Nav home /> : <Nav/>}
              {children}
            </animated.div>}
        </Spring>

      </Fragment>
    );
  }
}
