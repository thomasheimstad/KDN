import React, {Fragment} from 'react';
import Img from "gatsby-image";
import {MdFileDownload} from "react-icons/md";
import { useWindowDimensions } from '../context/WindowDimensionsProvider';

const ImageInfo = (props) => {
  const { windowHeight} = useWindowDimensions()
  return (
    <>
    <div className="image flex center basePad" style={{minHeight: windowHeight}}>
      <div className="imgWrap">
        <Img fluid={props.post.img.childImageSharp.fluid} />
        <div className="flex center row">
          <h4>Photo by: {props.post.photo}</h4>
          <a
            id="downloadImageButton"
            href={props.post.img.childImageSharp.fixed.src}
            download={`Kari Dahl Nielsen - Photo by ${props.post.photo}.jpg`}
            >
            <MdFileDownload className="iconz" size={30} />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
export default ImageInfo;
