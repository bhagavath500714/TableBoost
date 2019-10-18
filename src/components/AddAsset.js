import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';


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
                    <div className="sub_pagetitle">
                        <div className="container p-0">
                            <h6 className="sub_title p-t-30 p-b-30">Create your first asset by entering as many details as needed to identify the item</h6>
                        </div>                        
                    </div>
                        <div className="asset_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Asset</h5>
                                        <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                <Col sm={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Name</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter ticket title" />
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
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Location" />
                                                    </FormGroup>
                                                </Col>                                                
                                            </Row>                                                                
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Asset Details <span className="txt_optional">(Optional)</span></h5>
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
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_submit">NEXT <img className="m-l-10" src={require('../images/next_arrow.svg')} /></Button>
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