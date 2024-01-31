import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    country: "",
    role: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User created successfully:", data.message);
        // Reset the form data
        setFormData({
          name: "",
          email: "",
          mobile_no: "",
          country: "",
          role: "",
          password: "",
          password_confirmation: "",
        });
      } else {
        console.error("Error creating user:", data.errors);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="login-background">
        <div className="login-container">
          <div className="login-firstcontainer">
            <h1>Centpays</h1>
            <div className="loginBG-img"></div>
          </div>
          <div className="login-secondcontainer">
            <div className="login-form">
              <h1>Signup</h1>
              <div className="login-funtionality">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="mobile_no"
                  placeholder="mobile number"
                  value={formData.mobile_no}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="country"
                  placeholder="country"
                  value={formData.country}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="role"
                  placeholder="role"
                  value={formData.role}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="confirm password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />

                <button className="btn" type="submit" onClick={handleSubmit}>
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
