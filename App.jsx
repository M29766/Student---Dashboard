import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Manas Nandanwar", roll: "CS001", course: "B.Tech CSE", status: "Active" },
    { id: 2, name: "Rahul Sharma", roll: "CS002", course: "B.Tech CSE", status: "Inactive" },
    { id: 3, name: "Priya Patel", roll: "CS003", course: "B.Tech ECE", status: "Active" },
  ]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="dashboard-title">📚 Student Dashboard</h1>

        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>

          <NavLink to="/add-student" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Add Student
          </NavLink>

          <NavLink to="/students" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Students List
          </NavLink>
        </nav>

        <Outlet context={{ students, addStudent }} />
      </div>
    </div>
  );
}

export default App;
