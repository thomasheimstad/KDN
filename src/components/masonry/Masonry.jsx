import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated as a, config } from 'react-spring'
import { navigate } from "gatsby"
import { useWindowDimensions } from '../context/WindowDimensionsProvider'
import shuffle from 'lodash/shuffle'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import Img from 'gatsby-image'

export default function Masonry(propp) {
  const heightList = () => {
    let list = []
    propp.postList.map(x => {
      let image, height;
      image = new Image();
      image = x.img.childImageSharp.fluid.src;
      let addImageProcess = (src) => {
        return new Promise((resolve, reject) => {
          let img = new Image()
          img.onload = () => resolve(img.height)
          img.onerror = reject
          img.src = src
        })
      }
      addImageProcess(image).then(height => {
        list.push({
          css: x.img.childImageSharp.fluid.src,
          height: height,
          fluid: x.img.childImageSharp.fluid,
          path: x.path
        })
      })
    })
    function sortByKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    sortByKey(list, "css")
    return list;
  }

  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 768px)'], [4, 3, 2], 1)
  const [bind, { width }] = useMeasure()
  const [items, set] = useState(heightList)

  {/*useEffect(() => {
    return () => void set(shuffle)
  }, [])*/}
  useEffect(() => {
    return () => void heightList();
    },
  [heightList])

  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 }
  })

  // This turns gridItems into transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 1, tension: 400, friction:30 },
    trail: 1,
  })
  const { windowHeight, windowWidth } = useWindowDimensions();

  return (
    <div className="masonryView flex center column" style={{width: '100%'}}>
      <div className="flex row wrap basePad center" style={{minHeight: windowHeight, width: '100%'}}>
        <div {...bind} className="list" style={{ height: Math.max(...heights) }}>
          {transitions.map(({ item, props: { xy, ...rest }, key }) => (
            <a.div
              key={key}
              style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}
              onClick={(()=> navigate(item.path))} >
              <Img fluid={item.fluid} to={item.path}/>
            </a.div>
          ))}
        </div>
      </div>
    </div>
  )
}
