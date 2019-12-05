import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddAsset from './components/AddAsset';
import AddVendor from './components/AddVendor';
import UserInvite from './components/UserInvite';
import Dashboard from './components/Dashboard';
import Tickets from './components/Tickets';
import FFE from './components/FFE';
import Supplier from './components/Supplier';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobmenu from './components/Mobmenu';
import ServiceTerms from './components/ServiceTerms';



ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/asset" component={AddAsset} />
            <Route path="/vendor" component={AddVendor} />
            <Route path="/invite" component={UserInvite} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/mobmenu" component={Mobmenu} />
            <Route path="/FFE" component={FFE} />
            <Route path="/supplier" component={Supplier} />
            <Route path="/terms" component={ServiceTerms} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root'));