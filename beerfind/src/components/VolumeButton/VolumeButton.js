import React from "react";

export const volumeData = [
  { id: 1, name: "None", btnName: "none", isActive: false },
  { id: 2, name: "Greater Than", btnName: "abv_gt", isActive: false },
  { id: 3, name: "Lower Than", btnName: "abv_lt", isActive: false },
];

function VolumeButton({ name, btnName, isActive, setButton, button }) {
  function handleClick() {
    setButton(btnName);
  }
  volumeData.map((item) => {
    item.btnName === button ? (item.isActive = true) : (item.isActive = false);
  });
  const buttonActive = isActive ? "active btn-primary" : "btn-dark ";
  return (
    <>
      <button
        onClick={handleClick}
        className={`btn  ${buttonActive} text-light`}
        name={btnName}
      >
        {name}
      </button>
    </>
  );
}

export default VolumeButton;
