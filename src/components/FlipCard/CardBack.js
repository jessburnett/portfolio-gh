import React, { Component } from "react";

// React component for the backside of the card
class CardBack extends Component {
  render(props) {
    return (
      <div className='card-side side-back'>
        {this.props.backtext}
      </div>
    )
  }
}

export default CardBack;