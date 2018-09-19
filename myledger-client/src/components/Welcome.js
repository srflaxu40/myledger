import React, { Component } from 'react';
import '../css/base.css';
import '../css/welcome.css';
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
      console.log("here");
      this.clearTokens("jwt");
      this.props.history.push('/');
    }

    return (
      <div className="body-div">
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
         {/* Portfolio */}
         <div className="grid-container">
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
         </div>
        </TabPanel>
        <TabPanel>
          {/* Profile */}
          <h2>Profile</h2>
        </TabPanel>
        <TabPanel>
          {/* Stocks */}
          <h2>Stocks</h2>
        </TabPanel>
        <TabPanel>
          {/* Bonds */}
          <h2>Bonds</h2>
        </TabPanel>
        <TabPanel>
          {/* Wallet */}
          <h2>Wallet</h2>
        </TabPanel>
        <TabPanel>
          {/* News */}
          <h2>News</h2>
        </TabPanel>
        <TabPanel>
          {/* Market */}
          <h2>Market</h2>
        </TabPanel>
       </Tabs>
      </div>
    );
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome);
