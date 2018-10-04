import React from 'react';
import {graphql} from 'gatsby';
import ImageGallery from 'react-image-gallery';
import Layout from '../components/layout';

export default class Gallery extends React.Component {
  state = {
    imageArray: []
  }
  galleryMapper = (data) => {
    const images = [];
    data.imgCarousel.edges.map((edge, i) => {
      images.push({'original': edge.node.childImageSharp.fluid.src})
    })
    images.sort(function(a, b) {
      let textA = a.original.toUpperCase();
      let textB = b.original.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({
      imageArray: images
    })
    console.log(images)
  }
  componentDidMount = () => {
    this.galleryMapper(this.props.data)
  }
  handleClick = (ert) => {
    console.log(ert)
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
           />

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
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
