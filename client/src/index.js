import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import './styles/index.css';
import AppStore from './stores/AppStore';
import WebFont from 'webfontloader';
import * as serviceWorker from './service/serviceWorker';
require('babel-polyfill')

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif', 'Lucida Console', 'Lucida Sans Typewriter', 'monospace', 'monaco', 'Bitstream Vera Sans Mono']
    }
});

ReactDOM.render(
    <Router store={new AppStore()} />,
    document.getElementById('root')
);

serviceWorker.unregister();
