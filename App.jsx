import { useState } from "react";
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Manas Nandanwar", roll: "ECS001", course: "B.Tech ECS", status: "Active" },
    { id: 2, name: "Rahul Sharma", roll: "ECS002", course: "B.Tech ECS", status: "Inactive" },
    { id: 3, name: "Priya Patel", roll: "ECS003", course: "B.Tech ECS", status: "Active" }
  ]);

  const addStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: students.length + 1 };
    setStudents([...students, studentWithId]);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="dashboard-title">📚 Student Dashboard</h1>

        {/* DASHBOARD CARDS */}
        <div className="dashboard-cards">
          <div className="card">
            <h2>Total Students</h2>
            <div className="card-number card-total">{students.length}</div>
          </div>
          <div className="card">
            <h2>Active</h2>
            <div className="card-number card-active">{students.filter(s => s.status === 'Active').length}</div>
          </div>
          <div className="card">
            <h2>Inactive</h2>
            <div className="card-number card-inactive">{students.filter(s => s.status === 'Inactive').length}</div>
          </div>
        </div>

        {/* ADD FORM */}
        <div className="add-form">
          <h2 className="form-title">➕ Add New Student</h2>
          <div className="form-grid">
            <input type="text" placeholder="Full Name *" id="name" className="form-input" />
            <input type="text" placeholder="Roll No *" id="roll" className="form-input" />
            <input type="text" placeholder="Course *" id="course" className="form-input" />
            <select id="status" className="form-select">
              <option value="Active">✅ Active</option>
              <option value="Inactive">❌ Inactive</option>
            </select>
            <button
              onClick={() => {
                const name = document.getElementById('name').value;
                const roll = document.getElementById('roll').value;
                const course = document.getElementById('course').value;
                const status = document.getElementById('status').value;
                if (name && roll && course) {
                  addStudent({ name, roll, course, status });
                  document.getElementById('name').value = '';
                  document.getElementById('roll').value = '';
                  document.getElementById('course').value = '';
                }
              }}
              className="form-button"
            >
              ➕ Add Student
            </button>
          </div>
        </div>

        {/* STUDENT TABLE */}
        <div className="table-container">
          <h2 className="table-title">📋 Students List ({students.length})</h2>
          <div className="students-table-wrapper">
            <table className="students-table">
              <thead>
                <tr>
                  <th className="table-header">ID</th>
                  <th className="table-header">Student Name</th>
                  <th className="table-header">Roll No</th>
                  <th className="table-header">Course</th>
                  <th className="table-header">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id} className="table-row">
                    <td className="table-cell table-cell-bold">{student.id}</td>
                    <td className="table-cell">{student.name}</td>
                    <td className="table-cell roll-cell">{student.roll}</td>
                    <td className="table-cell">{student.course}</td>
                    <td className="table-cell">
                      <span className={`status-badge status-${student.status.toLowerCase()}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;