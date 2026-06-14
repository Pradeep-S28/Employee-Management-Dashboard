import React, { useEffect, useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  joiningDate: "",
  status: "",
};

const EmployeeForm = ({
  departments,
  statuses,
  editingEmployee,
  onSaveEmployee,
  onCancel,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(initialFormData);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Employee name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()x]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSaveEmployee(formData);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <div className="card shadow-sm border-0 mt-5">
      <div className="card-body">
        <h4 className="mb-4">
          {editingEmployee ? "Edit Employee" : "Add Employee"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Employee Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>

                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
              {errors.department && (
                <small className="text-danger">{errors.department}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-control"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
              {errors.designation && (
                <small className="text-danger">{errors.designation}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Joining Date</label>
              <input
                type="date"
                className="form-control"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
              {errors.joiningDate && (
                <small className="text-danger">{errors.joiningDate}</small>
              )}
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>

                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {errors.status && (
                <small className="text-danger">{errors.status}</small>
              )}
            </div>
          </div>

          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary" type="submit">
              {editingEmployee ? "Update Employee" : "Add Employee"}
            </button>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
