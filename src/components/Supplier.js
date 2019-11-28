import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class Supplier extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
              <div className="work_area_dashboard">
                       <div className="header_area">  <img className="" src={require('../images/market-store.svg')} /> Service Providers & Suppliers</div>
                       <div className="card_main">                       
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Simmons</CardTitle>
                                    <CardText>Plumbing</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/vendor1.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Type : Supplier</h3>
                            </div>        
                            </CardBody>
                        </Card>                        
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Remtack</CardTitle>
                                    <CardText>Cooking</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/vendor1.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Type : Service</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                            <div className="card_con">
                                <div className="card_sec">
                                    <CardTitle>Joe Brown</CardTitle>
                                    <CardText>HVAC</CardText>
                                </div>
                                <div className="card_img_sec"><img className="" src={require('../images/vendor1.svg')} /></div>
                            </div>
                            <div className="card_bottom">
                                 <h3>Type : Service</h3>
                            </div>        
                            </CardBody>
                        </Card>
                        <div className="add_con" onClick={() => this.props.handleChangeState('addSupplier')}>
                        <img className="" src={require('../images/add.svg')} />
                        <h3>Add New Supplier</h3>
                        </div>
                        </div> 
                   </div>  
            </React.Fragment>
        )
    }
}

export default Supplier
