
// css
import '../css/graphpicker.css'

// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GridLayout from 'react-grid-layout';

// images
import close_button from '../images/open-iconic-master/svg/x.svg';


class GraphPicker extends Component {

  constructor(props) {
    super(props);
    //this.state = { close: true };
  }

  close = (e) => {
    e.preventDefault();
    this.setState( { close: false } );
  }

  render() {

    var width = 100;

    var layout = [ 
      {i: 'a', x: 0, y: 0, w: 1, h: 1}
    ];  


    if ( this.props.close ) {
      return (
        <GridLayout className="layout" cols={12} rowHeight={width*3} width={width} isDraggable={false} isResizable={false}>
          <div key="a" id="choose" className="choose grid-item"><div className="close-button"><img src={close_button} onClick={this.props.hidePanel} /></div></div>
        </GridLayout>
      );
    } else {
      return (
        <GridLayout className="layout" cols={12} rowHeight={width*3} width={width}>
          <div key="a" id="choose" className="hide grid-item"><div className="close-button" isDraggable={false} isResizable={false}><img src={close_button} onClick={this.props.hidePanel} /></div></div>
        </GridLayout>
      );
    }
  }
}

export default GraphPicker
