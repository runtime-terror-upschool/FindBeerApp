import React from "react";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

function SrmSlider({ value, onChange }) {
  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };
  return (
    <div className="pt-2 pb-2 col-xl-4 col-lg-6 col-sm-6">
      <Slider
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        tipFormatter={value}
        handle={handle}
      />
    </div>
  );
}

export default SrmSlider;
