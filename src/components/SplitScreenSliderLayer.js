/* eslint-disable jsx-a11y/alt-text */
import './SplitScreenSliderLayer.css';

const SplitScreenSliderLayer = ({ layer }) => (
  <div
    className={`split-screen-slider-layer split-screen-slider-layer--${layer.position}`}>
    <div className="split-screen-slider-layer__inner">
      <div className="split-screen-slider-layer__content">
        <h3 className="split-screen-slider-layer__caption">{layer.caption}</h3>
        <p className="split-screen-slider-layer__text">{layer.text}</p>
      </div>
      <img className="split-screen-slider-layer__image" {...layer.image} />
    </div>
  </div>
);

export default SplitScreenSliderLayer;