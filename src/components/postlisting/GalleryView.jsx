import React from 'react';
import { useWindowDimensions } from '../context/WindowDimensionsProvider';
import { Link } from "gatsby";
import Img from "gatsby-image";
import {MdFileDownload} from "react-image/md";

const GalleryView = (props) => {
  const { windowHeight, windowWidth, footerHeight } = useWindowDimensions();
  return(
    <div className="flex center column" style={{width: '100%'}}>
      <div className="flex row wrap basePad center" style={{minHeight: windowHeight-footerHeight}}>
        {/* Your post list here. */
        props.postList.map(post => (
          <div className="card" key={post.title} style={{padding: '0'}}>
            <Link to={post.path}>
              <div className="flex center">
                <Img fluid={post.img.childImageSharp.fluid} style={{width: '400px'}}/>
                <div className="flex center row">
                  <h4>Photo by: {post.photo}</h4>
                  <a
                    id="downloadImageButton"
                    href={post.img.childImageSharp.fixed.src}
                    download={`Kari Dahl Nielsen - Photo by ${post.photo}.jpg`}
                    >
                    <MdFileDownload className="iconz" size={30} />
                  </a>
                </div>
                {/*<div className="cardMeta flex column">
                  <h2>{post.title}</h2>
                  <h4>{post.date}</h4>
                </div>*/}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default GalleryView;
