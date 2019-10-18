import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddAsset from './components/AddAsset';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Login} />
             <Route path="/signup" component={SignUp} />
            <Route path="/asset" component={AddAsset} />
           {/* <Route path="/exercise" component={Exercise} /> */}
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root'));