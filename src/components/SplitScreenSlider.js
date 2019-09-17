import { Component } from 'inferno';
import './SplitScreenSlider.css';

import SplitScreenSliderLayer from './SplitScreenSliderLayer';
import SplitScreenSliderHandle from './SplitScreenSliderHandle';

export default class SplitScreenSlider extends Component {
  state = {
    delta: 1000,
    skew: 2000,
  };

  handleMouseMove = event => {
    const delta = ((event.clientX - window.innerWidth / 2) * 0.5) + event.clientX;
    const skew = delta + 1000;

    this.setState({
      delta,
      skew
    });
  };

  renderLayer = layer => (
    <SplitScreenSliderLayer
      {...{
        key: layer.caption,
        layer
      }}
    />
  )

  get computedStyle() {
    const { delta, skew } = this.state;

    return {
      '--delta': `${delta}px`,
      '--skew': `${skew}px`
    };
  };

  render() {
    const { layers } = this.props;

    return (
      <div className="app">
        <section
          className="split-screen-slider"
          onMouseMove={this.handleMouseMove}
          style={this.computedStyle}
        >
          {layers.map(this.renderLayer)}
          <SplitScreenSliderHandle />
        </section>
      </div>
    );
  }
}