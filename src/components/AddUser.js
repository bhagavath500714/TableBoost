import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import helperSvg from "../images/helperSvg";
import { Link } from 'react-router-dom';

class AddUser extends Component {
        constructor(props) {
            super(props)
            
            this.state = {
            }        
        }

    render() {
        const { svgPath, styles } = helperSvg;
        const { M16 } = svgPath;
        return (
            <React.Fragment>
                 <div className="tb_craeteticket">                    
                 <div className="header_area m-0">  <img className="" src={require('../images/users-b.svg')} /> Add User </div>

                    <div className="form_wrapper m-t-25">
                        <Row>
                        <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">First Name <sup className="sub_txt">*</sup></Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter First Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Last Name <sup className="sub_txt">*</sup></Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Last Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                            <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Example: (541) 754-3010" />
                                                    </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">Role</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Select Role</option>
                                                            </Input>
                                                    </FormGroup>
                                                </Col>                            
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/contact.svg')} /> Primary Contact</div>
                    <div className="form_wrapper m-t-25">
                        <Row>                        
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">First Name</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter First Name" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Last Name </Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Last Name" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Email </Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                            <FormGroup >
                                <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Example: (541) 754-3010" />
                            </FormGroup>
                            </Col> 
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Role</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                        <option>Employee</option>
                                        </Input>
                                </FormGroup>
                            </Col>                                                       
                        </Row>
                    </div>                   
                    <Row>
                    <Col sm={12}>
                                <div className="text-center m-t-40 m-b-40">
                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to=""> CANCEL </Link></Button>
                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">SAVE AND INVITE </Button>
                                </div>
                            </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default AddUser
