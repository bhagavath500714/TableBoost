import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="heade_sec m-header">
                    <img className="logo_img m-l-20 d-logo" src={require('../images/logo.svg')} />
                    <img className="logo_img m-l-20 m-logo" src={require('../images/m-logo.svg')} />
                </div> 
            </React.Fragment>
        )
    }
}

export default Header
