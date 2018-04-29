import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Menu, MenuItem} from 'material-ui'

import {OutsideClick} from 'components/common/controlls';



class DropDown extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.open = this.open.bind( this );
        this.select = this.select.bind( this );
    }

    open()
    {
        this.setState( { open: true } )
    }

    select()
    {
        //console.log( 'xxx' );

        //this.setState( { open: false } )
    }


    render()
    {
        const children = this.props.children;

        return <Fragment>
            <OutsideClick>
                <div onClick={this.open} >
                    {this.props.children}
                </div>

                <Menu open={ this.state.open } >
                    <MenuItem onClick={this.select}>zzzzz</MenuItem>
                    <MenuItem onClick={this.select}>zzzzz</MenuItem>
                    <MenuItem onClick={this.select}>zzzzz</MenuItem>
                </Menu>
            </OutsideClick>
        </Fragment>
    }

};


DropDown.PropTypes = {
    items: PropTypes.array
};


export default DropDown;