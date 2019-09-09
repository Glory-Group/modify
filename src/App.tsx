import * as React from 'react';
import 'antd/dist/antd.css';
import RoutesView from "./router/router"
import { Provider } from 'mobx-react';
import store from './store'



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider {...store}>
            <RoutesView />
        
        </Provider>

      </div>
    );
  }
}

export default App;
