function Courses( {onAddCourse} ) {
  return (
    <div>
			<button className="icon-btn" onClick={onAddCourse} title="Add Course">
          <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <h2>Courses Section</h2>
    </div>
  );
}

export default Courses;