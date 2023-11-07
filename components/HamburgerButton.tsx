import React, { useState } from "react";
import classNames from "classnames";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      id="menu-btn"
      className={classNames("hamburger", { open: isOpen })}
      type="button"
      onClick={toggleHamburger}
    >
      <span className={classNames("hamburger-top", { open: isOpen })}></span>
      <span className={classNames("hamburger-middle", { open: isOpen })}></span>
      <span className={classNames("hamburger-bottom", { open: isOpen })}></span>
    </button>
  );
};

export default HamburgerButton;
