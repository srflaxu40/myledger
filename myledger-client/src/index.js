import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => {

  console.log(process.env.REACT_APP_HOST);
  return (
    <div className="base">
      <Router history={Router}>
        <div>
          <Route path="/" component={Login}/>
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
