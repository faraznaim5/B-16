const students = new Map(); // Stores student data

// Add or Update Student
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const studentId = document.getElementById("studentId").value.trim();
            const name = document.getElementById("name").value.trim();
            const age = parseInt(document.getElementById("age").value.trim(), 10);
            const major = document.getElementById("major").value.trim();

            if (!studentId || !name || isNaN(age) || !major) {
                alert("Please fill all fields correctly.");
                return;
            }

            if (students.has(studentId)) {
                alert(`Student with ID ${studentId} updated successfully.`);
            } else {
                alert(`Student with ID ${studentId} added successfully.`);
            }

            students.set(studentId, { name, age, major });
            form.reset();
        });
    }

    // Display Students on Home Page
    const viewButton = document.getElementById("viewStudents");
    if (viewButton) {
        viewButton.addEventListener("click", () => {
            const studentList = document.getElementById("studentList");
            studentList.innerHTML = ""; // Clear the list

            if (students.size === 0) {
                studentList.innerHTML = `<p class="text-center">No students to display.</p>`;
                return;
            }

            let html = '<ul class="list-group">';
            for (const [id, student] of students) {
                html += `<li class="list-group-item">
                    <strong>ID:</strong> ${id}, 
                    <strong>Name:</strong> ${student.name}, 
                    <strong>Age:</strong> ${student.age}, 
                    <strong>Major:</strong> ${student.major}
                </li>`;
            }
            html += "</ul>";
            studentList.innerHTML = html;
        });
    }
});
