const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <ul>
      {personsToShow.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} &nbsp;
            {number} &nbsp;
            <button onClick={() => handleDelete(id, name)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default Persons;
