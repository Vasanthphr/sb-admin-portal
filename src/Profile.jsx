import { useContext, useState } from "react";
import UserContex from './useContext'

function Profile() {
    let context = useContext (UserContex)
  const [name, setName] = useState("");
  let changeProfile = () => {
    context.setUsername(name)
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label for="">Username</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <button
            onClick={changeProfile}
            className="btn bt-sm btn-primary mt-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
