import React from 'react';
import {graphql} from 'gatsby';
import ImageGallery from 'react-image-gallery';
import Layout from '../components/layout';
import {MdFileDownload} from 'react-icons/md';

export default class Gallery extends React.Component {
  state = {
    imageArray: [],
    imageFullsizeArray: [],
    imageIndex: 0,
    imageSrc: ''
  }
  galleryMapper = (data) => {
    const images = [];
    const imagesFull = [];
    data.imgCarousel.edges.map((edge, i) => {
      images.push({
        'original': edge.node.childImageSharp.fluid.src
      })
    })
    data.imgCarouselFull.edges.map((edge, i) => {
      imagesFull.push({
        'fullsize': edge.node.childImageSharp.fluid.originalImg
      })
    })
    images.sort(function(a, b) {
      let textA = a.original.toUpperCase();
      let textB = b.original.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    imagesFull.sort(function(a, b) {
      let textA = a.fullsize.toUpperCase();
      let textB = b.fullsize.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({
      imageArray: images,
      imageFullsizeArray: imagesFull,
      imageSrc: imagesFull[0].fullsize
    })
  }
  componentDidMount = () => {
    this.galleryMapper(this.props.data)
  }
  handleClick = (ert) => {
    console.log(ert)
  }
  handleImageLoad = (event) => {
    this.setState({
      imageIndex: event,
      imageSrc: this.state.imageFullsizeArray[event].fullsize
    })
  }
  render = () => {
    const images = [...this.state.imageArray]
    return (
      <Layout location={this.props.location}>
         <div id="frontGallery" style={{height: '100%'}}>
           <ImageGallery
             items={images}
             showThumbnails={false}
             showPlayButton={false}
             slideDuration={225}
             onSlide={this.handleImageLoad}
           />
         </div>
         <a
           id="downloadImageButton"
           href={this.state.imageSrc}
           download={`Kari Dahl Nielsen ${this.state.imageIndex+1}.jpg`}
           onClick={this.consoleLogMe}
           style={{
             position: 'absolute',
             bottom: '0',
             left: '0',
             right: '0',
             marginLeft: '0.5rem',
             marginRight: 'auto',
             width: '42px',
           }}>
           <MdFileDownload className="iconz" size={42} />
         </a>
       </Layout>
     )
  }
}
export const query = graphql`
  query queryImmms {
    imgCarousel: allFile(
      filter: { sourceInstanceName: { eq: "gallery" } }
    ) {
      edges {
        node {
          sourceInstanceName
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    imgCarouselFull: allFile(
      filter: { sourceInstanceName: { eq: "gallery" } }
    ) {
      edges {
        node {
          sourceInstanceName
          childImageSharp {
            fluid(maxWidth: 6000, quality: 100) {
              originalImg
            }
          }
        }
      }
    }
  }
`;
