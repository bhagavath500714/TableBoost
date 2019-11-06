import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import helperSvg from "../images/helperSvg";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }        
    }


    render() {
        return (
            <React.Fragment>
               <div className="dashboard_wrapper">
                   <div className="side_bar">
                   <div className="menu_header w-100">
                        <div className="s_logo">
                            <img className="m-t-18 m-b-18 m-l-20" src={require('../images/logo_white.svg')} />
                        </div>
                        <div className="menu_sec">
                            <ul>
                                <li>Dashboard</li>
                            </ul>                            
                        </div>
                   </div>
                   <div className="menu_footer text-center w-100">
                        <p className="m-t-20 m-b-20">&copy; 2019 TableBoost</p>
                    </div> 
                   </div>
                   <div className="main_area">
                   <p>workarea</p>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Dashboard
