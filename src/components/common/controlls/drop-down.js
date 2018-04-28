import React, { Component, PureComponent, Fragment } from 'react';

class DropDown extends PureComponent {

    render()
    {
        const children = this.props.children;

        console.log( children );

        return <Fragment>
            {this.props.children}
        </Fragment>
    }

};

export default DropDown;