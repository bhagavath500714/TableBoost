import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class FFE extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }        
    }

    render() {
        return (
            <React.Fragment>
               <div className="work_area_dashboard">                       
                       <div className="detail-header m-t-40">
                        <div className="header_area m-0">  <img className="" src={require('../images/FFE-black.svg')} /> FFE (Furn., Fixtures and Equip.)</div>
                        <div className="toggle-icn">

                        </div>                        
                        </div>
                       <div className="card_main">
                       <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Fryer 101</CardTitle>
                                    <CardText>Plumbing</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/FFE-icn.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Location : FOH</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Fryer #3</CardTitle>
                                    <CardText>Plumbing</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/FFE-icn.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Location : FOH</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Grill 1</CardTitle>
                                    <CardText>Cooking</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/FFE-icn.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Location : BOH Right</h3>
                            </div>        
                            </CardBody>
                        </Card>                        
                        <div className="add_con" onClick={() => this.props.handleChangeState('createFFE')}>
                        <img className="" src={require('../images/add.svg')} />
                        <h3>Add New FFE</h3>
                        </div>
                        </div> 
                   </div>
            </React.Fragment>
        )
    }
}

export default FFE
