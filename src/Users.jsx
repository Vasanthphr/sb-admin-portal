import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setusers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true)
    let users = await axios.get("https://62cb8d8d3e924a01286858d1.mockapi.io/users");
    console.log(users);//users->data 
    setusers(users.data)//so users.data
    setLoading(false)
  };

  let userDelete = async (id)=>{
    try {
      let ask = window.confirm("Are you sure? Do you want to delete this data?")
      if(ask){
        await axios.delete(`https://62cb8d8d3e924a01286858d1.mockapi.io/users/${id}`)
        loadData();
      }
     
    } catch (error) {
      
    }
  }

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to="/Portal/create-user"
          class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Users
        </Link>
      </div>
      {
        isLoading ? <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div> : <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startDate}</td>
                        <td>${user.salary}</td>
                        <td>
                          <Link
                            to={`/portal/users/${user.id}`}
                            className="btm btm-sm mr-2 btn-warning"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/user/edit/${user.id}`}
                            className="btm btm-sm mr-2 btn-primary"
                          >
                            Edit
                          </Link>
                          <button onClick={()=>userDelete(user.id)} className="btm btm-sm mr-2 btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }


    </div>
  );
}

export default Users;
