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
    imageSrc: '',

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
  imageGalleryMapper = (data) => {
    const images = [];
    const imagesFull = [];
    data.imageGallery.edges.map((x, i) => {
      images.push({
        'original': x.node.childMarkdownRemark.frontmatter.img.childImageSharp.fluid.src,
        'description': x.node.childMarkdownRemark.frontmatter.copyright,
        'originalAlt': x.node.childMarkdownRemark.frontmatter.description,
        'originalTitle': x.node.childMarkdownRemark.frontmatter.copyright,
        'originalImg': x.node.childMarkdownRemark.frontmatter.img.childImageSharp.fixed.src,
        'sorting': x.node.childMarkdownRemark.frontmatter.sorting
      })
    })
    images.sort(function(a, b) {
      let textA = a.sorting;
      let textB = b.sorting;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({
      imageArray: images,
      imageSrc: images[0].originalImg,
      imageDescription: images[0].description
    })
  }
  componentDidMount = () => {
    //this.galleryMapper(this.props.data)
    this.imageGalleryMapper(this.props.data);
    console.log(this.props.data)
  }
  handleImageLoad = (event) => {
    this.setState({
      imageIndex: event,
      imageSrc: this.state.imageArray[event].originalImg,
      imageDescription: this.state.imageArray[event].description
    })
  }
  render = () => {
    const images = [...this.state.imageArray]
    return (
      <Layout location={this.props.location}>
         <div id="frontGallery" style={{position: 'relative'}}>
           <ImageGallery
             items={images}
             showThumbnails={false}
             showPlayButton={false}
             slideDuration={225}
             onSlide={this.handleImageLoad}
           />
           <a
             id="downloadImageButton"
             href={this.state.imageSrc}
             download={`Kari Dahl Nielsen - Photo by ${this.state.imageDescription}.jpg`}
             style={{
               position: 'absolute',
               bottom: '0',
               left: '0',
               right: '0',
               marginLeft: '0.5rem',
               marginRight: 'auto',
               width: '42px',
             }}>
             <MdFileDownload className="iconz" size={32} />
           </a>
         </div>
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
            fluid(maxWidth: 1920, quality: 50) {
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
    imageGallery: allFile(
      filter: { internal: { mediaType: { eq: "text/markdown"}}, sourceInstanceName: { eq: "imageGallery"} }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              sorting
              copyright
              description
              img {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 50) {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 6000, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
