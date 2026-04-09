import { useOutletContext } from "react-router-dom";

function Students() {
    const { students } = useOutletContext();

    return (
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
                        {students.map((student) => (
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
    );
}

export default Students;