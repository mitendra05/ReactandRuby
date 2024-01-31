import React, { Component } from "react";
import Table from "./Table";
import Linechart from "./Linechart";
import tableicon from "../Images/image/tableicon.png";
import linechart from "../Images/image/linechart.png";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    // Initial state with the activeTab set to "table"
    this.state = {
      activeTab: "table",
    };
  }

  // Function to handle tab changes
  handleMainComponent = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    return (
      <>
        <div>
          {/* Header with icons to switch between table and line chart */}
          <div className="row2header">
            <img
              // Click event to switch to the table tab
              onClick={() => this.handleMainComponent("table")}
              src={tableicon}
              alt="Table icon"
              width="20"
              height="25"
            ></img>
            <img
              // Click event to switch to the line chart tab
              onClick={() => this.handleMainComponent("lineChart")}
              src={linechart}
              alt="Linechart icon"
              width="20"
              height="22"
            ></img>
          </div>

          {/* Main content container with conditional rendering based on the active tab */}
          <div className="Container">
            {this.state.activeTab === "table" && (
              <div>
                <h2 className="row2header">Transaction Table</h2>
                {/* Render the Table component for the table tab */}
                <Table />
              </div>
            )}
            {this.state.activeTab === "lineChart" && (
              <div>
                <h2>Line Chart</h2>
                {/* Render the Linechart component for the line chart tab */}
                <Linechart />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;