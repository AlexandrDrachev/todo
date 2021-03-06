import React from 'react';

import { useStateValue } from "../../state";
import { onToggleAutorisation, onToggleRegistration, onToggleReAutorisation } from "./autorisation-action";

const Autorisation = () => {

  const { state, dispatch } = useStateValue();
  const { autorisation, registration, reAutorisation, users } = state;

  let login, password, passwordAgain, email;
  if (passwordAgain && email) {
    console.log(passwordAgain, email);
  }

  // const onToggleActiveModal = () => {
  //   return reAutorisation ? dispatch(onToggleReAutorisation()) : dispatch(onToggleAutorisation());
  // };

  const onToggleRegActiveModal = () => {
    return registration ? dispatch(onToggleReAutorisation()) : dispatch(onToggleRegistration());
  };

  const getLogin = () => {
    const checkUser = users.find((user) => user.userName.toString() === login.toString() &&
                                           user.password.toString() === password.toString());
    return checkUser ? dispatch(onToggleAutorisation(checkUser)) : dispatch(onToggleReAutorisation());
  };

  return (
    <div className="backdrop-autorisation">
      <div className="modal-autorisation">
        {!registration && reAutorisation && !autorisation ? <h1>ERROR!!!</h1> : null}
        {!autorisation && !reAutorisation && !reAutorisation ?
          <input
            onChange={(e) => login = e.target.value}
            className="form-control inp-autorisation"
            placeholder="login"/> : null}
        {!autorisation && !reAutorisation && !reAutorisation?
          <input
            onChange={(e) => password = e.target.value}
            className="form-control inp-autorisation"
            placeholder="password"/> : null}
        {registration && !autorisation && !reAutorisation ?
          <input
            onChange={(e) => passwordAgain = e.target.value}
            className="form-control inp-autorisation"
            placeholder="password again"/> : null}
        {registration && !autorisation && !reAutorisation ?
          <input
            onChange={(e) => email = e.target.value}
            className="form-control inp-autorisation"
            placeholder="email"/> : null}
        {registration || !reAutorisation ?
            <div className="form-check checkbox">
              <input
                onChange={() => {}}
                type="checkbox"
                className="form-check-input"/>
              <span >Save me</span>
            </div> : null}
        <div className="autorisation-btn-block">
          <button
            onClick={() => onToggleRegActiveModal()}
            className="btn btn-primary btn-sm btn-autorisation">
            registration
          </button>
          <button
            onClick={() => getLogin()}
            className="btn btn-primary btn-sm btn-autorisation">
            autorisation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Autorisation;