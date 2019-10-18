import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="heade_sec">
                    <img className="logo_img m-l-20" src={require('../images/logo.svg')} />
                </div> 
            </React.Fragment>
        )
    }
}

export default Header
