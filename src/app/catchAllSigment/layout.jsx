import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>All pages common components</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
