import React, {Fragment} from 'react';
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import {MdFileDownload} from "react-icons/md";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';

const Imageinfo = (props) => {
  const { windowHeight} = useWindowDimensions();
  const imageSource = getSrc(props.post.img);
  return (
    <>
    <div className="image flex center basePad">
      <div className="imgWrap">
        <GatsbyImage image={props.post.img.childImageSharp.gatsbyImageData} alt=""/>
        <div className="buttons flex center row basePad">
          <h4>Photo by: {props.post.photo}</h4>
          <a
            id="downloadImageButton"
            href={imageSource}
            download={`${props.post.title}-photo-${props.post.photo}.jpg`}
            >
            <div className="button"><MdFileDownload className="iconz" size={30} /></div>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
export default Imageinfo;