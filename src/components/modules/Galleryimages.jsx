import React from 'react';
import {MdFileDownload} from 'react-icons/md';
import { GatsbyImage } from "gatsby-plugin-image";

const Galleryimages = (props) => {
  const images = props.images;
    return (
      <div className="galleryImages flex">
          {images.map((x, i) => {
            console.log(x.original)
            return (
                <div className="flex column wrap" key={i}>
                  <div style={{width: '100%'}}>
                    <GatsbyImage image={x.original.constrained} />
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
export default Galleryimages;
