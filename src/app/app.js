import React from 'react';
import ReactDOM from 'react-dom';

import {MainComponent} from './components/MainComponent.react';

let start = new Date().getTime();
/* istanbul ignore next */
setInterval(() => {
  ReactDOM.render(
    <MainComponent elapsed={new Date().getTime() - start}/>,
    document.getElementById('app')
  );
}, 50);
