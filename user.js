import React from "react";

const Users = ({ loading, users }) => {

  return loading ? (
    <div id="main">

    </div>
  ) : (
    <div className="row" id="main">
      {users.map((user) => (
        <div className="col-sm-6 col-md-4">
          <div className="info">
            <img src={user.avatar} alt={user.avatar} className="image"></img>
            <h2><b>ID : {user.id}</b></h2>
            <h3 className="name">
              {user.first_name} {user.last_name}
            </h3>
            <p className="email"><i class="far fa-envelop"></i> {user.email} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
  
