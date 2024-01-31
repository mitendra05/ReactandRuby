import React, { Component } from "react";
import tabledata from "./tabledata.js";

class FilterDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [],
    };
  }

  componentDidMount() {
    this.updateFilterOptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.column !== this.props.column) {
      this.updateFilterOptions();
    }
  }

  updateFilterOptions() {
    const { column } = this.props;
    const uniqueValues = [
      ...new Set(tabledata.map((row) => row[column.label])),
    ];
    this.setState({ filterOptions: uniqueValues });
  }

  handleCheckboxChange = (value) => {
    const { onFilterSelect } = this.props;
    onFilterSelect(value);
  };

  render() {
    const { isOpen } = this.props;
    const { filterOptions } = this.state;

    return (
      <div className={`filterDropdown ${isOpen ? "open" : ""}`}>
        <ul>
          {filterOptions.map((option) => (
            <li key={option}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  onChange={() => this.handleCheckboxChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterDropdown;
