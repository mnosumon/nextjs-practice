"use client";
import React from "react";

const Daynamic = ({ params }) => {
  return (
    <div>
      <div className="">the id is : {params.id}</div>
    </div>
  );
};

export default Daynamic;
