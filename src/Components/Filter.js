import { useEffect, useState, useRef } from "react";
import OusideClick from "./OutsideClick";

const Filter = (props) => {
  const [selectedItem, setSelectedItem] = useState();
  const [filterOpen, setFilterOpen] = useState(false);

  const ref = useRef();
  const { options, filtertype } = props;

  useEffect(() => {
    if (props.options) {
      setSelectedItem(props.options[0]);
    }
  }, [props]);

  OusideClick(ref, () => {
    if (filterOpen) {
      closeFilter();
    }
  });

  const inputChangeHandler = (item) => {
    setSelectedItem(item);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  const closeFilter = () => {
    setFilterOpen(false);
  };

  return (
    <div
      data-testid="filter"
      className={`filter ${filterOpen ? "drop-open" : ""}`}
      onBlur={() => {
        setFilterOpen(false);
      }}
      ref={ref}
      {...props}
    >
      <p className="filter_selected" onClick={toggleFilter}>
        {selectedItem} {filtertype}
        <i className="fas fa-angle-up"></i>
      </p>
      <ul className="filter_options">
        {options &&
          Array.isArray(options) &&
          options.map((option) => {
            let selected = option === selectedItem;
            return (
              <li
                key={option}
                id={option}
                role="option"
                tabIndex="1"
                name={filtertype}
                className={`filter_options_item ${selected ? "active" : ""}`}
                onClick={() => {
                  inputChangeHandler(option);
                }}
              >
                {option}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Filter;
