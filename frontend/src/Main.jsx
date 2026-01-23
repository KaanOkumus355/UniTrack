import { useState } from 'react';
import Dashboard from './Dashboard';
import Courses from './Courses';

function Sidecontent({ onNavigate, active }) {
  return (
    <div className="side_content">
      <ul>
        <li className={active === 'Dashboard' ? 'active' : ''} onClick={() => onNavigate('Dashboard')}><i className="fa fa-home" aria-hidden="true"></i>Dashboard</li>
        <li className={active === 'Weekly Planner' ? 'active' : ''} onClick={() => onNavigate('Weekly Planner')}><i className="fa fa-calendar" aria-hidden="true"></i>Weekly Planner</li>
        <li className={active === 'Courses' ? 'active' : ''} onClick={() => onNavigate('Courses')}><i className="fa fa-book" aria-hidden="true"></i>Courses</li>
        <li className={active === 'Tasks' ? 'active' : ''} onClick={() => onNavigate('Tasks')}><i className="fa fa-check-square" aria-hidden="true"></i>Tasks</li>
      </ul>
    </div>
  );
}


function Main({ username, userId, ExamDate, ExamTime, onAddExam, onAddCourse }) {
  const [section, setSection] = useState('Dashboard');

  return (
    <>
      <div className='main-wrapper'>
        <Sidecontent onNavigate={setSection} active={section} />
        <div className='main-container'>
          {section === 'Dashboard' && <Dashboard username={username} userId={userId} ExamDate={ExamDate} ExamTime={ExamTime} onAddExam={onAddExam} />}
          {section === 'Courses' && <Courses onAddCourse={onAddCourse} />}
        </div>
      </div>
    </>
  );
}

export default Main;