import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


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
                            <h6 className="sub_title p-t-30 p-b-30">Create your first Supplier by entering as many details as needed to identify the item</h6>
                        </div>                        
                    </div>
                        <div className="vendor_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                    <div className="flex">
                                    <h5 className="p-l-15">Vendor</h5>
                                        <div className="flex m-l-30">
                                        <FormGroup check>
                                            <Label check>
                                            <Input className="c_radio" type="radio" name="radio2" />
                                            Supplier
                                            </Label>
                                        </FormGroup>
                                        <FormGroup className="m-l-20" check>
                                            <Label check>
                                            <Input className="c_radio" type="radio" name="radio2" defaultChecked/>
                                            Service Provider
                                            </Label>
                                        </FormGroup>
                                        </div>
                                    </div>                                    
                                     <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                {/* <Col sm={12}>
                                                    <FormGroup>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>MANAGEMENT SCIENCES FOR HEALTH, INC.</option>
                                                        </Input>
                                                    </FormGroup>                                                
                                                </Col> */}
                                                <Col sm={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Name</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Name" />
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
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter City" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">State</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Select State</option>
                                                            </Input>
                                                        </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Zip</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Zip" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Example: (541) 754-3010" />
                                                    </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Website</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Website Address" />
                                                </FormGroup>
                                            </Col> 
                                            {/* <Col sm={6}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">Role</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Employee</option>
                                                            </Input>
                                                        </FormGroup>
                                            </Col>
                                            <Col sm={2} xs={6}>
                                                <FormGroup check className="custom_check m-t-40 m-space">
                                                    <Input type="checkbox" name="check" id="exampleCheck"/>
                                                    <Label for="exampleCheck" check>Supplier</Label>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4} xs={6}>
                                                <FormGroup check className="custom_check m-t-40 m-space">
                                                    <Input type="checkbox" name="check" id="exampleCheck1"/>
                                                    <Label for="exampleCheck1" check>Service Provider</Label>
                                                </FormGroup>
                                            </Col> */}
                                        </Row>                                                                
                                    </div> 
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">For Service Providers</h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">
                                        <Row>
                                        <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Contract Date</Label>
                                                    <Input type="date" name="email" id="exampleEmail" placeholder="Select Date" />
                                                </FormGroup>
                                            </Col> 
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Payment Terms</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Payment Terms" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Hourly Rate</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Hourly Rate" />
                                                </FormGroup>
                                            </Col> 
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Emergency Hourly Rate</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Emergency Hourly Rate" />
                                                </FormGroup>
                                            </Col> 
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to="/signup">CANCEL</Link></Button>
                                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">ADD </Button>
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