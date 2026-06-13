import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  //const [totalEmployees, setTotalEmployees] = useState(0);

  const cardData = [
    {
      title: "Total Employees",
      count: 120,
      icon: "bi bi-people-fill",
      bgClass: "bg-primary",
    },
    {
      title: "Active Employees",
      count: 95,
      icon: "bi bi-person-check-fill",
      bgClass: "bg-success",
    },
    {
      title: "Employees on Leave",
      count: 12,
      icon: "bi bi-calendar-x-fill",
      bgClass: "bg-warning",
    },
    {
      title: "New Joiners",
      count: 8,
      icon: "bi bi-person-plus-fill",
      bgClass: "bg-info",
    },
  ];

  return (
    <>
      {/* navbar top */}
      <Navbar />
    </>
  );
}

export default App;
