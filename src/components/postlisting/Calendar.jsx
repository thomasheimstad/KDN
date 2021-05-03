import React from 'react';
import Img from "gatsby-image";

const Calendar = (props) => {
  return(
    <div className="flex center column" style={{width: '100%'}}>
      <div className="flex column wrap basePad center">
        {/* Your post list here. */
        props.postList.map(post => (
          <div className="card" key={post.title} style={{padding: '0'}}>
              <div className="flex column" style={{background: 'black'}}>
                <h2>{post.title}</h2>
                <h3>{post.date}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Calendar;
