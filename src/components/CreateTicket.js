import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import helperSvg from "../images/helperSvg";
import { Link } from 'react-router-dom';

class CreateTicket extends Component {
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
                        <div className="header_area m-0">  <img className="" src={require('../images/ticket_black.svg')} /> New Ticket</div>
                        <div className="watcher_sec"> 
                            {/* <Button className="button_link w-auto watch_btn">
                                <img className="eye" src={require('../images/eye.svg')} /> 
                                <span>1</span>
                            </Button>  */}
                            <UncontrolledDropdown setActiveFromChild>
                            <DropdownToggle tag="button" className="button_link watch_btn">
                            <img className="eye" src={require('../images/eye.svg')} /> 
                                <span>1</span>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >
                                    <span className="label_sec">Start Watching <img className="eye-black" src={require('../images/eye-black.svg')} /> </span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    <span className="label_sec label_header">Watching this ticket </span>
                                </DropdownItem>                                
                                <DropdownItem >
                                    <span className="duser-sec"><img className="m-r-10" src={require('../images/man.svg')} /> Julia Andrews  </span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>
                                    <Form>
                                    <Row>
                                        <Col sm={12}>
                                            <FormGroup className="m-b-0">
                                                <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    </Form>
                                </DropdownItem>
                            </DropdownMenu>                            
                        </UncontrolledDropdown>                           
                        </div>
                    </div>

                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Title</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Ticket Summary" />
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">FFE (Furn., Fixtures and Equip.)</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select FFE</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12} className="d_link">
                                <Button className="button_link m-t-29 mobile-m"> 
                                <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>
                                {/* <img className="m-r-10" src={require('../images/plus.svg')} /> */}
                                <Link to="/asset"> ADD NEW FFE </Link></Button>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">Type</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Repair</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            {/* <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Plumbing</option>
                                    </Input>
                                </FormGroup>
                            </Col> */}
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">Supplier</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Remtack INC</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12} className="d_link">
                                <Button className="button_link m-t-29 mobile-m"> <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg> <Link to="/vendor">ADD NEW SUPPLIER </Link></Button>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">Priority</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Emergency</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup>
                                    <Label for="exampleSelect">Timetable</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Immediate</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <FormGroup check className="custom_check m-t-35 mobile-m m-space p-l-0">
                                    <Input type="checkbox" name="check" id="exampleCheck" />
                                    <Label for="exampleCheck" check>Recurring</Label>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={4} xs={12}>
                                <Row>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">Every</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">&nbsp;</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Hours</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/hastag.svg')} /> Description</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={12}>
                                <FormGroup className="m-b-0">
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/camera.svg')} /> Upload Picture</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col lg={4} md={5} sm={4} xs={12} className="upload_btn">
                                <Button className="button_link mobile-b-10">  <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg> CHOOSE IMAGE
                                    <input type="file" />
                                </Button>
                            </Col>
                            <Col lg={8} md={7} sm={8} xs={12}>
                                <FormGroup className="m-b-0">
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Image URL" />
                                </FormGroup>
                            </Col>                                                        
                        </Row>
                    </div>
                    <Row>
                    <Col sm={12}>
                                <div className="text-center m-t-40 m-b-40">
                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to=""> CANCEL </Link></Button>
                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">SUBMIT </Button>
                                </div>
                            </Col>
                    </Row>
                </div>

                {/* <div className="tb_craeteticket ticketdetail">
                    <div className="detail-header m-t-40">
                        <div className="header_area m-0">  <img className="" src={require('../images/ticket_black.svg')} /> Ticket #305</div>
                        <div className="header-info">
                            <span className="info-name"><img className="m-r-5" src={require('../images/i-user.svg')} />  <label className="m-0">Susen Jones -</label> 9/24/19 3:05PM</span>
                            <span className="info-update"><label className="m-0">Last Update -</label> 9/24/19 3:05PM</span>
                        </div>
                    </div>                    
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Title</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Fryer Down" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Status</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>In-Process</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">FFE (Furn., Fixtures and Equip.)</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>104-Fryer #3 in Back Row</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Type</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Repair</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Category</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Plumbing</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Vendor</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Remtack INC</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Contact</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Johnsmith@remack.com" />
                                </FormGroup>
                            </Col>
                            <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Priority</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Emergency</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/hastag.svg')} /> Description</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={12}>
                                <FormGroup className="m-b-0">
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>                        
                    </div>
                    <div className="form_wrapper m-t-0">
                        <Row>
                        <Col sm={4}>
                                <FormGroup>
                                    <Label for="exampleSelect">Timetabel</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Immediate</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={3}>
                                <FormGroup check className="custom_check m-t-35 mobile-m m-space">
                                    <Input type="checkbox" name="check" id="exampleCheck" />
                                    <Label for="exampleCheck" check>Recurring</Label>
                                </FormGroup>
                            </Col>
                            <Col sm={5}>
                                <Row>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">Every</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <FormGroup>
                                            <Label for="exampleSelect">&nbsp;</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Hours</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12}>
                                <FormGroup >
                                    <Label className="m-b-10" for="exampleEmail">Files</Label>
                                    <div className="img-group">
                                        <img className="m-r-5" src={require('../images/picture.svg')} />
                                        <img className="" src={require('../images/picture.svg')} />
                                    </div>                                    
                                </FormGroup>
                            </Col>
                        </Row>                        
                    </div>
                    <div className="header_area m-t-25">  <img className="" src={require('../images/camera.svg')} /> Upload Picture</div>
                    <div className="form_wrapper m-t-25">
                        <Row>
                            <Col sm={3} className="upload_btn">
                                <Button className="button_link mobile-b-10">  <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg> CHOOSE IMAGE
                                    <input type="file" />
                                </Button>
                            </Col>
                            <Col sm={9}>
                                <FormGroup >
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Image URL" />
                                </FormGroup>
                            </Col>
                                                        
                        </Row>
                    </div>
					<div className="detail-header m-t-40">
                        <div className="header_area m-0">  <img className="" src={require('../images/market-store.svg')} /> Vendor Response</div>
                        <div className="header-info">
                            <label className="m-0 info-detail">Accepted @ 12:13 PM</label>
                        </div>
                    </div>
                    <div className="form_wrapper m-t-25">
                        <Row> 
							<Col sm={12}>						
                            <FormGroup>
                                    <Label for="exampleEmail">Vendor ETA</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                </FormGroup> 
								</Col>
							<Col sm={12}>
                                <FormGroup> 
								<Label for="exampleEmail">Vendor Notes</Label>
                                    <Input className="custom_txtarea" type="textarea" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
							<Col sm={12}>						
                            <FormGroup>
                                    <Label for="exampleEmail">Vendor Quote</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="" />
                                </FormGroup> 
								</Col>
                        </Row>
                    </div>
					
                    <Row>
                    <Col sm={12}>
                                <div className="text-center m-t-40 m-b-40">
                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5"> <Link to=""> MODIFY </Link></Button>
                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5 btn_add">RETURN TO LIST </Button>
                                </div>
                            </Col>
                    </Row>
                </div> */}

            </React.Fragment>
        )
    }
}

export default CreateTicket
