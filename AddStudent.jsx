import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function AddStudent() {
    const { addStudent } = useOutletContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        roll: "",
        course: "",
        status: "Active",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name || !formData.roll || !formData.course) {
            alert("Please fill all fields");
            return;
        }

        addStudent(formData);

        setFormData({
            name: "",
            roll: "",
            course: "",
            status: "Active",
        });

        navigate("/students");
    };

    return (
        <div className="add-form">
            <h2 className="form-title">➕ Add New Student</h2>

            <form className="form-grid" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                />

                <input
                    type="text"
                    name="roll"
                    placeholder="Roll No *"
                    value={formData.roll}
                    onChange={handleChange}
                    className="form-input"
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Course *"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-input"
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <button type="submit" className="form-button">
                    Add Student
                </button>
            </form>
        </div>
    );
}

export default AddStudent;