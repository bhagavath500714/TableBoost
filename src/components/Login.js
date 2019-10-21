import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


export class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            modal : false
        }        
    }     
      
    toggleConz = () => {
        console.log("modal"+this.state.modal)
        this.setState({modal : !this.state.modal});
    }   

    addModel = () => {         
        return (
          <div>            
            <Modal className="forgot_model" isOpen={this.state.modal} toggle={this.toggleConz} size="md"  centered>
              <ModalHeader toggle={this.toggleConz} ></ModalHeader>
              <ModalBody className="p-t-0">
                    <div className="model_sec">
                        <img className="m-b-25" src={require('../images/broken-link.svg')} />
                        <p>We have sent a new link with instructions on how to set your password to James.william@tableboost.com</p>
                            <h5 onClick={this.toggleConz}>Got it Thanks!</h5>
                    </div>
              </ModalBody>              
            </Modal>
          </div>
        );
      }

    render() {
        return (
            <React.Fragment>
                <div className="login_sec">
                    <div className="container-fluid">
                    <Row>
                        <Col md={3} className="p-0 mobile_hide">
                            <div className="login_bg">
                                <div className="welcome_txt">
                                    <h1>Welcome!</h1>
                                    <p>Sign up your restaurant and start saving time and money.</p>
                                    <Button className="button_base btn_radius button_bordered"><Link to="/signup">SIGN UP </Link></Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} xs={12} md={9}>
                            <div className="login_wrapper">
                                <div className="login_box ">
                                    <img src={require('../images/logo.svg')} />
                                    <Form>
                                        <FormGroup className="m-t-41">
                                            <Label className="m-b-10" for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email ID" />
                                        </FormGroup>
                                        <FormGroup className="m-t-30 m-b-0">
                                            <Label className="m-b-10" for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
                                        </FormGroup>
                                        <a href="javascript:void(0);" className="forgot_txt m-t-13" onClick={() => this.toggleConz()}>Forgot Password?</a>
                                        <Button className="button_base btn_radius float-right login_btn">LOGIN</Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>                        
                    </Row>
                    </div>
                </div>
                {this.state.modal &&
                    this.addModel()
                }
            </React.Fragment>
        )
    }
}

export default Login
