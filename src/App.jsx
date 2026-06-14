import { useEffect, useState } from "react";
import "./App.css";
import "./styles/breakpoints.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";

import { fetchUsers } from "./services/api";

function App() {
  // console.log(fetchUsers);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const recordsPerPage = 5;

  const departments = ["Development", "HR", "Finance", "Testing", "Design"];

  const designations = [
    "Frontend Developer",
    "Backend Developer",
    "HR Executive",
    "QA Tester",
    "UI Designer",
  ];

  const statuses = ["Active", "On Leave", "Inactive"];

  useEffect(() => {
    const getEmployeeData = async () => {
      try {
        setLoading(true);
        setError("");

        const users = await fetchUsers();

        const formattedEmployees = users.map((user, index) => ({
          employeeId: `EMP${String(user.id).padStart(3, "0")}`,
          name: user.name,
          email: user.email,
          phone: user.phone,
          department: departments[index % departments.length],
          designation: designations[index % designations.length],
          joiningDate: "2026-01-01",
          status: statuses[index % statuses.length],
        }));

        setEmployees(formattedEmployees);
      } catch (err) {
        setError("Failed to fetch employee data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getEmployeeData();
  }, []);

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  ).length;
  const employeesOnLeave = employees.filter(
    (employee) => employee.status === "On Leave",
  ).length;
  const newJoiners = employees.filter(
    (employee) => employee.joiningDate >= "2026-01-01",
  ).length;

  const cardData = [
    {
      title: "Total Employees",
      count: totalEmployees,
      icon: "bi bi-people-fill",
      bgClass: "bg-primary",
    },
    {
      title: "Active Employees",
      count: activeEmployees,
      icon: "bi bi-person-check-fill",
      bgClass: "bg-success",
    },
    {
      title: "Employees on Leave",
      count: employeesOnLeave,
      icon: "bi bi-calendar-x-fill",
      bgClass: "bg-warning",
    },
    {
      title: "New Joiners",
      count: newJoiners,
      icon: "bi bi-person-plus-fill",
      bgClass: "bg-info",
      badgeText: "Since Jan 2026",
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" || employee.department === departmentFilter;

    return matchesSearch && matchesDepartment;
  });

  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage) || 1;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentEmployees = filteredEmployees.slice(firstIndex, lastIndex);

  const handleAddEmployee = () => {
    console.log("hi");
    setEditingEmployee(null);
    setShowForm(true);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleSaveEmployee = (employeeData) => {
    if (editingEmployee) {
      const updatedEmployees = employees.map((employee) =>
        employee.employeeId === editingEmployee.employeeId
          ? employeeData
          : employee,
      );

      setEmployees(updatedEmployees);
    } else {
      const newEmployee = {
        ...employeeData,
        employeeId: `EMP${String(employees.length + 1).padStart(3, "0")}`,
      };

      setEmployees([newEmployee, ...employees]);
    }

    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <>
      <Navbar onAddEmployee={handleAddEmployee} />

      <div className="container mt-5 mb-5">
        <div className="row g-3">
          {cardData.map((card, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <Card
                title={card.title}
                count={card.count}
                icon={card.icon}
                bgClass={card.bgClass}
                badgeText={card.badgeText}
              />
            </div>
          ))}
        </div>

        {loading && (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary"></div>
            <p className="mt-2">Loading employee data...</p>
          </div>
        )}

        {error && <div className="alert alert-danger mt-5">{error}</div>}

        {showForm && (
          <EmployeeForm
            departments={departments}
            statuses={statuses}
            editingEmployee={editingEmployee}
            onSaveEmployee={handleSaveEmployee}
            onCancel={handleCancelForm}
          />
        )}

        {!loading && !error && (
          <EmployeeTable
            employees={currentEmployees}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            departments={departments}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            onEditEmployee={handleEditEmployee}
          />
        )}
      </div>
    </>
  );
}

export default App;
