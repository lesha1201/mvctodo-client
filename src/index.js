import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import '../public/style.css';
import rootReducer from './reducers';
import App from './containers/App';

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(ReduxThunk))
)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, 
   document.getElementById('root')
);