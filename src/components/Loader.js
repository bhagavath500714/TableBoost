import React, { Component } from 'react'

class Loader extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }        
    }

    render() {
        return (
            <React.Fragment>
                <div className="loader_sec">
                    {/* <div class="loading">
                        <div class="square square-a state1a"></div>
                        <div class="square square-a state2a"></div>
                        <div class="square square-a state3a"></div>
                        <div class="square square-a state4a"></div>
                    </div> */}
                    <img className="load_img" src={require('../images/loading.gif')} />
                </div>                
            </React.Fragment>
        )
    }
}

export default Loader
