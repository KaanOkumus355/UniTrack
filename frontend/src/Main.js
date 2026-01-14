function Main({ username, onAddExam }) {
  return (
    <>
      <h1>Welcome, {username}!</h1>
      <span onClick={onAddExam}>Add Exam Time.</span>
    </>
  );
}

export default Main;