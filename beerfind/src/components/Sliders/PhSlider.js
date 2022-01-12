import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function PhSlider({ value, onChange }) {
  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);
  return (
    <div className="pt-2 pb-2 col-xl-4 col-lg-6 col-sm-6">
      <Range
        min={0}
        max={7}
        value={value}
        onChange={onChange}
        tipFormatter={(value) => `${value}`}
      />
    </div>
  );
}

export default PhSlider;
