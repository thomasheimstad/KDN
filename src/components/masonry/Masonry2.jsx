import React, {useState, useEffect, useContext} from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import { chunk, sum } from 'lodash';
import { Box } from 'rebass';
import { navigate } from "gatsby";
import {Imagelistcontext} from '../context/Imagelistprovider';

const Masonry2 = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const { imageCategorySelector, setImageCategorySelector } = useContext(Imagelistcontext);
  const imageListPortraitSort = () => {
    let portraits = images.filter(x=> x.caption.includes("Portraits"));
    return portraits;
  }
  const imageListStillsSort = () => {
    let stills = images.filter(x=> x.caption.includes("KGLTeater"));
    return stills;
  }
  const [imageList, setImageList] = imageCategorySelector === "Portraits" ? useState(imageListPortraitSort) : useState(imageListStillsSort);

  const aspectRatios = imageList.map(image => {
    let aspectRatio = image.width/image.height;
    return aspectRatio;
  });

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        // Sum aspect ratios of images in the given row
        sum(rowAspectRatios),
      ),
  );
  let handleClick = (o,e) => {
    e = e || window.event;
    e.preventDefault();

    if(o === "KGLTeater" && imageCategorySelector !== "KGLTeater"){
      setImageCategorySelector("KGLTeater");
      setImageList(imageListStillsSort);
    } else if(o === "Portraits" && imageCategorySelector !== "Portraits"){
      setImageCategorySelector("Portraits");
      setImageList(imageListPortraitSort);
    } else {
    }
    console.log(`From handleClick: ${imageCategorySelector}`)
  }
  return (
    <div className="gallery basePad" style={{paddingBottom: '0'}}>
      <div className="flex center basePad buttons">
        <div className="button" onClick={((e)=>handleClick('Portraits'))}><h3>Portraits</h3></div>
        <div className="button" onClick={((e)=>handleClick('KGLTeater'))}><h3>Stills</h3></div>
      </div>
      <div className="imageListWrapper flex center wrap">
      {imageList.map((image, i) => (
        <Box
          className="imageWrapper"
          key={image.caption}
          image={image}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            // Return a value for each breakpoint
            (rowAspectRatioSums, j) => {
              // Find out which row the image is in and get its aspect ratio sum
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
              const aspectRatio = image.width/image.height;
              return `${(aspectRatio / rowAspectRatioSum) * 100}%`;
            },
          )}>
            <GatsbyImage image={image} alt={image.caption} onClick={(()=> navigate(image.path))} />
          </Box>
      ))}
      </div>
    </div>
  );
};

export default Masonry2;
