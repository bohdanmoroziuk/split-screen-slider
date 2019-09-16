import { render } from 'inferno';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
