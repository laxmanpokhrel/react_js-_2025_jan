import { useState, useEffect } from "react"

const useEducationData = () => {
  const [faculties, setFaculties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await fetch("http://localhost:3000/faculties")
        const data = await response.json()
        setFaculties(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch faculties")
        setLoading(false)
      }
    }

    fetchFaculties()
  }, [])

  const fetchFacultyDetails = async (facultyId) => {
    try {
      const response = await fetch(`http://localhost:3000/faculty/${facultyId}`)
      return await response.json()
    } catch (err) {
      throw new Error("Failed to fetch faculty details")
    }
  }

  const fetchSubjectDetails = async (subjectId) => {
    try {
      const response = await fetch(`http://localhost:3000/subject/${subjectId}`)
      return await response.json()
    } catch (err) {
      throw new Error("Failed to fetch subject details")
    }
  }

  return {
    faculties,
    loading,
    error,
    fetchFacultyDetails,
    fetchSubjectDetails,
  }
}

export default useEducationData

