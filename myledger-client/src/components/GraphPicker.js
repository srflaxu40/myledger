
// css
import '../css/graphpicker.css'

// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// images
import close_button from '../images/open-iconic-master/svg/x.svg';


class GraphPicker extends Component {

  constructor(props) {
    super(props);
    //this.state = { close: true };
  }

  close = (e) => {
    this.setState( { close: false } );
  }

  render() {
    if ( this.props.close ) {
      return (
        <div id="choose" className="choose"><div className="close-button"><img src={close_button} onClick={this.props.hidePanel} /></div></div>
      );
    } else {
      return (
        <div id="choose" className="hide"><div className="close-button"><img src={close_button} onClick={this.props.hidePanel} /></div></div>
      );
    }
  }
}

export default GraphPicker
