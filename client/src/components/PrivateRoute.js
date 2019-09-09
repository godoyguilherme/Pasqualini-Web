import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (!auth.isLogged) {
    return (
      <Redirect to={{ pathname: "/login", from: rest.location.pathname }} />
    );
  }

  return <Route render={props => <Component {...props} />} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
