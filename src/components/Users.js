import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="work_area_dashboard">
                       <div className="header_area">  <img className="" src={require('../images/users-b.svg')} /> Users</div>
                       <div className="card_main">                       
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Susen Jones</CardTitle>
                                    <CardText>Employee</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/team-w.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Last Seen : 1/2/18</h3>
                            </div>        
                            </CardBody>
                        </Card>                        
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Brian Jones</CardTitle>
                                    <CardText>Admin</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/team-w.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Last Seen : 1/2/18</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Rachel Tweed</CardTitle>
                                    <CardText>Employee</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/team-w.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Last Seen : 1/2/18</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <div className="add_con" onClick={() => this.props.handleChangeState('addSupplier')}>
                        <img className="" src={require('../images/add.svg')} />
                        <h3>Add New User</h3>
                        </div>
                        </div> 
                   </div>
            </React.Fragment>
        )
    }
}

export default Users
