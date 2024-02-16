import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../components/users/userForm";
import { initialValuesUser } from "../utils/inputTypes";
import { createNewUser, editUser } from "../actions/usersActions";
import { UsersContext } from "../context/mainContexts";

const UsersForm = () => {
  const { id } = useParams();

  const { dispatch, data } = useContext(UsersContext);

  const user =
    data.users.length > 0 &&
    data.users.find((user) => String(user.id) === String(id));

  const handleEdit = (values) => {
    editUser(dispatch, values, id);
  };

  const handleCreate = (values) => {
    createNewUser(dispatch, values);
  };

  return (
    <>
      <h1>{id ? "Edit User" : "Create User"}</h1>
      {id ? (
        <UserForm
          handleCreate={handleCreate}
          handleEdit={handleEdit}
          checkEdit={true}
          initialValues={{
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
              street: user.address.street,
              suite: user.address.suite,
              city: user.address.city,
              zipcode: user.address.zipcode,
              geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
              },
            },
            phone: user.phone,
            website: user.website,
            company: {
              name: user.company.name,
              catchPhrase: user.company.catchPhrase,
              bs: user.company.bs,
            },
          }}
          buttonTitle={"Edit User"}
        />
      ) : (
        <UserForm
          initialValues={initialValuesUser}
          handleCreate={handleCreate}
          handleEdit={handleEdit}
          checkEdit={false}
          buttonTitle={"Create User"}
        />
      )}
    </>
  );
};

export default UsersForm;