
// css
import '../css/graphpicker.css'

// react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// images
import close_button from '../images/open-iconic-master/svg/x.svg';


class GraphPicker extends Component {

  close = (e) => {
    //ReactDOM.unmountComponentAtNode(document.getElementById("choose"));
    var elem = document.querySelector('#choose');
    elem.parentNode.removeChild(elem);
  }


  render() {
    return (
        <div id="choose" className="choose"><div className="close-button"><img src={close_button} onClick={this.close} /></div></div>
    );
  }
}

export default GraphPicker
