import { render } from 'inferno';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './static/styles/index.css';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
