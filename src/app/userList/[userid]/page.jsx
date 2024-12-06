import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <li>Usre Information is = {params.userid}</li>
    </div>
  );
};

export default page;
