import React, { Component, PureComponent } from 'react';
import * as R from 'ramda';

import { withStyles } from 'material-ui/styles';
import {AppBar,Toolbar, Typography } from 'material-ui';


const styles = withStyles( theme => {
  return{
        root: { flexGrow: 1 },
        flex: { flex: 1 },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'left',
            color: theme.palette.text.secondary,
        }
    }
});


const Header = (props) => {
    const {classes} = props;
    return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Catalog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
}

export default styles(Header);