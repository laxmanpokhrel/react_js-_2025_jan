import { useState } from "react"
import useEducationData from "./hooks/useEducationData"
import Dropdown from "./components/Dropdown"
import InfoCard from "./components/InfoCard"
import "./App.css"

const App = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [facultyDetails, setFacultyDetails] = useState(null)
  const [subjectDetails, setSubjectDetails] = useState(null)

  const { faculties, loading, error, fetchFacultyDetails, fetchSubjectDetails } = useEducationData()

  const handleFacultyChange = async (facultyId) => {
    setSelectedFaculty(facultyId)
    setSelectedSubject(null)
    setSubjectDetails(null)
    if (facultyId) {
      try {
        const details = await fetchFacultyDetails(facultyId)
        setFacultyDetails(details)
      } catch (err) {
        console.error(err)
      }
    } else {
      setFacultyDetails(null)
    }
  }

  const handleSubjectChange = async (subjectId) => {
    setSelectedSubject(subjectId)
    if (subjectId) {
      try {
        const details = await fetchSubjectDetails(subjectId)
        setSubjectDetails(details)
      } catch (err) {
        console.error(err)
      }
    } else {
      setSubjectDetails(null)
    }
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="container">
      <div className="card">
        <h1>Education Portal</h1>

        <Dropdown label="Faculty" value={selectedFaculty} onChange={handleFacultyChange} options={faculties} />

        {facultyDetails && (
          <InfoCard
            title={facultyDetails.name}
            description={facultyDetails.description}
            items={facultyDetails.subjects}
          />
        )}

        {facultyDetails && (
          <Dropdown
            label="Subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
            options={facultyDetails.subjects}
            disabled={!selectedFaculty}
          />
        )}

        {subjectDetails && (
          <InfoCard
            title={subjectDetails.name}
            description={subjectDetails.description}
            items={subjectDetails.teachers}
          />
        )}
      </div>
    </div>
  )
}

export default App

