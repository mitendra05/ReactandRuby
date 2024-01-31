import React, { Component } from "react";
import { Link } from "react-router-dom";

// Image import
import CompanyLogo from "../../Images/image/centpay_logo.png";
import CompanyIcon from "../../Images/image/centpaysIcon.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
      isMenuOpen: false,
      MS: false,
      YR: false,
      MM: false,
      MU: false,
      Ms: false,
      API: false,
      activePage: localStorage.getItem("activePage") || "DASH",
    };
  }

  toggleCollapsedMenu = (x) => {
    if (x === 1) {
      this.setState({ MS: !this.state.MS });
      localStorage.setItem("MS", this.state.MS);
      console.log(this.state.MS);

      this.setState({ activePage: "MS" });
      localStorage.setItem("activePage", "MS");

      this.setState({ YR: false });
      this.setState({ MM: false });
      this.setState({ MU: false });
      this.setState({ Ms: false });
      this.setState({ API: false });
    }
    if (x === 2) {
      this.setState({ YR: !this.state.YR });
      this.setState({ activePage: "YR" });
      localStorage.setItem("activePage", "YR");

      this.setState({ MS: false });
      this.setState({ MM: false });
      this.setState({ MU: false });
      this.setState({ Ms: false });
      this.setState({ API: false });
    }
    if (x === 3) {
      this.setState({ MM: !this.state.MM });
      this.setState({ activePage: "MM" });
      localStorage.setItem("activePage", "MM");

      this.setState({ YR: false });
      this.setState({ MS: false });
      this.setState({ MU: false });
      this.setState({ Ms: false });
      this.setState({ API: false });
    }
    if (x === 4) {
      this.setState({ MU: !this.state.MU });
      this.setState({ activePage: "MU" });
      localStorage.setItem("activePage", "MU");

      this.setState({ YR: false });
      this.setState({ MS: false });
      this.setState({ MM: false });
      this.setState({ Ms: false });
      this.setState({ API: false });
    }
    if (x === 5) {
      this.setState({ Ms: !this.state.Ms });
      this.setState({ activePage: "Ms" });
      localStorage.setItem("activePage", "Ms");

      this.setState({ YR: false });
      this.setState({ MM: false });
      this.setState({ MU: false });
      this.setState({ API: false });
      this.setState({ MS: false });
    }
    if (x === 6) {
      this.setState({ API: !this.state.API });
      this.setState({ activePage: "API" });
      localStorage.setItem("activePage", "API");

      this.setState({ YR: false });
      this.setState({ MM: false });
      this.setState({ MU: false });
      this.setState({ Ms: false });
      this.setState({ MS: false });
    }
  };

  toggleMenuOpen = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
    this.props.isSidebarOpen(this.state.isMenuOpen);
    this.setState({ MS: false });
    this.setState({ YR: false });
    this.setState({ MM: false });
    this.setState({ MU: false });
    this.setState({ Ms: false });
    this.setState({ API: false });
  };

  toggleActive = (page) => {
    this.setState({ activePage: page });
    localStorage.setItem("activePage", page);
  };

  render() {
    const { isCollapsed, isMenuOpen, activePage } = this.state;
    return (
      <>
        <div className={`sidebar-background ${isMenuOpen ? "collapsed" : ""}`}>
          <div className="sidebar-top">
            <div
              className={`menubtn ${isMenuOpen ? "iconsCentermenubtn" : ""}`}
            >
              {isMenuOpen ? (
                <i
                  className="iconsCentermenubtn"
                  onClick={this.toggleMenuOpen}
                  class="fa-solid fa-greater-than"
                ></i>
              ) : (
                <i
                  className="iconsCentermenubtn"
                  onClick={this.toggleMenuOpen}
                  class="fa-solid fa-less-than"
                ></i>
              )}
            </div>
            <img
              className={`CompanyLogoIconMody" ${
                isMenuOpen ? "" : "CompanyLogoIconModydisabled"
              }`}
              src={CompanyIcon}
              alt="Company Icon"
              style={{
                width: "40px",
                position: "relative",
                top: "1rem",
                left: "1.2rem",
              }}
            />
            <div className={`company-logo ${isMenuOpen ? "disabled" : ""}`}>
              <div className="CompanyLogoContainer">
                <img
                  className="CompanyLogoIcon"
                  src={CompanyIcon}
                  alt="Company Icon"
                />
                <img src={CompanyLogo} alt="Company Logo" />
              </div>
              {/* <h2>Centpays</h2> */}
            </div>
          </div>
          <div className="sidebar-middle">
            <ul className="sidebar-list">
              <li className={activePage === "DASH" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleActive("DASH")}
                >
                  <Link to="/dashboard">Dashboard</Link>
                </span>
              </li>
              <li className={activePage === "MS" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(1)}
                >
                  Master Setting
                </span>
              </li>
              {this.state.MS && (
                <ul className={`sidebar-sublist `}>
                  <li className={activePage === "BT" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("BT")}
                    >
                      {" "}
                      <Link to="/businesstype">Buisness Type</Link>
                    </span>
                  </li>
                  <li className={activePage === "Ca" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("Ca")}
                    >
                      {" "}
                      <Link to="/categories">Categories</Link>
                    </span>
                  </li>
                  <li className={activePage === "BSC" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("BSC")}
                    >
                      {" "}
                      <Link to="/businesssubcategories">
                        Business Subcategories
                      </Link>
                    </span>
                  </li>
                  <li className={activePage === "MC" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("MC")}
                    >
                      {" "}
                      <Link to="/managecurrencies">Manage Currencies</Link>
                    </span>
                  </li>
                  <li className={activePage === "DT" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("DT")}
                    >
                      {" "}
                      <Link to="/documenttype">Document Type</Link>
                    </span>
                  </li>
                  <li className={activePage === "DC" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("DC")}
                    >
                      {" "}
                      <Link to="/documentcategories">Document Categories</Link>
                    </span>
                  </li>
                  <li className={activePage === "Ba" ? "Active" : ""}>
                    <span
                      className="sublist-lable"
                      onClick={() => this.toggleActive("Ba")}
                    >
                      {" "}
                      <Link to="/bank">Bank</Link>
                    </span>
                  </li>
                </ul>
              )}
              <li className={activePage === "YR" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(2)}
                >
                  Reports
                </span>
              </li>
              {this.state.YR && (
                <ul className={`sidebar-sublist `}>
                  <li>
                    <span className="sublist-lable">
                      <Link to="/transactionreport">Transaction Report</Link>
                    </span>
                  </li>
                  <li>
                    <span className="sublist-lable">
                      <Link to="/tempreport">Temp Report</Link>
                    </span>
                  </li>
                  <li>
                    <span className="sublist-lable">
                      <Link to="/tempuniqueorderreport">
                        Temp Unique Order Report
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="sublist-lable">
                      <Link to="/tempcommonorderreport">
                        Temp Common Order Report
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="sublist-lable">
                      <Link to="/payoutreport">Payout Report</Link>
                    </span>
                  </li>
                  <li>
                    <span className="sublist-lable">Compare</span>
                  </li>
                </ul>
              )}
              <li className={activePage === "MM" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(3)}
                >
                  Manage Merchant
                </span>
              </li>
              {this.state.MM && (
                <ul
                  className={`sidebar-sublist ${isCollapsed ? "disabled" : ""}`}
                >
                  <li>
                    <span className="sublist-lable">Add Merchant</span>
                  </li>
                  <li>
                    <span className="sublist-lable">All Merchant</span>
                  </li>
                  <li>
                    <span className="sublist-lable">Whitelisted Data</span>
                  </li>
                  <li>
                    <span className="sublist-lable">Payment Links</span>
                  </li>
                </ul>
              )}
              <li className={activePage === "MU" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(4)}
                >
                  Manage User
                </span>
              </li>
              {this.state.MU && (
                <ul className={`sidebar-sublist `}>
                  <li>
                    <span className="sublist-lable">Add User</span>
                  </li>
                  <li>
                    <span className="sublist-lable">All User</span>
                  </li>
                </ul>
              )}
              <li className={activePage === "Ms" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(5)}
                >
                  Manage Settlelments
                </span>
              </li>
              {this.state.Ms && (
                <ul className={`sidebar-sublist `}>
                  <li>
                    <span className="sublist-lable">Add Settlement</span>
                  </li>
                  <li>
                    <span className="sublist-lable">Set Settlement</span>
                  </li>
                </ul>
              )}
              <li className={activePage === "API" ? "Active" : ""}>
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleCollapsedMenu(6)}
                >
                  Manage API docs
                </span>
              </li>
              {this.state.API && (
                <ul className={`sidebar-sublist `}>
                  <li>
                    <span className="sublist-lable">API Categories</span>
                  </li>
                  <li>
                    <span className="sublist-lable">Item Document</span>
                  </li>
                </ul>
              )}
              <li
                className={`sidebarLastElement ${
                  activePage === "PG" ? "Active" : ""
                }`}
              >
                <span
                  className={`list-icon ${isMenuOpen ? "iconsCenter" : ""}`}
                >
                  <i class="fa-solid fa-house"></i>{" "}
                </span>
                <span
                  className={`list-lable ${isMenuOpen ? "disabled" : ""}`}
                  onClick={() => this.toggleActive("PG")}
                >
                  {" "}
                  <Link to="/">Payment gateway</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="sidebar-bottom">
            <div
              className={`profile-card  ${
                isMenuOpen ? "mody-profile-card" : ""
              }`}
            >
              <div
                className={`logoutbtn ${
                  isMenuOpen ? "iconsCenterlogoutbtn" : ""
                }`}
              >
                <p>Logout</p>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar;
