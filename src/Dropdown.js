import React, { Component } from 'react';

import './Dropdown.css';

export default class Dropdown extends Component {
    constructor() {
        super();

        this.focusInput = this.focusInput.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus() {
        console.log('on focus');
        this.options.style.display = 'block';
    }

    onBlur() {
        console.log('on blur');
        this.options.style.display = 'none';
    }

    focusInput(e) {
        this.input.focus();
    }

    optionSelected() {
        console.log('Option Selected');
    }

    render() {
        const leftIconClassName = this.props.leftIcon ? this.props.leftIcon : '';
        const $leftIcon = this.props.leftIcon ? <i
            ref={icon => this.leftIcon = icon}
            className={leftIconClassName} /> : null;

        const rightIconClassName = this.props.rightIcon ? this.props.rightIcon : '';
        const $rightIcon = this.props.rightIcon ? <i
            ref={icon => this.rightIcon = icon}
            className={rightIconClassName}
            onClick={this.focusInput} /> : null;

        return (
            <div className="dropdown" >
                <input
                    ref={input => this.input = input}
                    className="input"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder="Search city, area or suburb..." />
                {$leftIcon}
                {$rightIcon}

                <div
                    ref={options => this.options = options}
                    className="options"
                    onClick={this.optionSelected}>
                    <div className="option">
                        <h4>Option 1</h4>
                    </div>

                    <div className="option">
                        <h4>Option 1</h4>
                    </div>

                    <div className="option">
                        <h4>Option 1</h4>
                    </div>

                    <div className="option">
                        <h4>Option 1</h4>
                    </div>

                    <div className="option">
                        <h4>Option 1</h4>
                    </div>

                    <div className="option">
                        <h4>Option 1</h4>
                    </div>
                </div>
            </div>
        );
    }
}