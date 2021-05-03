import React from 'react';
import {MdFileDownload} from 'react-icons/md';
import Img from "gatsby-image";

export default class GalleryImages extends React.Component {
  handleClick = () => {
    console.log(this.props.images)
  }
  render = () => {
    const {images} = this.props;
    return (
      <div className="galleryImages flex">
          {images.map((x, i) => {
            console.log(x.original)
            return (
                <div className="flex column wrap" key={i}>
                  <div style={{width: '100%'}}>
                    <Img fluid={x.original.fluid} />
                  </div>
                  <div className="flex center column">
                    <p>{x.originalTitle}</p>
                    <a
                      id="downloadImageButton"
                      href={x.originalImg}
                      download={`Kari Dahl Nielsen - Photo by ${x.originalTitle}.jpg`}
                      style={{
                        width: '42px',
                      }}>
                      <MdFileDownload className="iconz" size={32} />
                    </a>
                  </div>
                </div>
            )
        })}
      </div>
    )
  }
}
