import React, { Component } from 'react';
import './flipcard.css';

// React component for the card (main component)
class CardList extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide computer sixteen wide mobile eight wide tablet column">
          <div className="card-container">
            <div className='card-body'>
              <div className='card-side side-front'>
                <h3>OpenStax - Rice University</h3>
                <img alt="RiceU" src="/images/rice.png" class="ui medium rounded image" />
              </div>
              <div className='card-side side-back'>
                <ul>
                  <li>CSS, LESS, Bootstrap</li>
                  <li>jQuery, JavaScript</li>
                  <li>Python, XSLT, CNXML, XML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="four wide computer sixteen wide mobile eight wide tablet column">
          <div className="card-container">
            <div className='card-body'>
              <div className='card-side side-front'>
                front2
                </div>
              <div className='card-side side-back'>
                back2
                </div>
            </div>
          </div>
        </div>

        <div className="four wide computer sixteen wide mobile eight wide tablet column">
          <div className="card-container">
            <div className='card-body'>
              <div className='card-side side-front'>
                front3
                </div>
              <div className='card-side side-back'>
                back3
                </div>
            </div>
          </div>
        </div>

        <div className="four wide computer sixteen wide mobile eight wide tablet column">
          <div className="card-container">
            <div className='card-body'>
              <div className='card-side side-front'>
                front4
                </div>
              <div className='card-side side-back'>
                back4
                </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CardList;