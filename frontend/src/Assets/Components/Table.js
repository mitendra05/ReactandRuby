import React, { Component } from "react";
import visa from "../Images/image/visa.png";
import mastercard from "../Images/image/mastercard.png";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      rowsPerPage: 7,
      data: [],
    };
  }

  // Function to handle next page button click
  handleClickNext = () => {
    const { currentPage, data } = this.state;
    const totalPages = Math.ceil(data.length / this.state.rowsPerPage);
    this.setState({
      currentPage: Math.min(currentPage + 1, totalPages),
    });
  };

  // Function to handle previous page button click
  handleClickPrev = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: Math.max(currentPage - 1, 1),
    });
  };

  // Function to handle page change
  handleChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  // Function to render page buttons based on current page
  renderPageButtons() {
    const { currentPage, data } = this.state;
    const totalPages = Math.ceil(data.length / this.state.rowsPerPage);

    let visiblePages = [];

    if (currentPage <= 4) {
      visiblePages = Array.from(
        { length: Math.min(totalPages, 4) },
        (_, i) => i + 1
      );
    } else if (currentPage > totalPages - 2) {
      visiblePages = Array.from(
        { length: Math.min(totalPages, 4) },
        (_, i) => totalPages - 3 + i
      );
    } else {
      visiblePages = Array.from({ length: 4 }, (_, i) => currentPage - 1 + i);
    }

    return (
      <>
        {currentPage > 4 && (
          <>
            <div className="paginationbtn">
              <button
                className="paginationButton"
                onClick={() => this.handleChangePage(1)}
              >
                1
              </button>
            </div>
            <div className="paginationbtn">
              <button className="paginationButton ellipses" disabled>
                ...
              </button>
            </div>
          </>
        )}

        {visiblePages.map((pageNumber) => (
          <div key={pageNumber} className="paginationbtn">
            <button
              onClick={() => this.handleChangePage(pageNumber)}
              className={`paginationButton ${
                this.state.currentPage === pageNumber ? "activeButton" : ""
              }`}
            >
              {pageNumber}
            </button>
          </div>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            <div className="paginationbtn">
              <button className="paginationButton ellipses" disabled>
                ...
              </button>
            </div>
            <div className="paginationbtn">
              <button
                className="paginationButton"
                onClick={() => this.handleChangePage(totalPages)}
              >
                {totalPages}
              </button>
            </div>
          </>
        )}
      </>
    );
  }

  // Function to get status color based on the status value
  getStatusColor(Status) {
    switch (Status) {
      case "Success":
        return "#3CB371";
      case "Pending":
        return "#ffc125";
      case "Failure":
        return "#F08080";
      default:
        return "#ffffff";
    }
  }

  // Function to get card type image based on the cardType value
  getCardType(cardType) {
    switch (cardType) {
      case "Visa":
        return <img className="cardTypeImage" alt="Visa Logo" src={visa} />;
      case "Mastercard":
        return (
          <img
            className="cardTypeImage"
            alt="Mastercard Logo"
            src={mastercard}
          />
        );
      default:
        return "";
    }
  }

  toggleCustomizeColumnModal = () => {
    this.setState((prevState) => ({
      isCustomizeColumn: !prevState.isCustomizeColumn,
    }));
  };

  toggleColumnVisibility = (columnId) => {
    this.setState((prevState) => ({
      columns: prevState.columns.map((col) =>
        col.id === columnId ? { ...col, isVisible: !col.isVisible } : col
      ),
    }));
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tables");

      const agents = await response.json();

      this.setState({ data: agents });
      console.log(agents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { data } = this.state;
    const { currentPage } = this.state;
    const totalPages = Math.ceil(data.length / this.state.rowsPerPage);

    const paginatedData = data.slice(
      (currentPage - 1) * this.state.rowsPerPage,
      currentPage * this.state.rowsPerPage
    );
    const { columns, isfullScreen, isCustomizeColumn } = this.props;
    const columnStyles = {
      col2: { whiteSpace: "nowrap", textAlign: "left" },
      col3: { whiteSpace: "wrap" },
      col4: { whiteSpace: "nowrap" },
      col5: { whiteSpace: "nowrap" },
      col19: { minWidth: "15rem", textAlign: "left" },
    };

    return (
      <>
        <div
          className={`tableContainer ${
            isfullScreen === true ? "tableheight" : ""
          }`}
        >
          <table className="table">
            <thead className="tableHead">
              <tr className="tablediv">
                {columns
                  .filter((col) => col.isVisible)
                  .map((col) => (
                    <th key={col.id}>
                      {col.label}
                      <span className="filterIcon">
                        {col.filterable && (
                          <i class="fa-solid fa-sort-down"></i>
                        )}
                      </span>
                    </th>
                  ))}
                <th>Options</th>
              </tr>
            </thead>

            <tbody className="tableBody">
              {paginatedData.map((row, index) => (
                <tr key={index}>
                  {columns
                    .filter((col) => col.isVisible)
                    .map((col) => (
                      <td
                        key={col.id}
                        style={
                          col.id === "col16"
                            ? {
                                padding: "2px 0px",
                                width: "5rem",
                                height: "1.5rem",
                                borderRadius: "15px",
                                color: "#ffffff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: this.getStatusColor(row[col.label]),
                              }
                            : columnStyles[col.id] || {}
                        }
                      >
                        {col.id === "col17"
                          ? this.getCardType(row[col.label])
                          : row[col.label]}
                      </td>
                    ))}
                  <td>O</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Pagination">
          <div className="paginationLeft">
            <span>
              {(currentPage - 1) * this.state.rowsPerPage + 1}-
              {currentPage === totalPages
                ? data.length
                : currentPage * this.state.rowsPerPage}{" "}
              of {data.length}
            </span>
          </div>
          <div className="paginationRight">
            <div className="paginationbtn">
              <button
                className="paginationButton"
                onClick={this.handleClickPrev}
                disabled={currentPage === 1}
              >
                <i class="fa-solid fa-angles-left"></i>
              </button>
            </div>
            {this.renderPageButtons()}
            <div className="paginationbtn">
              <button
                className="paginationButton"
                onClick={this.handleClickNext}
                disabled={currentPage === totalPages}
              >
                <i class="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
