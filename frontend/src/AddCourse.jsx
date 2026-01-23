import LogRegTemp from "./LogRegTemp";

function AddCourse() {
  return (
    <LogRegTemp
      title="Add Course"
      description="Set your course schedule to manage your academic commitments effectively."
      child={
        <>
          <input type="text" placeholder="📘 Course Name" />
          <input type="text" placeholder="Exam Day... Ex: Monday,Tuesday,Thursday" />
          <input type="text" placeholder="⏰ Course Start Time" onBlur={(e) => (e.target.type = "text")} onFocus={(e) => (e.target.type = "time")}/>
          <input type="text" placeholder="⏰ Course End Time" onBlur={(e) => (e.target.type = "text")} onFocus={(e) => (e.target.type = "time")} />
          <button className="course-submit-button">Add Course</button>
        </>
      }
      footer={<span>Back to Main</span>}
    />
  );
}

export default AddCourse;