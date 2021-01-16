import React, { Component } from 'react'
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'jQuery' },

    ],
    current: ''
  }

  //updateCourse
  updateCourse = (e) => {
    console.log(e.target.value)
    this.setState({
      current: e.target.value
    })
  }
  //delete Course
  deleteCourse = (index) => {
    let { courses } = this.state;
    courses.splice(index, 1);
    this.setState({ courses })
  }
  //edit Course
  editCourse = (index, value) => {
    let { courses } = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({ courses })
  }
  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    let { current } = this.state;
    let { courses } = this.state;
    if (current !== '') {
      courses.push({ name: current });
      this.setState({
        courses,
        current: ''
      })
    }


  }
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    }
    )
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
        {this.state.courses.length > 0 ?
          <ul>
            {courseList}
          </ul>
          : <h3 style={{ textAlign: 'center' }}>There Is No Items</h3>
        }



      </section>
    );
  }

}

export default App;
