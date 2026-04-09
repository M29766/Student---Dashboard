import { useOutletContext } from "react-router-dom";

function Home() {
    const { students } = useOutletContext();

    const activeCount = students.filter((student) => student.status === "Active").length;
    const inactiveCount = students.filter((student) => student.status === "Inactive").length;

    return (
        <div className="dashboard-cards">
            <div className="card">
                <h2>Total Students</h2>
                <div className="card-number card-total">{students.length}</div>
            </div>

            <div className="card">
                <h2>Active Students</h2>
                <div className="card-number card-active">{activeCount}</div>
            </div>

            <div className="card">
                <h2>Inactive Students</h2>
                <div className="card-number card-inactive">{inactiveCount}</div>
            </div>
        </div>
    );
}

export default Home;
