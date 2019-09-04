import 'antd/dist/antd.css';
import * as React from 'react';
import Router from "./router"
import {Provider} from 'mobx-react';
import store from './store'
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider {...store}>
              <Router/>
       
        </Provider>
     
      </div>
    );
  }
}

export default App;
