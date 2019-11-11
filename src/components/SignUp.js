import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import helperSvg from "../images/helperSvg";

class SignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            viewSteper: 1
        }        
    } 
    
    stepperView = (type) => {
        this.setState({viewSteper: type})
    }

    render() {
        const { svgPath, styles} = helperSvg;
        const { M16 } = svgPath;

        return (
            <React.Fragment>
                <Header/>
               <div className="work_area">               
                            <div className="steper_sec">
                                <div className="container p-0">                           
                                    <div className="steper_set">
                                    {this.state.viewSteper == '1' && 
                                    <h6 className="steper_title m-t-15">Create a free TableBoost account and start</h6>
                                    }
                                    {this.state.viewSteper == '2' && 
                                        <h6 className="steper_title m-t-15">Add Managers and Employees who will be responsible for repair and maintenance tasks</h6>
                                    }
                                    {this.state.viewSteper == '3' && 
                                        <h6 className="steper_title m-t-15">Create your first ticket by adding an asset (fryer, espresso machine…) and assigning that ticket to a crew member  or a vendor or supplier</h6>
                                    }
                                    {this.state.viewSteper == '4' && 
                                        <h6 className="steper_title m-t-15">Almost finished!</h6>
                                    }                                    
                                    <ul className="count_base m-t-20">
                                        <li>
                                            <div className="count_box">
                                                <span className={"count " + (this.state.viewSteper == '1' ? 'active' : '')} onClick={() => this.stepperView('1')}>1</span>
                                                <small className="small_txt m-t-5">Create Account</small>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="count_box">
                                                <span className={"count " + (this.state.viewSteper == '2' ? 'active' : '')} onClick={() => this.stepperView('2')}>2</span>
                                                <small className="small_txt m-t-5">Add User</small>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="count_box">
                                                <span className={"count " + (this.state.viewSteper == '3' ? 'active' : '')} onClick={() => this.stepperView('3')}>3</span>
                                                <small className="small_txt m-t-5">Create Ticket</small>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="count_box">
                                                <span className={"count last_count " + (this.state.viewSteper == '4' ? 'active' : '')} onClick={() => this.stepperView('4')}>4</span>
                                                <small className="small_txt m-t-5">Configure</small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>                        
                            </div> 
                        {this.state.viewSteper == '1' && 
                        <div className="create_sec">
                            <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">                             
                                <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Your Restaurant</h5>
                                        <hr />
                                    </div>
                                    <Form> 
                                        <div className="container bg_white">                                                                       
                                            <Row>
                                                <Col sm={4} xs={12}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Name <sup className="sub_txt">*</sup></Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Restaurant Name" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={8}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Address <sup className="sub_txt">*</sup></Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Address" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={4}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">City <sup className="sub_txt">*</sup></Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter City" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={4}>
                                                <FormGroup>
                                                    <Label for="exampleSelect">State <sup className="sub_txt">*</sup></Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>Enter State</option>
                                                        </Input>
                                                </FormGroup>
                                                </Col>
                                                <Col sm={4}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Zip <sup className="sub_txt">*</sup></Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Zip" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={4}>
                                                    <FormGroup >
                                                        <Label className="m-b-10" for="exampleEmail">Phone</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Restaurant Main Phone" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={8}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">Restaurant Type <sup className="sub_txt">*</sup></Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Coffee Shop</option>
                                                            </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm={12}>
                                                    <FormGroup>
                                                        <Label for="exampleSelect">Gross Sales</Label>
                                                            <Input type="select" name="select" id="exampleSelect">
                                                            <option>Select Gross Sales</option>
                                                            </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>                                                                
                                    </div>
                                    <div className="title_sec p-t-30">
                                        <h5 className="p-l-15">Primary Contact</h5>
                                        <hr />
                                    </div>
                                    <div className="container bg_white">                                                                       
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
                                                    <Label className="m-b-10" for="exampleEmail">Cell Phone</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Cell Phone Number" />
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
                                            <Col sm={12}>
                                                <div className="text-center m-t-40 m-b-40">
                                                    <Button className="button_base btn_radius btn_submit" onClick={() => this.stepperView('2')}>NEXT <img className="m-l-10" src={require('../images/next_arrow.svg')} /></Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                                
                            </div>      
                        </div> 
                    </div>
               }

                {this.state.viewSteper == '2' && 
                   <div className="user_sec">                   
                   <div className="core_sec p-b-30">
                   <div className="container form_cover p-0">                             
                       <div className="title_sec p-t-30">
                       <div className="m-header_sec">
                            <h5 className="p-l-15">Add User</h5>
                                <a className="skip_txt p-r-15" href="javascript:void(0);" onClick={() => this.stepperView('3')}><img className="m-r-10" src={require('../images/skip_step.svg')} /> Skip this Step</a>
                            </div>
                        <hr />
                           </div>
                           <Form>                                                           
                           <div className="container bg_white">                                                                       
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
                                           <Input type="email" name="email" id="exampleEmail" placeholder="Enter Mobile Number" />
                                       </FormGroup>
                                   </Col>
                                   <Col sm={6}>
                                           <FormGroup>
                                               <Label for="exampleSelect">Role</Label>
                                                   <Input type="select" name="select" id="exampleSelect">
                                                   <option>Employee</option>
                                                   </Input>
                                           </FormGroup>
                                       </Col>
                                       {/* <Col sm={12}>
                                        <div className="text-right">
                                            <Button className="send_invite"><Link to="/invite"> <img className="m-r-10" src={require('../images/invitation.svg')} /> SEND INVITATION </Link></Button>
                                        </div>
                                        </Col> */}
                                   <Col sm={12}>
                                       <div className="text-center m-t-40 m-b-40">
                                           <div>
                                                <Button className="button_base btn_radius btn_submit btn_back" onClick={() => this.stepperView('1')}><img className="m-r-10" src={require('../images/back_arrow.svg')} /> BACK</Button>
                                                <Button className="button_base btn_another m-l-10 m-r-10">ADD ANOTHER </Button>
                                                <Button className="button_base btn_radius btn_submit btn_next" onClick={() => this.stepperView('3')}>NEXT <img className="m-l-10" src={require('../images/next_arrow.svg')} /></Button>
                                           </div>                                           
                                       </div>
                                   </Col>
                               </Row>
                           </div>
                       </Form>
                       
                   </div>      
               </div> 
           </div>
                }

                {this.state.viewSteper == '3' && 
                    <div className="ticket_sec">
                        <div className="core_sec p-b-30">
                        <div className="container form_cover p-0">                             
                            <div className="title_sec p-t-30">
                                <div className="m-header_sec">
                                <h5 className="p-l-15">Create Ticket</h5>
                                    <a className="skip_txt p-r-15" href="javascript:void(0);" onClick={() => this.stepperView('4')}><img className="m-r-10" src={require('../images/skip_step.svg')} /> Skip this Step</a>
                                </div>
                                <hr />
                                </div>
                                <Form> 
                                    <div className="container bg_white">                                                                       
                                        <Row>
                                            <Col sm={12}>
                                                <FormGroup >
                                                    <Label className="m-b-10" for="exampleEmail">Title</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter ticket summary" />
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
                                                    <Label for="exampleSelect">Priority</Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>Emergency</option>
                                                        </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={8}>
                                                <FormGroup>
                                                    <Label for="exampleSelect">FFE (Furni., Fixtures and Equip.) </Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select FFE</option>
                                                        </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4} className="mobile_link">
                                                <Button className="button_link m-t-29 mobile-m"> 
                                                <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d={M16} fill={styles.svg.fillcolor} />
                                                </svg>
                                                {/* <img className="m-r-10" src={require('../images/plus.svg')} /> */}
                                                <Link to="/asset"> ADD NEW FFE </Link></Button>
                                            </Col>
                                            <Col sm={12}>
                                            <FormGroup>
                                                <Label for="exampleText">Description</Label>
                                                <Input type="textarea" name="text" id="exampleText" placeholder="Ticket Description"/>
                                            </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Assign Type</Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>External</option>
                                                        </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Assign To</Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>                                                        
                                                        </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4} className="mobile_link">
                                                <Button className="button_link m-t-29 mobile-m"> <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d={M16} fill={styles.svg.fillcolor} />
                                                </svg> <Link to="/vendor">ADD NEW VENDOR </Link></Button>
                                            </Col>
                                            <Col sm={4}>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Timetabel</Label>
                                                        <Input type="select" name="select" id="exampleSelect">
                                                        <option>Immediate</option>                                                        
                                                        </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={4}>
                                            <FormGroup check className="custom_check m-t-35 mobile-m m-space">
                                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                                <Label for="exampleCheck" check>Recurring</Label>
                                            </FormGroup>
                                            </Col>
                                            <Col sm={4}>
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
                                <div className="title_sec p-t-30">
                                    <h5 className="p-l-15"> <img src={require('../images/photo.svg')} /> Upload Picture <span className="txt_optional">(Optional)</span></h5>
                                    <hr />
                                </div>
                                <div className="container bg_white">                                                                       
                                    <Row>
                                        <Col sm={3} className="upload_btn mobile_link">
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
                                        
                                        <Col sm={12}>
                                            <div className="text-center m-t-40 m-b-40">
                                                <div>
                                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5" onClick={() => this.stepperView('2')}><img className="m-r-10" src={require('../images/back_arrow.svg')} /> BACK</Button>
                                                    <Button className="button_base btn_radius btn_submit btn_next m-l-5" onClick={() => this.stepperView('4')}>NEXT <img className="m-l-10" src={require('../images/next_arrow.svg')} /></Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                            
                        </div>      
                    </div> 
                </div>
                }

                {this.state.viewSteper == '4' && 
                                    <div className="configure_sec">
                                        <div className="core_sec p-b-30">
                                        <div className="container form_cover p-0"> 
                                                <Form> 
                                                    <div className="container bg_white">                                                                       
                                                        <Row>
                                                            <Col sm={12}>
                                                                <div className="complete_box text-center">
                                                                    <img className="complete_logo m-b-40" src={require('../images/complete_logo.svg')} />
                                                                    <p>By clicking complete you agree to the TB terms and conditions listed below</p> 
                                                                    <h5 className="terms_link m-t-30"><img className="m-r-5" src={require('../images/terms_icn.svg')} />Terms of Service</h5>   
                                                                </div>
                                                            </Col>
                                                            <Col sm={12}>
                                                            <div className="text-center m-t-40 m-b-40">
                                                                <div className="action_btn">
                                                                    <Button className="button_base btn_radius btn_submit btn_back m-r-5" onClick={() => this.stepperView('3')}><img className="m-r-10" src={require('../images/back_arrow.svg')} /> BACK</Button>
                                                                    <Button className="button_base btn_radius btn_submit btn_complete m-l-5">COMPLETE </Button>
                                                                </div>
                                                            </div>
                                                        </Col>                                                                                                       
                                                        </Row>                                                                
                                                </div>                                                
                                            </Form>                                            
                                        </div>      
                                    </div> 
                                </div>
                                }

               </div>
            </React.Fragment>
        )
    }
}

export default SignUp
