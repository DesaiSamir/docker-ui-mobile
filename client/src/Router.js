import {Provider} from 'mobx-react'
import React from 'react'
import {BrowserRouter as ReactRouter, Route} from 'react-router-dom'
import App from './App'
import Containers from './components/Containers/Containers'
// import Login from './components/Login/Login'
// import Images from './components/Images/Images'
// import Volumes from './components/Volumes/Volumes'
// import Networks from './components/Networks/Networks'

const appHeights = {
    appHeaderHeight : 66,
    appFooterHeight : 66,
    contentHeight: window.innerHeight - 130
};

export default class Router extends React.Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <ReactRouter>
                    <App path="/" appHeights={appHeights} store={this.props.store}>
                        <Route exact path="/" render={(props) => <Containers {...props} appHeights={appHeights} store={this.props.store}/>} />
                        <Route path="/containers" render={(props) => <Containers {...props} appHeights={appHeights} store={this.props.store}/>} />
                        {/* <Route path="login" component={Login} />
                        <Route path="images" component={Images} />
                        <Route path="volumes" component={Volumes} />
                        <Route path="networks" component={Networks} /> */}
                    </App>
                </ReactRouter>
            </Provider>
        )
  }
}