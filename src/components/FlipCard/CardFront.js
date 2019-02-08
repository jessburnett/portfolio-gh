import React, { Component } from "react";

// React component for the frontside of the card
class CardFront extends Component {
  render(props) {
    return (
      <div className='card-side side-front'>
        {this.props.fronttext}
      </div>
    )
  }
}

export default CardFront;