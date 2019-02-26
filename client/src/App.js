import React, { Component } from 'react';
import logo from './dockericon.png';
import './styles/App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Paper, BottomNavigation, Avatar, Typography, BottomNavigationAction } from '@material-ui/core';
import { Subtitles, PhotoLibrary, Storage, SettingsRemote } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingBottom: 50,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appLogo: {
    height: 40,
    animation: 'App-logo-spin infinite 20s linear'
  },
  footer: {
    flexGrow: 1,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    padding: 10,
    boxShadow: '0 4px 10px 0px rgba(0,0,0,0.8)',
  },
  body: {
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
  },
  header: {
    position: 'fixed',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 10px 0px rgba(0,0,0,0.8)',
  }
};

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    var bodyHeight = this.props.appHeights.contentHeight
    var headerHeight = this.props.appHeights.appHeaderHeight

    return (
      <Paper className={classes.root} elevation={1}>
        <AppBar position="static" style={styles.header}> 
          <Toolbar>
            <Avatar alt="docker-ui" src={logo} className={classes.avatar} />
            <Typography variant="h6" color="inherit" className={classes.title}>
              Docker UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.body} elevation={1} style={{height: bodyHeight, top: headerHeight}}>
          {this.props.children}
        </Paper>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.footer}>
            <BottomNavigationAction
              label="Containers"
              icon={<Subtitles/>}
              component={Link}
              to="/containers"
              />
            <BottomNavigationAction
              label="Images"
              icon={<PhotoLibrary/>}
              component={Link}
              to="/images"
              />
            <BottomNavigationAction
              label="Network"
              icon={<SettingsRemote/>}
              component={Link}
              to="/networks"
              />
            <BottomNavigationAction
              label="Volumes"
              icon={<Storage/>}
              component={Link}
              to="/volumes"
              />
        </BottomNavigation>
      </Paper>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
