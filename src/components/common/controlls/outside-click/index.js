import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";

class OutsideClick extends PureComponent {


    constructor(props) {
        super(props);
    }


    handleClickOutside( e ){
        console.log('handleClickOutside');
    };


    test( e )
    {
        console.log('test');
    }


    render()
    {
        return <div onClick={this.test} >{this.props.children}</div>
    }


};


OutsideClick.propTypes = {
    children: PropTypes.element.isRequired,
};


export default onClickOutside( OutsideClick );