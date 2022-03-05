import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";


import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import {store,persistor} from './redux/store';

import AdminLayout from "layouts/Admin.js";
import NewLayout from "layouts/NewLayout.js";


// Helllo

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/user" render={(props) => <NewLayout {...props} />} />
            <Redirect to="/user/login" />
          </Switch>
        </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
