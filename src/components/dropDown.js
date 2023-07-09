import React from "react";
import PropTypes from "prop-types";

function DropDown(props) {
  const selectRef = React.useRef();
  const { options } = props;

  const handleMouseOver = () => {
    if (selectRef.current) {
      selectRef.current.setAttribute("size", options.length);
    }
  };

  const handleMouseOut = () => {
    if (selectRef.current) {
      selectRef.current.setAttribute("size", "0");
    }
  };

  const optionItems = options.map((option) => (
    <option key={option} onClick={handleMouseOut}>
      {option}
    </option>
  ));

  return (
    <section className="drop-down">
      <div className="container inner-wrapper">
        <h2> Should you use a drop down? </h2>
        <select
          name="SuuDropDown"
          id="SuuDropDown"
          ref={selectRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {optionItems}
        </select>
      </div>
    </section>
  );
}

DropDown.propTypes = {
  options: PropTypes.array,
};

export default DropDown;
