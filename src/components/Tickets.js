import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col,  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import helperSvg from "../images/helperSvg";

class Tickets extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }        
    }


    render() {
        return (
            <React.Fragment>
               <div className="work_area_dashboard">
                       <div className="header_area">  <img className="" src={require('../images/ticket_black.svg')} /> Tickets</div>
                       <div className="card_main">
                       <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Oven Cleaning</CardTitle>
                                    <CardText>Maintenance</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/maintenance.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Unassigned</h3>
                                 <h4><div className="oval_card"></div> Due 9/25</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Fryer Down</CardTitle>
                                    <CardText>Vendor</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/vendor1.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Rimmack</h3>
                                 <h4><div className="oval_card"></div> Open</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>M Bathroom</CardTitle>
                                    <CardText>Internal</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/internal.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Steven M</h3>
                                 <h4><div className="oval_card green"></div> Completed</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>L Bathroom</CardTitle>
                                    <CardText>Internal</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/internal.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Susen B</h3>
                                 <h4><div className="oval_card green"></div> Completed</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Oven Cleaning</CardTitle>
                                    <CardText>Maintenance</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/maintenance.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Unassigned</h3>
                                 <h4><div className="oval_card yellow"></div> Due 9/25</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Oven Cleaning</CardTitle>
                                    <CardText>Maintenance</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/maintenance.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Unassigned</h3>
                                 <h4><div className="oval_card orange"></div> Due 9/25</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>M Bathroom</CardTitle>
                                    <CardText>Internal</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/internal.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Steven M</h3>
                                 <h4><div className="oval_card green"></div> Completed</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>M Bathroom</CardTitle>
                                    <CardText>Internal</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/internal.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Steven M</h3>
                                 <h4><div className="oval_card green"></div> Completed</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <div className="add_con" onClick={() => this.props.handleChangeState('createticket')}>
                        <img className="" src={require('../images/add.svg')} />
                        <h3>Add New Ticket</h3>
                        </div>
                        </div> 
                   </div>
            </React.Fragment>
        )
    }
}

export default Tickets
