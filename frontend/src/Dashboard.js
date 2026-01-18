import { useEffect, useState } from "react";

function Dashboard({ username, userId, onAddExam }) {
  const today = new Date();
  const [examDate, setExamDate] = useState("");
  const [examTime, setExamTime] = useState("");
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    async function fetchNextExam() {
      const response = await fetch(`http://localhost:5000/api/next-exam?userId=${userId}`);
      if(!response.ok) return;

      const data = await response.json();
      setCourseName(data.courseName);
      setExamDate(data.examDate);
      setExamTime(data.examTime);
    }
    if (userId) fetchNextExam();
  }, [userId]);

  function daysUntilExam(dateStr) {
    if (!dateStr) return -1;

    
    const [y, m, d] = dateStr.split("-").map(Number);
    const exam = new Date(y, m - 1, d);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    exam.setHours(0, 0, 0, 0);

    const diffTime = exam - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  const daysLeft = daysUntilExam(examDate);



  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {username}</h2>
        <h3>{formattedDate}</h3>
        <p className="exam-countdown">
          {daysLeft === 1 ? `Your ${courseName} exam is tomorrow at ${examTime}!` : daysLeft === 0 ? `Your ${courseName} exam is today at ${examTime}!` : daysLeft > 0 ? `${daysLeft} days until your next exam, ${courseName}` : "No upcoming exams"}
        </p>
      </div>
      <button className="add-exam-button" onClick={onAddExam}>Add Exam</button>

    </div>
  );
}

export default Dashboard;