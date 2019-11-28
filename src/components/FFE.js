import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Button, Table } from 'reactstrap';
import helperSvg from "../images/helperSvg";
import { Link } from 'react-router-dom';

class FFE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            viewTable:false,
            viewCard:true
        }
    }

    toggleTable = () => {
        var res = this.state.viewTable;
        var ret = this.state.viewCard;
        this.setState({viewTable: !res });
        this.setState({viewCard: !ret });
    }

    render() {
        const { svgPath, styles } = helperSvg;
        const { M16 } = svgPath;
        return (
            <React.Fragment>
                <div className="work_area_dashboard ffe_sec">
                    <div className="detail-header m-t-40">
                        <div className="header_area m-0">  <img className="" src={require('../images/FFE-black.svg')} /> FF&E (Furniture, Fixtures & Equipment)</div>
                        <div className="tool-sec">
                            <Button className="button_link m-r-10 mobile-m">
                                <svg className="m-r-10" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={M16} fill={styles.svg.fillcolor} />
                                </svg>
                                <Link to="/asset"> ADD NEW FFE </Link></Button>
        {!this.state.viewCard && <img className="pointer" src={require('../images/card.svg')} onClick={() => this.toggleTable()} title="Card view"/> }
        {this.state.viewCard && <img className="pointer" src={require('../images/table.svg')} onClick={() => this.toggleTable()} title="Table view" /> }
                        </div>
                    </div>
                    {this.state.viewCard && 
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
                            <h3>Add New FF&E</h3>
                        </div>
                    </div>
                    }
                    {this.state.viewTable && 
                    <div className="table_sec m-t-20">
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fryer #1</td>
                                    <td>Cooking</td>
                                    <td>BOH Left</td>
                                    <td>Simmons</td>
                                </tr> 
                                <tr>
                                    <td>Fryer #2</td>
                                    <td>Cooking</td>
                                    <td>BOH Left</td>
                                    <td>Simmons</td>
                                </tr>
                                <tr>
                                    <td>Mens Bath</td>
                                    <td>Cleaning</td>
                                    <td>FOH</td>
                                    <td>none</td>
                                </tr>                               
                            </tbody>
                        </Table>
                    </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default FFE
