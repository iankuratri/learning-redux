import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/user/userActions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User list:</h2>
      <ol>
        {userData &&
          userData.users &&
          userData.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ol>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToUsers = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToUsers)(UserContainer);
