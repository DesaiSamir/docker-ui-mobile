import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const containerIcon = <FontIcon className="material-icons">subtitles</FontIcon>;
const imageIcon = <FontIcon className="material-icons">photo_library</FontIcon>;
const volumeIcon = <FontIcon className="material-icons">storage</FontIcon>;
const networkIcon = <FontIcon className="material-icons">settings_remote</FontIcon>;

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  select = (index) => this.setState({selectedIndex: index});

  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/v1/containers');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    styles.body.height = this.props.appHeights.contentHeight
    styles.header.height = this.props.appHeights.appHeaderHeight

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Paper>
        <AppBar 
          title="DockerUI"
          style={styles.header}
          titleStyle={styles.titleStyle}
          iconElementLeft={ <img src={logo} alt="logo" style={styles.appLogo}/> }>
        </AppBar>        
        <Paper style={styles.body}>
          {this.props.children}
        </Paper>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={styles.footer} >
          <Link to="/Home">
            <BottomNavigationItem
              label="Containers"
              icon={containerIcon}
              onClick={() => this.select(0)} />
          </Link>
          <Link to="/Images">
            <BottomNavigationItem
              label="Images"
              icon={imageIcon}
              onClick={() => this.select(1)} />
          </Link>
          <Link to="/Netowrk">
            <BottomNavigationItem
              label="Network"
              icon={networkIcon}
              onClick={() => this.select(2)} />
          </Link>
          <Link to="/Volume">
            <BottomNavigationItem
              label="Volumes"
              icon={volumeIcon}
              onClick={() => this.select(3)} />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default App;

const styles = {
  appLogo: {
    height: 40,
    animation: 'App-logo-spin infinite 20s linear'
  },
  footer: {
    backgroundColor: '#26C6DA',
    boxShadow: '0 -4px 10px 0px rgba(0,0,0,0.8)',
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
}