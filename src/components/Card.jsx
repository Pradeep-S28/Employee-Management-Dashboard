import React from "react";

const Card = ({ title, count, icon, bgClass }) => {
  return (
    <div
      className={`card text-white shadow-sm border-0 position-relative ${bgClass}`}
    >
      <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2">
        {title == "New Joiners" ? "Since Jan 2026" : ""}
      </span>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="card-title">{title}</h6>
            <h2 className="mb-0">{count}</h2>
          </div>

          <i className={`${icon} fs-1`}></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
