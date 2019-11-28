import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col,  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import CreateTicket from './CreateTicket';
import { Link } from 'react-router-dom';
import helperSvg from "../images/helperSvg";
import Sidebar from "react-sidebar";
import Login from './Login';
import Mobmenu from './Mobmenu';
import Tickets from './Tickets';
import FFE from './FFE';
import CreateFFE from './CreateFFE';
import Supplier from './Supplier';
import AddSupplier from './AddSupplier';
import Users from './Users';
import AddUser from './AddUser';
import Loader from './Loader';

const mql = window.matchMedia(`(min-width: 767px)`);

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            mactive: 'dashboard'

        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      }
      handleChangeState = (val) => {
          this.setState({mactive: val}) 
      }

      selectMenu = (type) => {
        this.setState({mactive: type});
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
      componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }
    
      componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    
      mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
      }
    
    render() {
        console.log(this.state.mactive);
        return (
            <React.Fragment>
               <Sidebar
                 sidebar={ <Mobmenu selectMenu ={this.selectMenu}/>}
                 open={this.state.sidebarOpen}
                 onSetOpen={this.onSetSidebarOpen}
                 styles={{ sidebar: { background: "black" } }}>                
               
               <div className="dashboard_wrapper">
                   <div className="side_bar dashboard_only">
                   <div className="menu_header w-100">
                        <div className="s_logo">
                            <img className="m-t-18 m-b-18 m-l-20 web" src={require('../images/logo_white.svg')} />
                            <img className="m-t-12 m-b-12 m-l-25 tab" src={require('../images/logo_tab.svg')} />
                        </div>
                        <div className="menu_sec">
                            <ul>
                                <li className={this.state.mactive == 'dashboard' ? 'active' : ''} onClick={() => this.selectMenu('dashboard')} ><img className="" src={require('../images/dashboard.svg')} /> Dashboard</li>
                                <li className={this.state.mactive == 'tickets' ? 'active' : ''} onClick={() => this.selectMenu('tickets')}><img className="" src={require('../images/tickets.svg')} />Tickets</li>
                                <li className={this.state.mactive == 'FFE' ? 'active' : ''} onClick={() => this.selectMenu('FFE')}><img className="" src={require('../images/assets.svg')} />FF&E</li>
                                <li className={this.state.mactive == 'supplier' ? 'active' : ''} onClick={() => this.selectMenu('supplier')}><img className="" src={require('../images/vendors.svg')} />SERVICE PROVIDER & SUPPLIERS</li>
                                <li className={this.state.mactive == 'users' ? 'active' : ''} onClick={() => this.selectMenu('users')}><img className="" src={require('../images/users.svg')} />USERS</li>
                            </ul>                            
                        </div>
                   </div>
                   <div className="menu_footer text-center w-100">
                        <p className="m-t-20 m-b-20">&copy; 2019 TableBoost</p>
                    </div> 
                   </div>
                   <div className="main_area">
                   <div className="main_area_header responsive_web">
                     <img className="" src={require('../images/notification_on.svg')} />
                     <div className="user_profile">
                      <img className="" src={require('../images/man.svg')} />
                      <span className="oval"></span>
                     </div>
                     <div className="user_text">
                        <UncontrolledDropdown setActiveFromChild>
                            <DropdownToggle tag="user" className="" caret>
                            Julia Andrews
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag="Logout" href="#" active>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                     </div>
                   </div>
                   <div className="main_area_header responsive_mob">
                   <img onClick={() => this.onSetSidebarOpen(true)} src={require('../images/mob_menu.svg')} />
                   <span className="page_title">Dashboard</span>
                   <img className="" src={require('../images/mob_notification.svg')} />
                   </div>
                   {this.state.mactive == 'dashboard' && 
                   <div className="work_area_dashboard">
                       <div className="header_area">  <img className="" src={require('../images/ticket_black.svg')} /> Critical Tickets</div>
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
                                <div className="card_img_sec"><img className="" src={require('../images/maintenance.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Assigned : Rimmack</h3>
                                 <h4><div className="oval_card"></div> Open</h4>
                            </div>        
                            </CardBody>
                        </Card>
                        <div className="add_con">
                        <img className="" src={require('../images/add.svg')} />
                        <h3>Add New Ticket</h3>
                        </div>
                        </div> 
                        <div className="header_area">  <img className="" src={require('../images/history.svg')} /> Recent Activity</div>
                        <Card className="full_width">
                            <div className="history"><img className="" src={require('../images/tickets.svg')} /><span>Julia Andrews opened a new ticket <a> #302 Fryer 12 Down</a> - 9/5/2019 3:45 PM</span></div>
                            <div className="history"><img className="" src={require('../images/tickets.svg')} /><span><a>Kintera</a> sent an invoice for <a> #102 Fryer Repair</a> - 9/5/2019 1:45 PM</span></div>
                            <div className="history"><img className="" src={require('../images/assets.svg')} /><span>Stephen Andrews added a new FFE <a> Grill 3</a> - 9/5/2019 12:15 PM</span></div>
                            <div className="history"><img className="" src={require('../images/tickets.svg')} /><span>Julia Andrews opened a new ticket <a> #105 dryer out in Bathroom</a> - 9/4/2019 2:26 PM</span></div>
                            <div className="history"><img className="" src={require('../images/tickets.svg')} /><span><a>Bob’s Oil</a> rejected an invoice for <a> #107 Heat Out</a> - 9/4/2019 1:45 PM</span></div>
                        </Card>
                   </div>
                   }
                   {this.state.mactive == 'tickets' && 
                        <Tickets handleChangeState={this.handleChangeState}  />                        
                   }
                   {this.state.mactive == 'createticket' && 
                        <CreateTicket/>                       
                   }
                   {this.state.mactive == 'FFE' && 
                        <FFE handleChangeState={this.handleChangeState}/>                       
                   }
                   {this.state.mactive == 'createFFE' && 
                        <CreateFFE/>                       
                   }
                   {this.state.mactive == 'supplier' && 
                        <Supplier handleChangeState={this.handleChangeState} />   
                        // <Loader />                   
                   }
                   {this.state.mactive == 'addSupplier' && 
                        <AddSupplier/>                       
                   }
                   {this.state.mactive == 'users' && 
                        <Users handleChangeState={this.handleChangeState}/>                       
                   }
                    {this.state.mactive == 'addUser' && 
                        <AddUser/>                       
                   }
                   </div>
               </div>               
               <ticket/>
               </Sidebar>
            </React.Fragment>
        )
    }
}

export default Dashboard
