import React, { Component } from 'react';
import logo from './dockericon.png';
import './styles/App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Paper, BottomNavigation, Avatar, Typography, BottomNavigationAction, IconButton } from '@material-ui/core';
import { Subtitles, PhotoLibrary, Storage, SettingsRemote } from '@material-ui/icons';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';

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
    paddingBottom: 10,
    boxShadow: '0 -4px 10px 0px rgba(0,0,0,0.8)',
  },
  actionButton: {
    padding: '16px 0',
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
      theme: 'dark',
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleToggle = (event) => { 
    var theme = 'dark'
    
    if(this.state.theme === 'dark')
      theme = 'light'

    this.setState({ theme });
  };

  render() {
    var theme = createMuiTheme({
      palette: {
          type: this.state.theme,
      },
      typography: {
          useNextVariants: true,
        },
    });

    const { classes } = this.props;
    const { value } = this.state;
    var bodyHeight = this.props.appHeights.contentHeight
    var headerHeight = this.props.appHeights.appHeaderHeight

    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.root} elevation={1}>
          <AppBar position="static" style={styles.header}> 
            <Toolbar>
              <Avatar alt="docker-ui" src={logo} className={classes.avatar} />
              <Typography variant="h6" color="inherit" className={classes.title}>
                Docker UI
              </Typography>
              <IconButton onClick={this.handleToggle.bind(this)}>
                <Icon>lightbulb</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Paper className={classes.body} elevation={1} style={{height: bodyHeight, top: headerHeight}}>
            {this.props.children}
          </Paper>
          <BottomNavigation value={value} onChange={this.handleChange} className={classes.footer}>
            <BottomNavigationAction
              className={classes.actionButton}
              showLabel
              label="Containers"
              icon={<Subtitles/>}
              component={Link}
              to="/containers"
              />
            <BottomNavigationAction
              className={classes.actionButton}
              showLabel
              label="Images"
              icon={<PhotoLibrary/>}
              component={Link}
              to="/images"
              />
            <BottomNavigationAction
              className={classes.actionButton}
              showLabel
              label="Network"
              icon={<SettingsRemote/>}
              component={Link}
              to="/networks"
              />
            <BottomNavigationAction
              className={classes.actionButton}
              showLabel
              label="Volumes"
              icon={<Storage/>}
              component={Link}
              to="/volumes"
              />
          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
