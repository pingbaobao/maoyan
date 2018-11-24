import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  '@lib'
ReactDOM.render(<App />, document.getElementById('root'));
//浏览器缓存
serviceWorker.unregister();
