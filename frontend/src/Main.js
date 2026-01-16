function Main({ username, onAddExam }) {
  return (
    <>
      <div className="side_content">
        <ul>
          <li className="active"><i class="fa fa-home" aria-hidden="true"></i>Dashboard</li>
          <li><i class="fa fa-calendar" aria-hidden="true"></i>Weekly Planner</li>
          <li><i class="fa fa-book" aria-hidden="true"></i>Courses</li>
          <li><i class="fa fa-check-square" aria-hidden="true"></i>Tasks</li>
        </ul>
      </div>
      <div className="main-container">
        <h1>Welcome, {username}!</h1>
        <span onClick={onAddExam}>Add Exam Time.</span>
      </div>
    </>
  );
}

export default Main;