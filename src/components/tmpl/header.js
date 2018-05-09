import React, { Component, PureComponent, Fragment } from 'react';
import * as R from 'ramda';


import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Button, MenuItem } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from 'material-ui/styles';


import {DropDown} from 'components/common/controlls';


const menu = [
    { id: 1, name: '1111' },
    { id: 2, name: '2222' },
    { id: 3, name: '3333' },
    { id: 4, name: '4444' },
];


class Header extends PureComponent
{

    select = ( select ) => {

    };

    render(){
        const {classes} = this.props;

        return <div className={classes.root}>

            <AppBar position="static">

                <Toolbar>

                    <DropDown>

                        <IconButton className={classes.menuButton} color="inherit" > <MenuIcon/> </IconButton>

                        { menu.map( ( item )=>
                            <MenuItem onClick={(e)=>this.select(item.id)} key={item.id} >{item.name}</MenuItem> ) }

                    </DropDown>

                    <Typography variant="title" color="inherit" className={classes.flex}>Catalog</Typography>

                    <Button color="inherit">Login</Button>

                    <IconButton>
                        <AccountCircle />
                    </IconButton>

                </Toolbar>

            </AppBar>
        </div>
    }

}


const stylize = withStyles( theme => {
    return{
        root: { flexGrow: 1 },
        flex: { flex: 1 },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
    }
});


export default stylize(Header);