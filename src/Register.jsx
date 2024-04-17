import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  //js

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "", // default value
    course: "", // default value
  });
  
  const showData = (event) => {
    event.preventDefault();
    let array = [];
    let newarray = array.push(formData);
    console.log(array);
    console.log(newarray);
    alert("Student Successfully registered");
    navigate('/display-data');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    // Reset the form
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      // dob: "",
      course: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="flex row  justify-content-center align-items-center p-5 ">
          <div class="card p-5" style={{ width: "700px" }}>
            <div class="card-body">
              <form>
                {/*name of student */}
                <div className="mb-2">
                  <label for="name" class="form-label">
                    Name Of Student
                  </label>
                  <input
                    type="email"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                {/*addresss field */}

                <div className="mb-2">
                  <label for=" Address" class="form-label">
                    {" "}
                    Address
                  </label>
                  <input
                    type="email"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputaddress"
                  />
                </div>
                {/*mobile number field */}

                <div className="mb-2">
                  <label for=" Mobile" class="form-label">
                    {" "}
                    Mobile
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputaddress"
                  />
                </div>
                {/*Email field */}

                <div className="mb-2">
                  <label for="  Email" class="form-label">
                    {" "}
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    class="form-control"
                    id="exampleInputaddress"
                  />
                </div>
                {/*gender field */}

                <div className="mb-2">
                  <label for="  gender" class="form-label">
                    {" "}
                    Gender
                  </label>
                  <select
                    class="form-select"
                    id="floatingSelect"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    aria-label="Floating label select example"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* date of birth  field
            <div className="mb-2">
              <label for="dob" class="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                class="form-control"
                id="exampleInputaddress"
              />
            </div> */}

                {/*course field */}

                <div className="mb-2">
                  <label for="course" class="form-label">
                    Course Opted
                  </label>
                  <select
                    class="form-select"
                    id="floatingSelect"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    aria-label="Floating label select example"
                  >
                    <option value="biology">Biology</option>
                    <option value="computerScience">Computer Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="humanities">Humanities</option>
                  </select>
                </div>

                <div className="buttons pt-4">
                  <button
                    type="button"
                    onClick={showData}
                    class="btn btn-primary"
                  >
                    {" "}
                    Register
                  </button>

                  <button
                    type="button"
                    onClick={handleCancel}
                    class="btn btn-danger mx-3 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
