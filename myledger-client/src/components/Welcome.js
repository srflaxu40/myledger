// Stylings:
import '../css/base.css';
import '../css/welcome.css';

// Images:
import plus_sign from '../images/open-iconic-master/svg/plus.svg';
import bar_chart from '../images/open-iconic-master/svg/bar-chart.svg';

// Components:
import GraphPicker from './GraphPicker';

// React:
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { GoogleLogout } from 'react-google-login';

import GridLayout from 'react-grid-layout';
//import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import * as Actions from '../store/auth/actions'


import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, props) => {
   return {state: state};
}; 

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(Actions, dispatch)
);


class Welcome extends Component {
  componentDidMount() {
    var that = this;
    fetch('/auth/loggedin', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },  
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
      })  
      .then(response => {   
        return response.json();
      })  
      .then(function(data) {
        if ( data.jwt ) { 
           that.props.set_jwt(data.jwt);
        } else {
           that.props.history.push('/');
        }
       });
  }
 
  constructor(props) {
    super(props);
    this.state = { close: true };
    this.hidePanel = this.hidePanel.bind(this);
  }

  getPanel = (e) => {
    e.preventDefault();

    if ( this.state.close == false ) { 
      this.setState( { close: true } );
    } else {
      this.setState( { close: false } );
      ReactDOM.render(
        <GraphPicker hidePanel={this.hidePanel} close={this.state.close}/>,
        document.getElementById('popup-div')
      );
    }
  }

  hidePanel(e) {
    e.preventDefault();
    this.setState( { close: true } );
    ReactDOM.render(
      <GraphPicker hidePanel={this.hidePanel} close={this.state.close}/>,
      document.getElementById('popup-div')
    );
  }

  clearTokens = (cookie) => {
    fetch('/auth/jwt-token', {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },  
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
      });
  }


  render() {

    var width = window.innerWidth;

    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    const logout = () => {
      this.clearTokens("jwt");
      this.props.history.push('/');
    }

    return (
      <div className="body-div">
         <div className="button-div">
           <button id="add_chart" onClick={this.getPanel} className="addButton"><img id="add_chart" src={bar_chart}/></button>
           <button id="add_chart2" onClick={this.getPanel} className="addButton"><img id="add_chart2" src={plus_sign}/></button>
         </div>
         <div className="popup-div" id="popup-div">
         </div>
       <Tabs>
        <TabList className="welcome-tabs">
          <Tab className="tabs">Portolio</Tab>
          <Tab className="tabs">Profile</Tab>
          <Tab className="tabs">Stocks</Tab>
          <Tab className="tabs">Bonds</Tab>
          <Tab className="tabs">Wallet</Tab>
          <Tab className="tabs">News</Tab>
          <Tab className="tabs">Market</Tab>
        </TabList>
        <TabPanel>
          {/* Profile */}
          <h2>Profile</h2>
        </TabPanel>
        <div className="grid-container">
          <TabPanel>
           {/* Portfolio */}
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={width}>
             <div key="a" className="grid-item">
                 <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    className="button p-3 mb-2 bg-primary logout submit grid-item"
                 >
               </GoogleLogout>
             </div>
             <div key="b" className="grid-item">Column</div>
             <div key="c" className="grid-item">Column</div>
            </GridLayout>
          </TabPanel>
        </div>
        <div className="grid-container">
          <TabPanel>
            {/* Stocks */}
            <h2>Stocks</h2>
          </TabPanel>
        </div>
        <div className="grid-container">
          <TabPanel>
            {/* Bonds */}
            <h2>Bonds</h2>
          </TabPanel>
        </div>
        <div className="grid-container">
          <TabPanel>
            {/* Wallet */}
            <h2>Wallet</h2>
          </TabPanel>
        </div>
        <div className="grid-container">
          <TabPanel>
            {/* News */}
            <h2>News</h2>
          </TabPanel>
        </div>
        <div className="grid-container">
          <TabPanel>
            {/* Market */}
            <h2>Market</h2>
          </TabPanel>
        </div>
       </Tabs>
      </div>
    );
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome);
