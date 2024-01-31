import React, { Component } from "react";
import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";
import Modal from "../../Components/Modal";
import Table from "../../Components/Table";

class UniqReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: "",
      isMenu: true,
      userRole: "",
      modalOpen: false,
      formFields: [
        { label: "Txn ID/order ID:", name: "txnid" },
        { label: "Status:", name: "status" },
        { label: "From:", name: "fromdate" },
        { label: "To:", name: "todate" },
      ],
      additionalFields: [],
      mody_additionalFields: [
        { label: "Merchant", name: "merchant", id: 1 },
        { label: "MID", name: "mid", id: 2 },
        { label: "Payment Gateway", name: "paymentGateway", id: 3 },
        { label: "Currency", name: "currency", id: 4, isDropdown: true },
        // { label: "Country", name: "country", id: 5, isDropdown: true },
        { label: "Card Type", name: "cardType", id: 6, isDropdown: true },
        // { label: "Card Number", name: "cardNumber", id: 7, isText: true },
      ],

      displayOrder: [
        "merchant",
        "mid",
        "paymentGateway",
        "currency",
        // "country",
        "cardType",
        // "cardNumber",
      ],
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

  handleChildData = (dataFromChild) => {
    this.setState({ isMenu: dataFromChild });
  };

  handleButtonClick = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalSubmit = () => {
    this.setState((prevState) => ({
      showAdditionalFields: true,
      modalOpen: false,
    }));
  };

  handleModalFieldClick = (field) => {
    // Check if the field already exists
    if (!this.state.additionalFields.find((f) => f.id === field.id)) {
      this.setState((prevState) => ({
        additionalFields: [...prevState.additionalFields, field],
      }));
    }
  };

  handleRemoveField = (id) => {
    this.setState((prevState) => {
      const updatedFields = prevState.additionalFields.filter(
        (field) => field.id !== id
      );
      return { additionalFields: updatedFields };
    });
  };

  render() {
    const {
      modalOpen,
      formFields,
      additionalFields,
      mody_additionalFields,
      displayOrder,
    } = this.state;

    // Sort additionalFields based on displayOrder
    const sortedAdditionalFields = additionalFields.sort(
      (a, b) => displayOrder.indexOf(a.name) - displayOrder.indexOf(b.name)
    );

    const allFields = [...formFields, ...additionalFields];

    return (
      <>
        <Sidebar isSidebarOpen={this.handleChildData} />
        <div
          className={`mainBg background-overlay ${
            !this.state.isMenu ? "modyMainBG" : ""
          }`}
        >
          <Header />
          <div className="TransactionReport">
            <div className="Reportsrow1">
              <form className="grid-container">
                {allFields.map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <br></br>

                    <div className="Reports-Feilds">
                      {field.isDropdown ? (
                        // Render dropdown based on your logic (fetching data from API, etc.)
                        <select
                          id={field.name}
                          name={field.name}
                          // Add value and onChange based on your needs
                        >
                          {/* Options for the dropdown */}
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          {/* Add more options or fetch them from API */}
                        </select>
                      ) : (
                        // Render text field
                        <input
                          type="text"
                          id={field.name}
                          name={field.name}
                          // Add value and onChange based on your needs
                        />
                      )}

                      {index >= formFields.length && (
                        <div className="feildsRemoveBtn">
                          <button
                            type="button"
                            onClick={() => this.handleRemoveField(field.id)}
                          >
                            <i class="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Button to open the modal */}
                <button
                  type="button"
                  className="TRadditionalbtn"
                  onClick={this.handleButtonClick}
                >
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>

                {modalOpen && (
                  <Modal onClose={this.handleModalClose}>
                    {/* Additional fields in the modal */}
                    {mody_additionalFields.map((field) => (
                      <div
                        className="modalFeilds"
                        key={field.id}
                        onClick={() => this.handleModalFieldClick(field)}
                      >
                        <label htmlFor={field.name}>{field.label}</label>
                      </div>
                    ))}
                    {/* Submit button in the modal */}
                    <div className="customModalfooter">
                      <button type="button" onClick={this.handleModalSubmit}>
                        Ok
                      </button>
                    </div>
                  </Modal>
                )}
              </form>
            </div>
            <div className="reportContainer">
            <div className="table2">
            <Table  columns={this.state.columns} />
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UniqReport;
