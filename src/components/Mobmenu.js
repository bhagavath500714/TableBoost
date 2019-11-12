import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col,  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import helperSvg from "../images/helperSvg";

class Mobmenu extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }        
    }


    render() {
        return (
            <React.Fragment>
             <div className="dashboard_wrapper">
             <div className="side_bar w-300">
                   <div className="menu_header w-100">
                        <div className="s_logo">
                            <img className="m-t-18 m-b-18 m-l-20" src={require('../images/logo_white.svg')} />
                        </div>
                        <div className="menu_sec">
                            <ul>
                                <li className="active"><img className="" src={require('../images/dashboard.svg')} /> Dashboard</li>
                                <li onClick={() => this.props.selectMenu('tickets')} ><img className="" src={require('../images/tickets.svg')} />Tickets</li>
                                <li><img className="" src={require('../images/assets.svg')} />FFE</li>
                                <li><img className="" src={require('../images/vendors.svg')} />VENDORS</li>
                                <li><img className="" src={require('../images/users.svg')} />USERS</li>
                            </ul>                            
                        </div>
                   </div>
                   <div className="mobnav_bottom">
                    <Button className="btn_secondry button_base btn_radius float-right login_btn">LOGOUT</Button>  
                    <div className="menu_footer text-center w-100">
                            <p className="m-t-20 m-b-20">&copy; 2019 TableBoost</p>
                    </div> 
                   </div>
                  
             </div>
             </div>
            </React.Fragment>
        )
    }
}

export default Mobmenu
