import { useState } from "react";
import "./App.css";
import "../src/styles/breakpoints.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

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

      <div className="container mt-5">
        <div className="row g-3">
          {cardData.map((card, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <Card
                title={card.title}
                count={card.count}
                icon={card.icon}
                bgClass={card.bgClass}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
