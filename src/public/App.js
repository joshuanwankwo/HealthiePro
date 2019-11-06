import React from 'react';

import Routes from "../Routes"
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {createBrowserHistory} from "history"

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  const hist = createBrowserHistory()

class App extends React.Component {
    render() {
        return (
            <div>
                <Routes />
               
            </div>
        )
    }
}

export default App;             