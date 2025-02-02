const TeachersList = ({ teachers }) => {
  if (teachers.length === 0) {
    return <div className="no-teachers">Select a subject to see available teachers</div>
  }

  return (
    <div className="teachers-list">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="teacher-item">
          {teacher.name}
        </div>
      ))}
    </div>
  )
}

export default TeachersList

