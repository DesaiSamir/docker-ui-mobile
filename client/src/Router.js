import {Provider} from 'mobx-react'
import React from 'react'
import {BrowserRouter as ReactRouter, Route} from 'react-router-dom'
// import AppStore from './stores/AppStore'
// import Login from './components/Login/Login'
import App from './App'
// import Images from './components/Images/Images'
import Containers from './components/Containers/Containers'
// import Volumes from './components/Volumes/Volumes'
// import Networks from './components/Networks/Networks'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const appHeights = {
    appHeaderHeight : 56,
    appFooterHeight : 56,
    pageHeaderHeight: 0,
    pageFooterHeight: 0,
    tableHeight: 115,
    contentHeight: window.innerHeight - 112
};

export default class Router extends React.Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <ReactRouter>
                    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                        <App path="/" appHeights={appHeights} store={this.props.store}>
                            <Route exact path="/" render={(props) => <Containers {...props} appHeights={appHeights} store={this.props.store}/>} />
                            {/* <Route path="login" component={Login} />
                            <Route path="images" component={Images} /> */}
                            <Route path="/containers" render={(props) => <Containers {...props} appHeights={appHeights} store={this.props.store}/>} />
                            {/* <Route path="volumes" component={Volumes} />
                            <Route path="networks" component={Networks} /> */}
                        </App>
                    </MuiThemeProvider>
                </ReactRouter>
            </Provider>
        )
  }
}