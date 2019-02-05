import React from 'react';
export default class GalleryImages extends React.Component {
  handleClick = () => {
    console.log(this.props.images)
  }
  render = () => {
    return (
      <div style={{height: "600px"}} className="flex center column">
        <div onClick={this.handleClick}>BUTTON</div>
        <h1>tessasdt</h1>
      </div>
    )
  }
}
