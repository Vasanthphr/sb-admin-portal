import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const navigate=useNavigate()
  const params=useParams()
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter name";
      }

      if (values.name.length < 5) {
        errors.name = "Please enter more than 5 letters";
      }

      if (values.position === "") {
        errors.position = "Please enter position";
      }

      return errors;
      // {} means - success
    },
    onSubmit: async(values) => {
    await axios.put(`https://62cb8d8d3e924a01286858d1.mockapi.io/users/${params.id}`,values)
    navigate("/portal/users")
    },
  });

  useEffect(()=>{
loadUser()
  },[])

  let loadUser= async()=>{
    try {
     let user= await axios.get(`https://62cb8d8d3e924a01286858d1.mockapi.io/users/${params.id}`)
     formik.setValues({
      name: user.data.name,
      position: user.data.position,
      office: user.data.office,
      age: user.data.age,
      startDate: user.data.startDate,
      salary: user.data.salary,
    },

     )
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>name</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                className={`form-control ${
                  formik.errors.position ? "input-error" : ""
                }`}
                type="text"
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                name="startDate"
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                className="form-control"
                type="text"
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>
            <div className="col-lg-6">
              <label></label>
              <input
                className="btn-primary mt-2 "
                type="submit"
                value="submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;