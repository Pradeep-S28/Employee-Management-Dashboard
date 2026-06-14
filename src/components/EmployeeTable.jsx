import React from "react";

const EmployeeTable = ({
  employees,
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
  departments,
  currentPage,
  setCurrentPage,
  totalPages,
  onEditEmployee,
}) => {
  return (
    <div className="card shadow-sm border-0 mt-5">
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by employee name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) => {
              setDepartmentFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Departments</option>

            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>
                      <span
                        className={`badge ${
                          employee.status === "Active"
                            ? "bg-success"
                            : employee.status === "On Leave"
                              ? "bg-warning text-dark"
                              : "bg-secondary"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => onEditEmployee(employee)}
                      >
                        <i className="bi bi-pencil-square me-1"></i>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <span className="align-self-center">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
