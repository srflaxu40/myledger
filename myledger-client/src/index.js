import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

// Load our components
import Login from './components/Login';
import Welcome from './components/Welcome';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import id from './store/auth/reducers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const store = createStore(id);


/*const AuthRoute = ({component: Component, authed, ...rest}) => {
  console.log("here");
  var response = fetch('/auth/loggedin', {
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

    });
    console.log(response);
   return (
     <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
     />
    )
}*/



const Root = () => {

  console.log(process.env.REACT_APP_HOST);

  return (
    <Provider store={store}>
      <div>
        <Router history={Router}>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/logout" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/welcome" component={Welcome}/>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
