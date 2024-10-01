const Header = (props) => {
    return (
      <h1>
        {props.course.name}
      </h1>
    )
  }
  
  const Content = ({ courses }) => {
    return (
      <ul>
        {courses.map(c =>
          <li key={c.id}>
            <Part course={c} />
          </li>
        )}
      </ul>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.course.name} {props.course.exercises}</p>
    )
  }
  
  const Total = ({ course }) => {
    let sum = course.parts.reduce((a, b) => a + b.exercises, 0);
  
    return (
      <h2>Total of {sum} exercises</h2>
    )
  }
  
const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content courses={course.parts} />
        <Total course={course} />
      </div>
    )
  }
  export default Course