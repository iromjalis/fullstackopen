import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const parts = course.parts
  const exercises = course.parts.map(part => part.exercises )

  return (
    <div>
      <Header course={course.name} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]} />
    </div>
  )
}

export default App