import { useEffect, useState } from "react";

function NextExams({ userId, onAddExam }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:5000/api/upcoming-exams?userId=${userId}&limit=3`);
      if (!response.ok) return;

      const data = await response.json();
      setExams(data);
    }

    if (userId) load();
  }, [userId]);

  function daysUntil(dateStr) {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split("-").map(Number);
    const exam = new Date(y, m - 1, d);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    exam.setHours(0, 0, 0, 0);

    return Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
  }

  function shortDate(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

    return (
    <div className="next-exams-card">
      <div className="next-exams-header">
        <h4>Next Exams</h4>
        <button className="icon-btn" onClick={onAddExam} title="Add exam">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>

      <div className="next-exams-list">
        {exams.length === 0 ? (
          <p className="muted">No upcoming exams</p>
        ) : (
          exams.map((e) => {
            const left = daysUntil(e.examDate);
            return (
              <div className="next-exam-row" key={e.id}>
                <span className="dot" />
                <div className="next-exam-main">
                  <div className="course">{e.courseName}</div>
                  <div className="sub">{left === 0 ? `today, ${shortDate(e.examDate)}` : `in ${left} days, ${shortDate(e.examDate)}`}
                  </div>
                </div>
                <div className="next-exam-icons">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default NextExams;