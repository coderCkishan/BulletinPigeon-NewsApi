import React, { Component } from 'react';
import "./Spinner.css"

export class Spinner extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
              <div className='loader'></div>
            </div>
        )
    }
}

export default Spinner
