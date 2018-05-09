import React, { PureComponent, Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import {Menu, MenuItem} from 'material-ui'


const propTypes = {
    items:      PropTypes.array,
    onSelect: PropTypes.func,
    children: function( props, propName, componentName )
    {
        if( props[propName].length !== 2 )
        {

        }
    }
};


class DropDown extends PureComponent {

    state = {
        anchorEl: null,
    };

    open = e => {
        this.setState({ anchorEl: e.currentTarget });
    };

    select = ( select ) => {
        this.props.onSelect( select );
        this.close();
    };

    close = () => { this.setState({ anchorEl: null }); };

    render() {

        const { anchorEl } = this.state;
        const [ Btn, Options ] = this.props.children;

        const Button = cloneElement( Btn, {
            'aria-owns': anchorEl ? 'drop-down-menu' : null,
            'aria-haspopup' : "true",
            'onClick' : this.open
        } );

        return (
            <Fragment>

                {Button}

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClick={this.close}
                    onClose={this.close}
                >
                    {Options||''}

                </Menu>

            </Fragment>
        );
    }

};

DropDown.propTypes = propTypes;


export default DropDown;