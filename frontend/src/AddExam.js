import { useState } from "react";
import LogRegTemp from "./LogRegTemp";

function AddExam({ onMain, userId }) {
  const [CourseName, setCourseName] = useState("");
  const [ExamDate, setExamDate] = useState("");
  const [ExamTime, setExamTime] = useState("");
  const [message, setMessage] = useState("");

  const handleAddExam = async () => {
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/Addexam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseName: CourseName, examDate: ExamDate, examTime: ExamTime, user_id: userId }),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || "Adding exam failed");
        return;
      }
      setMessage("Exam added successfully!");
      onMain();
    } catch (error) {
        setMessage("Cannot connect to server. Try again later.");
        console.error(error);
      }
  };
  return (
    <LogRegTemp
      title="Add Exam Time"
      description="Set your exam schedule to stay on top of your academic commitments."
      child={
        <>
          <input type="text" placeholder="📘 Course Name" value={CourseName} onChange={(e) => setCourseName(e.target.value)} />
          <input type="date" placeholder="📅 Exam Date" value={ExamDate} onChange={(e) => setExamDate(e.target.value)} />
          <input type="time" placeholder="⏰ Exam Time" value={ExamTime} onChange={(e) => setExamTime(e.target.value)} />
          <button className="examtime-submit-button" onClick={handleAddExam}>Add Exam</button>
          {message && <p className="error-message">{message}</p>}
        </>
      }
      footer={<span onClick={onMain}>Back to Main</span>}
    />
  );
}

export default AddExam;