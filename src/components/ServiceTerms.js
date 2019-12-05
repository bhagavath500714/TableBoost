import React, { Component } from 'react'
import Header from './Header'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class ServiceTerms extends Component {
    constructor(props) {
        super(props)
        let terms = "user"
        let tabView = "1"
        this.state = {
            terms,
            tabView
        }
    }

    handleChange = (e) => {
        let tabView = "1"
        if(e.target.value === "user") {
            tabView = "1";
        }else {
            tabView = "4"
        }

        this.setState({ terms: e.target.value,tabView:tabView })
    }

    tabView = (type) => {
        this.setState({ tabView: type })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="work_area">
                    <div className="sub_pagetitle">
                        <div className="container p-0">
                            {this.state.terms === "user" && <h6 className="sub_title p-t-30 p-b-30">Terms of Service Restaurants Users <small>(effective December 1, 2019)</small></h6>}
                            {this.state.terms === "supplier" && <h6 className="sub_title p-t-30 p-b-30">Terms of Service Service Providers and Suppliers <small>(effective December 1, 2019)</small></h6>}
                        </div>
                    </div>
                    <div className="termsmain_sec">
                        <div className="core_sec p-b-30">
                            <div className="container form_cover p-0">
                                <div className="title_sec p-t-30">
                                    <div className="flex">
                                        {/* <h5 className="p-l-15">Vendor</h5> */}
                                        <div className="flex m-l-30">
                                            <FormGroup check>
                                                <Label check>
                                                    <Input className="c_radio" type="radio" name="radio2" value="user" defaultChecked onClick={(e) => this.handleChange(e)} />
                                                    Restaurants Users
                                            </Label>
                                            </FormGroup>
                                            <FormGroup className="m-l-20" check>
                                                <Label check>
                                                    <Input className="c_radio" type="radio" name="radio2" value="supplier" onClick={(e) => this.handleChange(e)} />
                                                    Service Providers and Suppliers
                                            </Label>
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="container bg_white">
                                    {this.state.terms === "user" &&
                                        <Row>
                                            <Col sm={12}>
                                                <div className="terms_sec">
                                                    <h5 className="title_txt m-b-20">Welcome to TableBoost! </h5>
                                                    <p>TableBoost provides Facilities Management related solutions and services that enable you (i.e. restaurants) to connect with 3rd parties (i.e. service providers and equipment suppliers) in order to operate your business by requesting and paying for services and products.</p>
                                                    <h5 className="m-t-25">Summary </h5>
                                                    <hr />
                                                    <ul className="terms_ul">
                                                        <li>The TableBoost Facilities Management app <span className="higlite_txt">is free</span> for restaurants to use.</li>
                                                        <li>Standard Implementation and Support <span>is free</span>.</li>
                                                        <li>Restaurants can stop using TableBoost at any time <span className="higlite_txt">without penalty</span>.</li>
                                                        <li>Service Providers and Equipment Suppliers will pay a small fee for each transaction. <span className="higlite_txt">There is no cost to restaurants.</span></li>
                                                    </ul>

                                                    <h5 className="m-t-25">Details </h5>
                                                    <hr />
                                                    <p>TableBoost provides solutions and services that enable you (i.e. restaurants) to connect with 3rd parties (i.e. service providers and equipment suppliers) in order to efficiently operate your business by requesting and paying for services and products. The service providers and equipment suppliers are able to promote, bid on, provide, finance and invoice for their services and products. </p>
                                                    <p>These Terms govern your use of TableBoost and the other products, features, apps, services, technologies, and software we offer (the <a className="link_txt" href="https://www.facebook.com/help/1561485474074139?ref=tos" target="_blank">TableBoost Products</a> or <a className="link_txt" href="https://www.facebook.com/help/1561485474074139?ref=tos" target="_blank">Products</a>), except where we expressly state that separate terms (and not these) apply. These Products are provided to you by TableBoost, Inc. </p>
                                                    <p><span className="higlite_txt">We don’t charge you to use the TableBoost</span> Facilities Management app.Instead, businesses including service providers and equipment suppliers pay us for facilitating the service and purchase transactions, and possibly to show you ads for their products and services. See Exhibit A for Fee Schedule.</p>

                                                    <h5 className="txt_uppercase m-t-25">Support</h5>
                                                    <hr />
                                                    <p><span className="higlite_txt">We don’t charge you for Standard Support</span>.</p>
                                                    <p>Higher levels of Support may be available. See Exhibit B for details.</p>

                                                    <h5 className="txt_uppercase m-t-25">User Conduct</h5>
                                                    <hr />
                                                    <p><span className="higlite_txt">You are responsible for the conduct of your Users</span>. You and your Users must utilize TableBoost honestly and for legal purposes, and only related to the operations of your business. </p>

                                                    <h5 className="txt_uppercase m-t-25">Liability</h5>
                                                    <hr />
                                                    <p>TableBoost has no liability related to the quality or timeliness of any work done or products supplied, nor any liability for payments due.</p>
                                                    <p>You are responsible for paying the service providers and suppliers. </p>
                                                    <p>TableBoost has no liability for any business impact related to the proper or improper performance of the TableBoost app.</p>

                                                    <h5 className="txt_uppercase m-t-25">Invoice Payments</h5>
                                                    <hr />
                                                    <p>For every ticket you create in TableBoost, you must utilize TableBoost to complete the transaction (i.e. approve the invoice and make payment through TableBoost). </p>
                                                    <p>Payments must be made in the timeframe required by the related Service Provider or Supplier and never to exceed 30 days from receipt of valid invoice.  If Payments are not made within the required timeframe, Late Payment Fees will be applied. See Exhibit A.</p>

                                                    <h5 className="txt_uppercase m-t-25">Fees</h5>
                                                    <hr />
                                                    <p>TableBoost does not charge You (restaurants), instead TableBoost takes its fee out of your payment and pays the remainder to the Service Providers and Suppliers. </p>
                                                    <p>If you violate these terms and by-pass the TableBoost payment process (i.e. make payment outside of TableBoost), you will be responsible for the fees due to TableBoost plus any applicable Late Fees. These fees are due upon receipt of invoice. </p>

                                                    <h5 className="txt_uppercase m-t-25">Advertisements</h5>
                                                    <hr />
                                                    <p>By using our Products, you agree that we can show your Users ads that we think will be relevant to your business (i.e. for products and services that you need).  We may use User profile data (i.e. role and business type) to help determine which ads to show each User. </p>
                                                    <p>We don’t sell Users’ personal data to advertisers, and we don’t share information that directly identifies any User (such as your name, email address or other contact information) with advertisers unless you give us specific permission.  See Data Policy for more details. </p>

                                                    <h5 className="txt_uppercase m-t-25">Data Policy</h5>
                                                    <hr />
                                                    <p>Our Data Policy explains how we collect and use your Business and User data to enhance our products and User experience.  See Exhibit C for details.</p>
                                                </div>
                                            </Col>
                                            <Col sm={12}>
                                                <div className="tab_sec m-t-20 m-b-20">
                                                    <div className="tab_header flex-center">
                                                        <div className={"tab_box " + (this.state.tabView === '1' ? 'active' : '')} onClick={() => this.tabView('1')} >Schedule</div>
                                                        <div className={"tab_box " + (this.state.tabView === '2' ? 'active' : '')} onClick={() => this.tabView('2')}>Support</div>
                                                        <div className={"tab_box " + (this.state.tabView === '3' ? 'active' : '')} onClick={() => this.tabView('3')}>Data Policy</div>
                                                    </div>
                                                    {this.state.tabView === '1' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt ">Service Providers </h5>
                                                            <p>(i.e. Plumbers, Electricians, HVAC servicing) will pay TableBoost 3% of every completed service request originated via TableBoost.</p>
                                                            <h5 className="m-t-25 title_txt ">Suppliers </h5>
                                                            <p>(i.e. Equipment retailers) will pay TableBoost 4% of every purchase originated via TableBoost. </p>
                                                            <h5 className="m-t-25 title_txt ">Late Fee. </h5>
                                                            <p>If an approved invoice is not paid within the timeframe required by the Service Provider or Supplier, or 30 days from receipt of invoice, whichever is sooner (the Due Date), the restaurant will be charged a 3% Late Fee and this fee will be charged to the restaurant’s credit card or bank account.  If the Invoice is still not paid 30 days after the Due Date, additional late fees will begin to accrue at 0.1% per day up to the maximum amount allowed by law. </p>
                                                        </div>
                                                    }
                                                    {this.state.tabView === '2' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt">Standard Support </h5>
                                                            <p>TableBoost will provide online support via email, or other electronic tools as may become available, to any User between 9am and 5pm Eastern Standard Time.</p>
                                                            <p>TableBoost will make best effort to respond to all support requests within one business day.</p>
                                                            <h5 className="m-t-25 title_txt">Premium Support</h5>
                                                            <p>TableBoost may offer expanded support hours and faster response times for a fee. This level of support is not currently available. </p>
                                                        </div>
                                                    }
                                                    {this.state.tabView === '3' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt">Data Policy </h5>
                                                            <p>Our Data Policy explains how we collect and use your Business and User data to determine some of the ads you see and provide all of the other services.  See Exhibit C for details.</p>
                                                            <ul className="terms_ul">
                                                                <li><b>Your usage.</b> We may collect information about how you use our Products, such as the types of content you view or engage with; the features you use; and the frequency of your activities. For example, we log when you're using and have last used our Products, and what content you view on our Products.</li>
                                                                <li><p><b>Information about transactions made on our Products.</b> If you use our <a className="link_txt" href="https://www.facebook.com/help/1434403039959381?ref=dp" target="_blank">Products</a> for purchases or other financial transactions (such as Invoice Financing), we collect information about the purchase or transaction.</p>
                                                                    <p>We <span className="higlite_txt">do NOT collect nor store any banking information nor credit card information.</span> This information is handled via a trusted and secure 3rd party (i.e. PayPal). </p></li>
                                                            </ul>
                                                            <h4 className="m-t-25">How do we use the data we gather?</h4>
                                                            <h5 className="m-t-25 title_txt">Product research and development </h5>
                                                            <p>We use the information we have to develop, test and improve our Products, including by conducting surveys and research, and testing and troubleshooting new products and features. </p>
                                                            <h5 className="m-t-25 title_txt">Ads and other sponsored content </h5>
                                                            <p>We use the information we have about you (i.e. role), including information about your business and actions to select and personalize ads, offers and other sponsored content that we show you.</p>
                                                            <h5 className="m-t-25 title_txt">Promote safety, integrity and security. </h5>
                                                            <p>We use the information we have to verify accounts and activity, combat harmful conduct, maintain the integrity of our Products, and promote safety and security. For example, we use data we have to investigate suspicious activity or violations of our terms or policies.</p>
                                                            <h5 className="m-t-25 title_txt">Communicate with you. </h5>
                                                            <p>We may use the information we have to send you marketing communications, communicate with you about our Products, and let you know about our policies and terms. We also use your information to respond to you when you contact us.</p>
                                                            <h5 className="m-t-25 title_txt">Apps, websites, and third-party integrations on or using our Products. </h5>
                                                            <p>When you choose to use third-party apps, websites, or other services that use, or are integrated with, our Products, they can receive information about you (i.e. your role, business size…)</p>
                                                            <h5 className="m-t-25 title_txt">New owner. </h5>
                                                            <p>If the ownership or control of all or part of our Products or their assets changes, we may transfer your information to the new owner.</p>
                                                            <h5 className="m-t-25 title_txt">Sharing with Third-Party Partners </h5>
                                                            <p>We may work with third-party partners who help us provide and improve our Products or who use TableBoost to grow their businesses, which makes it possible to operate. We don't sell any of your personally identifiable information to anyone, and we never will. We also impose strict restrictions on how our partners can use and disclose the data we provide.</p>
                                                            <h5 className="m-t-25 title_txt">Law enforcement or legal requests. </h5>
                                                            <p>We share information with law enforcement when required to do so, or in response to valid legal requests.</p>
                                                        </div>
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    }
                                    {this.state.terms === "supplier" &&
                                        <Row>
                                            <Col sm={12}>
                                                <div className="terms_sec">
                                                    <h5 className="title_txt m-b-20">Welcome to TableBoost! </h5>
                                                    <p>TableBoost provides Facilities Management solutions and services that enable businesses (i.e. restaurants) to connect with service providers and equipment suppliers in order to maintain their equipment and operate their business by requesting and paying for services and products.</p>
                                                    <p>Service Providers and Suppliers benefit by receiving service requests and purchase requests on an ongoing basis and have the opportunity to place ads to restaurant managers in their markets.</p>
                                                    <h5 className="m-t-25">Summary </h5>
                                                    <hr />
                                                    <ul className="terms_ul">
                                                        <li>The TableBoost Facilities Management app <span className="higlite_txt">is free</span> for restaurants to use.</li>
                                                        <li>Service Providers and Equipment Suppliers will receive service requests and purchase orders thru TableBoost and will pay a small fee for each approved invoice when it is paid.</li>
                                                        <li>Standard Implementation and Support <span>is free</span>.</li>

                                                    </ul>

                                                    <h5 className="m-t-25">Details </h5>
                                                    <hr />
                                                    <p>TableBoost provides solutions and services that enable restaurants to connect with 3rd parties (i.e. service providers and equipment suppliers) in order to efficiently operate their business by requesting and paying for services and products. Service providers and equipment suppliers are able to promote, bid on, provide, and invoice for their services and products. </p>
                                                    <p>These Terms govern your use of TableBoost and the other products, features, apps, services, technologies, and software we offer (the <a className="link_txt" href="https://www.facebook.com/help/1561485474074139?ref=tos" target="_blank">TableBoost Products</a> or <a className="link_txt" href="https://www.facebook.com/help/1561485474074139?ref=tos" target="_blank">Products</a>), except where we expressly state that separate terms (and not these) apply. These Products are provided to you by TableBoost, Inc. </p>
                                                    <h5 className="txt_uppercase m-t-25">Support</h5>
                                                    <hr />
                                                    <p><span className="higlite_txt">We don’t charge you for Standard Support</span>. Higher levels of Support may be available. See Exhibit B for details.</p>

                                                    <h5 className="txt_uppercase m-t-25">User Conduct</h5>
                                                    <hr />
                                                    <p><span className="higlite_txt">You are responsible for the conduct of your Users</span>. You and your Users must utilize TableBoost honestly and for legal purposes, and only related to the operations of your business. </p>

                                                    <h5 className="txt_uppercase m-t-25">Liability</h5>
                                                    <hr />
                                                    <p>TableBoost has no liability related to the quality or timeliness of any work done or products supplied, nor any liability for payments due.</p>
                                                    <p>You are responsible for paying the service providers and suppliers. </p>
                                                    <p>TableBoost has no liability for any business impact related to the proper or improper performance of the TableBoost app.</p>

                                                    <h5 className="txt_uppercase m-t-25">Invoice Payments</h5>
                                                    <hr />
                                                    <p>For every service request and purchase order created in TableBoost by a restaurant, you must utilize TableBoost to complete the transaction (i.e. Accept the order, note when work is completed, submit invoice).  Approved invoices must be paid by restaurants within 30 days of receipt of invoice or sooner if your payment terms require.  See Exhibit A.</p>

                                                    <h5 className="txt_uppercase m-t-25">Fees</h5>
                                                    <hr />
                                                    <p>TableBoost does not charge the restaurants, instead TableBoost collects the payment from the restaurants and takes its fee out of the payment and pays the rest to you. </p>
                                                    <p>If you violate these terms and by-pass the TableBoost payment process (i.e. take payment outside of TableBoost), you will still be responsible for the fees due to TableBoost. These fees are due upon receipt of invoice. </p>

                                                    <h5 className="txt_uppercase m-t-25">Advertisements</h5>
                                                    <hr />
                                                    <p>As a Service Provider or Supplier you may wish to place ads or sponsor content in the TableBoost app from time to time.  Restaurant users have all agreed to be shown ads that we think will be relevant to their business (i.e. for products and services that you provide).  We may use User profile data (i.e. role and business type) to help determine which ads to show each User. </p>
                                                    <p>We don’t sell Users’ personal data to advertisers, and we don’t share information that directly identifies any User (such as name, email address or other contact information) with advertisers unless we are given specific permission.  See Data Policy for more details. </p>

                                                    <h5 className="txt_uppercase m-t-25">Data Policy</h5>
                                                    <hr />
                                                    <p>Our Data Policy explains how we collect and use your Business and User data to enhance our products and User experience.  See Exhibit C for details.</p>
                                                </div>
                                            </Col>
                                            <Col sm={12}>
                                                <div className="tab_sec m-t-20 m-b-20">
                                                    <div className="tab_header flex-center">
                                                        <div className={"tab_box " + (this.state.tabView === '4' ? 'active' : '')} onClick={() => this.tabView('4')} >Fee Schedule</div>
                                                        <div className={"tab_box " + (this.state.tabView === '5' ? 'active' : '')} onClick={() => this.tabView('5')}>Support</div>
                                                        <div className={"tab_box " + (this.state.tabView === '6' ? 'active' : '')} onClick={() => this.tabView('6')}>Data Policy</div>
                                                    </div>
                                                    {this.state.tabView === '4' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt ">Service Providers </h5>
                                                            <p>(i.e. Plumbers, Electricians, HVAC servicing) will pay TableBoost 3% of every completed service request (i.e. repair, maintenance) originated via TableBoost.</p>
                                                            <h5 className="m-t-25 title_txt ">Suppliers </h5>
                                                            <p>(i.e. Equipment retailers) will pay TableBoost 4% of every purchase originated via TableBoost. </p>
                                                        </div>
                                                    }
                                                    {this.state.tabView === '5' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt">Standard Support </h5>
                                                            <p>TableBoost will provide online support via email, or other electronic tools as may become available, to any User between 9am and 5pm Eastern Standard Time.</p>
                                                            <p>TableBoost will make best effort to respond to all support requests within one business day.</p>
                                                            <h5 className="m-t-25 title_txt">Premium Support</h5>
                                                            <p>TableBoost may offer expanded support hours and faster response times for a fee. This level of support is not currently available.</p>
                                                        </div>
                                                    }
                                                    {this.state.tabView === '6' &&
                                                        <div className="tab_content m-t-5">
                                                            <h5 className="m-t-25 title_txt">Data Policy </h5>
                                                            <p>Our Data Policy explains how we collect and use your Business and User data to determine some of the ads you see and provide all of the other services.  See Exhibit C for details.</p>
                                                            <ul className="terms_ul">
                                                                <li><b>Your usage.</b> We may collect information about how you use our Products, such as the types of content you view or engage with; the features you use; and the frequency of your activities. For example, we log when you're using and have last used our Products, and what content you view on our Products.</li>
                                                                <li><p><b>Information about transactions made on our Products.</b> If you use our <a className="link_txt" href="https://www.facebook.com/help/1434403039959381?ref=dp" target="_blank">Products</a> for purchases or other financial transactions (such as Invoice Financing), we collect information about the purchase or transaction.</p>
                                                                    <p>We <span className="higlite_txt">do NOT collect nor store any banking information nor credit card information.</span> This information is handled via a trusted and secure 3rd party (i.e. PayPal). </p></li>
                                                            </ul>
                                                            <h4 className="m-t-25">How do we use the data we gather?</h4>
                                                            <h5 className="m-t-25 title_txt">Product research and development </h5>
                                                            <p>We use the information we have to develop, test and improve our Products, including by conducting surveys and research, and testing and troubleshooting new products and features. </p>
                                                            <h5 className="m-t-25 title_txt">Ads and other sponsored content </h5>
                                                            <p>We use the information we have about you (i.e. role), including information about your business and actions to select and personalize ads, offers and other sponsored content that we show you. </p>
                                                            <h5 className="m-t-25 title_txt">Promote safety, integrity and security. </h5>
                                                            <p>We use the information we have to verify accounts and activity, combat harmful conduct, maintain the integrity of our Products, and promote safety and security. For example, we use data we have to investigate suspicious activity or violations of our terms or policies.</p>
                                                            <h5 className="m-t-25 title_txt">Communicate with you. </h5>
                                                            <p>We may use the information we have to send you marketing communications, communicate with you about our Products, and let you know about our policies and terms. We also use your information to respond to you when you contact us.</p>
                                                            <h5 className="m-t-25 title_txt">Apps, websites, and third-party integrations on or using our Products. </h5>
                                                            <p>When you choose to use third-party apps, websites, or other services that use, or are integrated with, our Products, they can receive information about you (i.e. your role, business size…)</p>
                                                            <h5 className="m-t-25 title_txt">New owner. </h5>
                                                            <p>If the ownership or control of all or part of our Products or their assets changes, we may transfer your information to the new owner.</p>
                                                            <h5 className="m-t-25 title_txt">Sharing with Third-Party Partners </h5>
                                                            <p>We may work with third-party partners who help us provide and improve our Products or who use TableBoost to grow their businesses, which makes it possible to operate. We don't sell any of your personally identifiable information to anyone, and we never will. We also impose strict restrictions on how our partners can use and disclose the data we provide.</p>
                                                            <h5 className="m-t-25 title_txt">Law enforcement or legal requests. </h5>
                                                            <p>We share information with law enforcement when required to do so, or in response to valid legal requests.</p>
                                                        </div>
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ServiceTerms
