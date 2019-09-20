import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./Login/login";
import Home from "./Home";
import SignUp from "./SignUp/signup";
class RouterComponent extends Component{
    render()
    {
        return (
            <div>
              <BrowserRouter>
                <Switch>
                    <Route exact path="/"  component={Login} />
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/signup" component={ SignUp } />
                </Switch>
             </BrowserRouter>
            </div>
        );
    }
}
export default RouterComponent;