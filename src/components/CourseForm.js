import React from 'react'
const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type='text' onChange={props.updateCourse} value={props.current}></input>
            <button type='submit'>Add Course</button>
        </form>
    )
}
export default CourseForm;