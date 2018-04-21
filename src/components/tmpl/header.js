import React, { Component, PureComponent } from 'react';
import * as R from 'ramda';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


const styles = withStyles( theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));


const Header = (props) => {

    const {classes} = props;

    return <div rel="xxx" className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Header</Paper>
            </Grid>
        </Grid>
    </div>
}


export default styles(Header);

//export default Header;