import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => {
        return <Part name={name} exercises={exercises} key={id}></Part>;
      })}
    </div>
  );
};
export default Content;
