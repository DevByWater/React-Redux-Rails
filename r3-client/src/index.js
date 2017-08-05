import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import renderRoutes from './routes'



ReactDOM.render(renderRoutes(), document.getElementById('root'));
registerServiceWorker();
