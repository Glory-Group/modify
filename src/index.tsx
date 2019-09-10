import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
//引入mobx实例
import store from './store'
import {Provider} from 'mobx-react';



ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

