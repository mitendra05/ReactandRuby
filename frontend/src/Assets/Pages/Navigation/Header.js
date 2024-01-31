import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isShow: false,
    };
  }

  // Function to toggle the modal's open/close state
  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  // Function to handle the visibility of the search bar
  handleSearchbar = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
  };

  // Function to render the content of the search bar
  handleSearchbarcontent() {
    return (
      <div className="searchbarinput">
        <input type="text" placeholder="Search"></input>
        <button
          className={this.state.isShow ? "searchbtn" : ""}
          onClick={this.handleSearchbar}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    );
  }

  render() {
    return (
      <>
        {/* Header section */}
        <div className="header">
          <p>Dashboard</p>
          <div className="headerFunctions">
            {/* Conditional rendering of search bar or search button */}
            {this.state.isShow ? (
              this.handleSearchbarcontent()
            ) : (
              <button className="searchbar" onClick={this.handleSearchbar}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            )}
            {/* Notification and user profile buttons */}
            <button className="notificationbar">
              <i className="fa-regular fa-bell"></i>
            </button>
            <button className="userprofile">
              <i onClick={this.toggleModal} className="fa-regular fa-user"></i>
            </button>
          </div>
        </div>

        {/* Profile Modal */}
        {this.state.isOpen && (
          <div className="modal profileModal">
            <button className="modalCross" onClick={this.toggleModal}>
              X
            </button>
            <div className="modal-header">
              <p>Profile</p>
              <button>Edit</button>
            </div>
            <div className="modal-content">
              {/* User profile details */}
              <div className="profileTop">
                <div className="profileimg">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div className="profileInfo">
                  <p>User Name</p>
                  <p>Admin</p>
                </div>
              </div>
              <div className="pofileDetailes">
                {/* User details table */}
                <table>
                  <tr>
                    <td className="profileModal-head">Name</td>
                    <td>User Name</td>
                  </tr>
                  <tr>
                    <td className="profileModal-head">User Name</td>
                    <td>user@123</td>
                  </tr>
                  <tr>
                    <td className="profileModal-head">Company</td>
                    <td>Centpays</td>
                  </tr>
                  <tr>
                    <td className="profileModal-head">Phone</td>
                    <td>xxxxxxxxx</td>
                  </tr>
                  <tr>
                    <td className="profileModal-head">Email</td>
                    <td>user@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="profileModal-head">Password</td>
                    <td>*****</td>
                  </tr>
                </table>
              </div>
            </div>
            {/* Save button */}
            <div className="modal-footer">
              <button>Save</button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Header;