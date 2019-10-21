import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';


class UserInvite extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        } 
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="work_area">
                    <div className="sub_pagetitle">
                        <div className="container p-0">
                            <h6 className="sub_title p-t-30 p-b-30 invite-w">You have been sent an invitation to create an account at Table Boost for Craigs Awesome Cafe from Susan Jones</h6>
                        </div>                        
                    </div>
                        <div className="invate_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                    <div className="m-header_sec">
                                    <h5 className="p-l-15">User Profile</h5>
                                        <img className="m-r-10" src={require('../images/edit.svg')} />
                                    </div>
                                    <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                <Col sm={6}>
                                                    <label className="invite_label">First Name</label>
                                                    <p className="invite_txt">Tim</p>
                                                </Col>
                                                <Col sm={6}>
                                                    <label className="invite_label">Last Name</label>
                                                    <p className="invite_txt">Collins</p>
                                                </Col>
                                                <Col sm={6}>
                                                    <label className="invite_label">Email/User</label>
                                                    <p className="invite_txt">tcollins@cocafe.com</p>
                                                </Col>
                                                <Col sm={6}>
                                                    <label className="invite_label">Mobile Phone</label>
                                                    <p className="invite_txt">+1-202-555-0110</p>
                                                </Col>                                                
                                            <Col sm={12}>
                                                <FormGroup className="m-t-30">
                                                    <Label className="m-b-10" for="exampleEmail">Password</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Password" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={12} className="text-right">
                                                <h5 className="terms_link m-t-20"><img className="m-r-5" src={require('../images/terms_icn.svg')} />Terms and conditions</h5>
                                            </Col>                                              
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> CANCEL</Button>
                                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">SUBMIT </Button>
                                                </div>
                                            </Col>                                                                                            
                                        </Row>                                                                
                                    </div>                                    
                                </Form>
                            </div>      
                        </div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default UserInvite