import React from "react";

const Info = (props) => (
  <div>
    <h1>HOC or Higher Order Component</h1>
    <p>Info? {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please don't share!</p>}
      {/* Spreading the props here creates a js expression and has the effect of taking every key value pair object and passes them down as props */}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        "You're not authenticated to view this information"
      )}
    </div>
  );
};

export const AdminInfo = withAdminWarning(Info);
export const AuthInfo = requireAuthentication(Info);
