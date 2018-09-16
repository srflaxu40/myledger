import React, { Component } from 'react';
import '../css/base.css';
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
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    const logout = () => {
      this.clearTokens("jwt");
      this.props.history.push('/');
    }

    return (
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      <div className="grid-container">
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={width}>
         <div key="a" className="grid-item">Column</div>
         <div key="b" className="grid-item">Column</div>
         <div key="c" className="grid-item">Column</div>
         <div className="grid-item">
             <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
                className="button p-3 mb-2 bg-primary logout submit"
             >
           </GoogleLogout>
         </div>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
        </GridLayout>
      </div>
      </Tabs>
    );
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome);
