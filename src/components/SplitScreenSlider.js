import { Component, linkEvent } from 'inferno';
import './SplitScreenSlider.css';

import SplitScreenSliderLayer from './SplitScreenSliderLayer';
import SplitScreenSliderHandle from './SplitScreenSliderHandle';

const handleMouseMove = (instance, event) => {
  const delta = instance.recalculateDelta(event.clientX);

  instance.setState({
    delta,
    skew: delta + instance.indent
  });
};

export default class SplitScreenSlider extends Component {
  indent = 1000;

  state = {
    delta: this.indent,
    skew: this.indent * 2,
  };

  recalculateDelta = (x) => {
    return ((x - window.innerWidth / 2) * 0.5) + x;
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
      <section
        className="split-screen-slider"
        onMouseMove={linkEvent(this, handleMouseMove)}
        style={this.computedStyle}
      >
        {layers.map(this.renderLayer)}
        <SplitScreenSliderHandle />
      </section>
    );
  }
}