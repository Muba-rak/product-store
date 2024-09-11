import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = ({ height }) => {
  return (
    <div
      style={{ height: "300px" }}
      className="d-flex justify-content-center align-items-center my-3"
    >
      <PropagateLoader color="#4e8cf7" />
    </div>
  );
};

export default Loader;
