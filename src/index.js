import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cards.css';
import CardGrid from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CardGrid />, document.getElementById('root'));
registerServiceWorker();