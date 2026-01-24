import { useState } from "react";
import LogRegTemp from "./LogRegTemp";

function AddCourse( {userId, onMain} ) {
  const [Cname, setCname] = useState("");
  const [CourseDes, setCourseDes] = useState("");
  const [message, setMessage] = useState("")

    const handleAddCourse = async () => {
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/Addcourse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Cname : Cname, courseDes: CourseDes, user_id: userId }),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || "Adding course failed");
        return;
      }
      setMessage("Course added successfully!");
      onMain();
    } catch (error) {
        setMessage("Cannot connect to server. Try again later.");
        console.error(error);
      }
  };

  return (
    <LogRegTemp
      title="Add Course"
      description="Add your course to manage your academic commitments effectively."
      child={
        <>
          <input type="text" placeholder="📘 Course Name" value={Cname} onChange={(e) => setCname(e.target.value)} />
          <textarea className="big-text" placeholder="Course Description" value={CourseDes} onChange={(e) => setCourseDes(e.target.value)}/>
          <button className="course-submit-button" onClick={handleAddCourse}>Add Course</button>
          {message && <p className="error-message">{message}</p>}
        </>
      }
      footer={<span onClick={onMain}>Back to Main</span>}
    />
  );
}

export default AddCourse;