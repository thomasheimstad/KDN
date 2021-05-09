import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import { chunk, sum } from 'lodash';
import { Box } from 'rebass';
import { navigate } from "gatsby";

const Masonry2 = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => {
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
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <Box
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
          )}
          css={{ display: 'inline-block' }}>
            <GatsbyImage image={image} to={image.path} alt={`Photo by: `} onClick={(()=> navigate(image.path))} />
          </Box>
      ))}
    </div>
  );
};

export default Masonry2;
