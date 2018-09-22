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

const mapStateToProps = (state, props) => ({
    state: state
}); 

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(Actions, dispatch)
);


class Welcome extends Component {
  /*componentWillMount() {
    if ( ! window.localStorage.getItem('googleId') ) {
      this.props.history.push('/');
    }
  }*/

  getPanel = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    ReactDOM.render(
      <GraphPicker />,
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

  //componentDidMount() {
    //var googleId = window.localStorage.getItem('googleId');
    //this.props.set_id(googleId);
  //}

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
