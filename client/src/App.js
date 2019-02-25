import React, { Component } from 'react';
import logo from './logo.svg';
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
  grow: {
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
  },
  body: {
    backgroundColor: '#009688',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  header: {
    boxShadow: '0 4px 10px 0px rgba(0,0,0,0.8)',
    fontFamily: 'MAGNETOB',
  },
  titleStyle: {
    fontSize: '3em',
    textShadow: 'rgb(0, 0, 0) 3px 3px 0px',
  }
};

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedIndex: 0,
      value: 0,
    }
  }
  
  select = (index) => this.setState({selectedIndex: index});

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick = (event, value) => {
    console.log("event: " + event);
    console.log("value: " + value);
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    // classes.body.height = this.props.appHeights.contentHeight
    // classes.header.height = this.props.appHeights.appHeaderHeight

    return (
      <Paper className={classes.root} elevation={1}>
        <AppBar position="static"> 
          <Toolbar>
            <Avatar alt="docker-ui" src={logo} className={classes.avatar} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Docker UI
            </Typography>
          </Toolbar>
        </AppBar> 
          {this.props.children}
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
