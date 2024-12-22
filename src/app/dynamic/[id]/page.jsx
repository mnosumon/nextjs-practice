"use client";
import React from "react";

const Daynamic = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <div className="">the id is : {id}</div>
    </div>
  );
};

export default Daynamic;
