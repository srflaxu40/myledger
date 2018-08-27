import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Load our components
import Login from './components/Login';
import Welcome from './components/Welcome';

// Redux for state store
import todoApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(todoApp)

const Root = () => {

  console.log(process.env.REACT_APP_HOST);
  return (
    <Provider store={store}>
      <div className="base">
        <Router history={Router}>
          <div>
            <Route path="/" component={Login}/>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
