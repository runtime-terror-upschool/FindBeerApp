import React from "react";
import { ButtonGroup } from "react-bootstrap";

import { buttonData } from "./buttonData";

function VolumeButton({ btnName, name, setButton, button, isActive }) {
  const handleClick = () => {
    setButton(btnName);
  };
  buttonData.map((item) =>
    item.btnName === button ? (item.isActive = true) : (item.isActive = false)
  );

  const disabled = isActive ? "active btn-warning" : "btn-dark ";
  return (
    <ButtonGroup className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <button
        className={`btn px-2  ${disabled} `}
        onClick={handleClick}
        name={btnName}
      >
        {name}
      </button>
    </ButtonGroup>
  );
}

export default VolumeButton;
