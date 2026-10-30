import Course from "./components/Course";

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    },
    {
      name: "HHalf Stack application development",
      parts: [
        {
          name: "fFundamentals of React",
          exercises: 10,
        },
        {
          name: "uUsing props to pass data",
          exercises: 7,
        },
        {
          name: "sState of a component",
          exercises: 14,
        },
      ],
    },
  ];
  return (
    <div>
      {course.map((course) => (
        <Course course={course} key={course.name} />
      ))}
    </div>
  );
};

export default App;
