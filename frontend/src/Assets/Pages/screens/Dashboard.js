import React, { Component } from "react";
import Sidebar from "../Navigation/Sidebar";
import Bargraph from "../../Components/Bargraph";
import Piechart from "../../Components/Piechart";
import Header from "../Navigation/Header";
import Table from "../../Components/Table";
import Linechart from "../../Components/Linechart";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: "",
      isMenu: true,
      activeTab: "table",
      isfullScreen: false,
      isCustomizeColumn: false,
      columns: [
        { id: "col1", label: "sno", isVisible: true, filterable: false },
        { id: "col2", label: "txnId", isVisible: true, filterable: false },
        { id: "col3", label: "name", isVisible: true, filterable: false },
        {
          id: "col4",
          label: "merchantTxnId",
          isVisible: true,
          filterable: false,
        },
        { id: "col5", label: "MID", isVisible: true, filterable: false },
        { id: "col6", label: "orderNo", isVisible: true, filterable: false },
        { id: "col7", label: "currency", isVisible: true, filterable: true },
        { id: "col8", label: "country", isVisible: true, filterable: true },
        { id: "col9", label: "amount", isVisible: true, filterable: false },
        { id: "col10", label: "fee", isVisible: true, filterable: false },
        { id: "col11", label: "merchant", isVisible: true, filterable: true },
        {
          id: "col12",
          label: "paymentgateway",
          isVisible: true,
          filterable: true,
        },
        {
          id: "col13",
          label: "transactiondate",
          isVisible: true,
          filterable: false,
        },
        { id: "col14", label: "pdate", isVisible: true, filterable: false },
        {
          id: "col15",
          label: "merchantfee",
          isVisible: true,
          filterable: false,
        },
        { id: "col16", label: "Status", isVisible: true, filterable: true },
        { id: "col17", label: "cardtype", isVisible: true, filterable: true },
        {
          id: "col18",
          label: "cardnumber",
          isVisible: true,
          filterable: false,
        },
        { id: "col19", label: "message", isVisible: true, filterable: false },
        { id: "col20", label: "email", isVisible: true, filterable: false },
        {
          id: "col21",
          label: "merchantsettled",
          isVisible: true,
          filterable: false,
        },
        {
          id: "col22",
          label: "merchantsettleddate",
          isVisible: true,
          filterable: false,
        },
        {
          id: "col23",
          label: "acquiresettled",
          isVisible: true,
          filterable: false,
        },
        {
          id: "col24",
          label: "acquiresettleddate",
          isVisible: true,
          filterable: false,
        },
        { id: "col25", label: "Router", isVisible: true, filterable: false },
        { id: "col26", label: "WebURL", isVisible: true, filterable: false },
        {
          id: "col27",
          label: "sendwebhook",
          isVisible: true,
          filterable: false,
        },
        // { id: "col28", label: "option", isVisible: true },
      ],
    };
  }

  componentDidMount() {
    const role = sessionStorage.getItem("role");
    this.setState({ userRole: role });
  }

  handleChildData = (dataFromChild) => {
    this.setState({ isMenu: dataFromChild });
  };

  handleMainComponent = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleFullScreenComponent = () => {
    this.setState({ isfullScreen: !this.state.isfullScreen });
  };

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

  render() {
    const { columns } = this.state;
    if (this.state.userRole === "admin") {
      return (
        <>
          <Sidebar isSidebarOpen={this.handleChildData} />

          <div className={`mainBg ${!this.state.isMenu ? "modyMainBG" : ""}`}>
            <Header />
            <div className="row1">
              <div
                className={`salesBox ${
                  !this.state.isMenu ? "modySalesBox" : ""
                }`}
              >
                <h4 className="head">Sales</h4>
                <h1 className="amount">Rs. 50,000 /-</h1>
                <p className="subHead">Today</p>
                <Bargraph />
              </div>

              <div
                className={`transactionsBox ${
                  !this.state.isMenu ? "modyTransactionsBox" : ""
                }`}
              >
                <h4 className="head">Transactions</h4>
                <div className="transactionStatus">
                  <div>
                    <p className="subHead">Succeed</p>
                    <h2>358</h2>
                  </div>
                  <div>
                    <p className="subHead">Pending</p>
                    <h2>124</h2>
                  </div>
                  <div>
                    <p className="subHead">Failed</p>
                    <h2>98</h2>
                  </div>
                </div>
              </div>

              <div
                className={`StatisticsBox ${
                  !this.state.isMenu ? "modyStatisticsBox" : ""
                }`}
              >
                <h4 className="head">Statistics</h4>
                <div className="subHead">
                  <p style={{ color: "#3CB371" }}>Succeed</p>
                  <p style={{ color: "#ffc125" }}>Pending</p>
                  <p style={{ color: "#F08080" }}>Failed</p>
                </div>
                <div className="pieContainer">
                  <Piechart />
                </div>
              </div>
            </div>

            <div className="row2">
              <div
                className={`row2headerBtn ${
                  this.state.isfullScreen === true
                    ? "row2headerbtnPosition"
                    : ""
                }`}
              >
                <div className={!this.state.isMenu ? "modybtn" : ""}>
                  <button
                    className={`headerbtn ${
                      this.state.activeTab === "table" ? "activeIcon" : ""
                    }`}
                    onClick={() => this.handleMainComponent("table")}
                  >
                    Table
                  </button>
                  <button
                    className={`headerbtn ${
                      this.state.activeTab === "linechart" ? "activeIcon" : ""
                    }`}
                    onClick={() => this.handleMainComponent("linechart")}
                  >
                    Chart
                  </button>
                </div>
                <div className="headerRight">
                  <i
                    className="customizeColumn"
                    onClick={this.toggleCustomizeColumnModal}
                    class="fa-solid fa-screwdriver-wrench"
                  ></i>
                  {this.state.isfullScreen === true ? (
                    <i
                      onClick={() => this.handleFullScreenComponent()}
                      class="fa-solid fa-down-left-and-up-right-to-center"
                    ></i>
                  ) : (
                    <i
                      onClick={() => this.handleFullScreenComponent()}
                      class="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  )}
                </div>
              </div>

              <div
                className={`Container ${
                  this.state.isfullScreen === true ? "row2height" : ""
                }`}
              >
                {this.state.activeTab === "table" && (
                  <div>
                    <Table
                      columns={columns}
                      isfullScreen={this.state.isfullScreen}
                      isCustomizeColumn={this.state.isCustomizeColumn}
                    />
                  </div>
                )}
                {this.state.activeTab === "linechart" && (
                  <div>
                    <Linechart isfullScreen={this.state.isfullScreen} />
                  </div>
                )}
              </div>
            </div>

            {this.state.isCustomizeColumn && (
              <div className="CustomColumnmodal">
                <button
                  className="modalCross"
                  onClick={this.toggleCustomizeColumnModal}
                >
                  X
                </button>
                <div className="modalheader">
                  <h1>Customize Columns</h1>
                </div>

                <div className="customColumn">
                  {columns.map((col) => (
                    <form>
                      <div class="checkbox-wrapper-29" key={col.id}>
                        <label class="checkbox">
                          <input
                            type="checkbox"
                            checked={col.isVisible}
                            onChange={() => this.toggleColumnVisibility(col.id)}
                            class="checkbox__input"
                          />
                          <span class="checkbox__label"></span>
                          {col.label}
                        </label>
                      </div>
                    </form>
                  ))}
                </div>
                <div className="columnLine"></div>
                <div className="customModalfooter">
                  <button onClick={this.toggleCustomizeColumnModal}>Ok</button>
                </div>
              </div>
            )}
          </div>
        </>
      );
    }
    if (this.state.userRole === "merchant") {
      return;
    }
    if (this.state.userRole === "employee") {
      return;
    }
  }
}
export default Dashboard;
