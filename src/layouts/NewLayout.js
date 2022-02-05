import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import routes from "newRoute.js";

var ps;

function Dashboard(props) {
  return (
    <div>
      {/* <div className="main-panel"> */}
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={((prop.layout)? prop.layout : "") + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
