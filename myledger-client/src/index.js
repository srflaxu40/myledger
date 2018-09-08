import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Load our components
import Login from './components/Login';
import Welcome from './components/Welcome';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import id from './store/auth/reducers'
//import * as actions from './store/auth/actions';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(id)

//console.log(this.state.googleId);
//store.dispatch(actions.set_id(this.state.googleId));

const Root = () => {

  console.log(process.env.REACT_APP_HOST);
  return (
    <Provider store={store}>
      <div className="base">
        <Router history={Router}>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/welcome" component={Welcome}/>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
