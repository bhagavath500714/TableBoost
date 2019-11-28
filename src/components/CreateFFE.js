import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import helperSvg from "../images/helperSvg";
import { Link } from 'react-router-dom';

 class CreateFFE extends Component {
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
                    <div className="detail-header m-t-40">
                        <div className="header_area m-0">  <img className="" src={require('../images/ticket_black.svg')} /> Create FF&E (Furniture, Fixtures & Equipment)</div>                        
                    </div>

                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Name <sup className="sub_txt">*</sup></Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Example: Walk-in Cooler" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Location</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Example: kitchen or Bar" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">Category <sup className="sub_txt">*</sup></Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Cooking</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Make</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Example: Beverage-Air" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Model</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Model" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Model Number</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Model Number" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Year</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Year" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Serial Number</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Serial Number" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Purchase Price</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Purchase Price" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Purchase Date</Label>
                                    <Input type="date" name="email" id="exampleEmail" placeholder="Select Date" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Salvage Value</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Salvage Value" />
                                </FormGroup>
                            </Col>                       
                        </Row>
                        <Row>
                        <Col sm={6} md={6} lg={4} xs={12} className="upload_btn">
                            <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Barcode</Label>
                            <Button className="upload-FFE mobile-b-10">  <svg className="m-r-5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>BARCODE
                                    <input type="file" />
                                </Button>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12} className="upload_btn">
                            <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Image</Label>
                            <Button className="upload-FFE mobile-b-10">  <svg className="m-r-5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>IMAGE
                                    <input type="file" />
                                </Button>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12} className="upload_btn">
                            <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Manual</Label>
                            <Button className="upload-FFE mobile-b-10">  <svg className="m-r-5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>MANUAL
                                    <input type="file" />
                                </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg={12} className="text-right">
                                <FormGroup check className="custom_check m-t-10 mobile-m m-space p-l-0">
                                    <Input type="checkbox" name="check" id="exampleCheck" defaultChecked={true}/>
                                    <Label for="exampleCheck">Active</Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25"><img className="" src={require('../images/hastag.svg')} />  Details</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={12}>
                                <FormGroup className="m-b-0">
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/market-store.svg')} /> Supplier Details</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Name</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Supplier Name" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Address</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Address" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                            <FormGroup >
                                <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Example: (541) 754-3010" />
                            </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/ribbon.svg')} /> Warranty and Maintenance Details </div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Warranty Length</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Warranty Length" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Warranty Expiration</Label>
                                    <Input type="date" name="email" id="exampleEmail" placeholder="DD/MM/YYY" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Warranty Details</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Warranty Details" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <h5 className="sub-title">Maintenance Details</h5>                        
                        <Row>                        
                            <Col sm={12}>
                                <FormGroup className="m-b-0">
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="header_area m-t-25">Maintenance Details</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={12}>
                                <FormGroup className="m-b-0">
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div> */}
                    <div className="header_area m-t-25">  <img className="" src={require('../images/support.svg')} /> Service Provider </div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Name</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Name" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Contract  #</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Contract No" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Address</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Address" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Mobile Phone</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Mobile Number" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Start Date</Label>
                                    <Input type="date" name="email" id="exampleEmail" placeholder="Select Date" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">End Date</Label>
                                    <Input type="date" name="email" id="exampleEmail" placeholder="Select Date" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Cost</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="Enter Cost" />
                                </FormGroup>
                            </Col>
                            <Col sm={4} className="upload_btn">
                            <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Service Contract Pictures</Label>
                            <Button className="upload-FFE mobile-b-10">  <svg className="m-r-5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>IMAGE
                                    <input type="file" />
                                </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>                    
                    <Row>
                    <Col sm={12}>
                                <div className="text-center m-t-40 m-b-40">
                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to=""> CANCEL </Link></Button>
                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">CREATE </Button>
                                </div>
                            </Col>
                    </Row>
                </div>
                </React.Fragment>
        )
    }
}

export default CreateFFE
