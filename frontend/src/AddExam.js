import LogRegTemp from "./LogRegTemp";

function AddExam({ onMain }) {
    return (
        <LogRegTemp
            title="Add Exam Time"
            description="Set your exam schedule to stay on top of your academic commitments."
            child={
                <>
                    <input type="text" placeholder="📘 Course Name" />
                    <input type="text" placeholder="📅 Exam Date" />
                    <input type="text" placeholder="⏰ Exam Time" />
                    <button className="examtime-submit-button">Add Exam</button>
                </>
            }
            footer={<span onClick={onMain}>Back to Main</span>}
        />
    );
}

export default AddExam;