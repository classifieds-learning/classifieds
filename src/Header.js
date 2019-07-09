import React, { Component } from 'react';
import './Header.css';
import Dropdown from './Dropdown';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    {/* <h1>Classifieds</h1> */}

                    <Dropdown leftIcon="fas fa-map-marker-alt" rightIcon="fas fa-chevron-down" />
                </div>
            </div>
        )
    }
}