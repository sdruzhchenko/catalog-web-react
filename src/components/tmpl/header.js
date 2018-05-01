import React, { Component, PureComponent } from 'react';
import * as R from 'ramda';

import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Button } from 'material-ui';
import MenuIcon from '@material-ui/icons/Menu';
import {DropDown} from 'components/common/controlls';


import AccountCircle from '@material-ui/icons/AccountCircle';


const menu = [
    { name: '1111' },
    { name: '2222' },
    { name: '3333' },
    { name: '4444' },
];


const Header = (props) => {
    const {classes} = props;
    return <div className={classes.root}>

        <AppBar position="static">

            <Toolbar>

                <DropDown items={menu} >

                    <IconButton className={classes.menuButton} color="inherit"  >
                        <MenuIcon/>
                    </IconButton>

                    { item => <div>item.name</div> }

                </DropDown>


                <Typography variant="title" color="inherit" className={classes.flex}> Catalog </Typography>


                <Button color="inherit">Login</Button>


                <IconButton>
                    <AccountCircle />
                </IconButton>


            </Toolbar>

        </AppBar>
    </div>
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