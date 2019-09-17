import layers from './static/data/layers';
import SplitScreenSlider from './components/SplitScreenSlider';

const App = () => (
  <div className="app">
    <SplitScreenSlider layers={layers} />
  </div>
);

export default App;