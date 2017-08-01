import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/App';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import { render } from 'react-dom';

import reducer from './reducers';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
try {store.runSaga(rootSaga);}catch(e){console.log(e)}

ReactDOM.render(
 <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))