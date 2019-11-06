import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';


class AddAsset extends Component {
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
                    <div className="sub_pagetitle m-sec">
                        <div className="container m-padding p-0 ">
                            <h6 className="sub_title p-t-30 p-b-30">Create your first FFE (Furni., Fixtures and Equip.) by entering as many details as needed to identify the item</h6>
                        </div>                        
                    </div>
                        <div className="asset_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">FFE (Furni., Fixtures and Equip.)</h5>
                                        <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                <Col sm={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Name</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter FFE Name" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={6}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">Category</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Plumbing</option>
                                                            </Input>
                                                        </FormGroup>
                                                </Col>
                                                <Col sm={6}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Location</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Location, ie kitchen or bar" />
                                                    </FormGroup>
                                                </Col>                                                
                                            </Row>                                                                
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">FFE (Furni., Fixtures and Equip.) Details <span className="txt_optional">(Optional)</span></h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">                                                                       
                                        <Row>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Make</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Make" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Model</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Model" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Year</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Year" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Serial Number</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Serial Number" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Supplier Details <span className="txt_optional">(Optional)</span></h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">                                                                       
                                        <Row>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Purchased Form</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Purchased Form" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Purchase Price</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Price" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Purchased Date</Label>
                                                    <Input type="date" name="email" id="exampleEmail" placeholder="Select Date" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
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
                                                    <Label className="m-b-10" for="exampleEmail">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Address" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Mobile Phone" />
                                                </FormGroup>
                                            </Col>                                            
                                        </Row>
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Service Provider Details <span className="txt_optional">(Optional)</span></h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">                                                                       
                                        <Row>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Name</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Vendor Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Website</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Vendor Website" />
                                                </FormGroup>
                                            </Col>                                            
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Address</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Address" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={6}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Mobile Phone" />
                                                </FormGroup>
                                            </Col>                                            
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to="/signup"> CANCEL </Link></Button>
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

export default AddAsset