import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';


class AddVendor extends Component {
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
                            <h6 className="sub_title p-t-30 p-b-30">Create your first asset by entering as many details as needed to identify the item</h6>
                        </div>                        
                    </div>
                        <div className="vendor_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Vendor</h5>
                                        <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                <Col sm={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Name</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Vendor Name" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Address</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Address" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={4}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">City</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your City" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">State</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Enter State</option>
                                                            </Input>
                                                        </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Zip</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Zip" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Mobile Phone" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" />
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
                                            <Col sm={2}>
                                                <FormGroup check className="custom_check m-t-35">
                                                    <Input type="checkbox" name="check" id="exampleCheck"/>
                                                    <Label for="exampleCheck" check>Supplier</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup check className="custom_check m-t-35">
                                                    <Input type="checkbox" name="check" id="exampleCheck"/>
                                                    <Label for="exampleCheck" check>Service Provider</Label>
                                                </FormGroup>
                                            </Col>                                                                                            
                                        </Row>                                                                
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Vendor Details <span className="txt_optional">(Optional)</span></h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">                                                                       
                                        <Row>
                                        <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">First Name</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter First Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Last Name</Label>
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
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Mobile Number" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_add">ADD </Button>
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

export default AddVendor