import { useEffect, useState } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  //*input changes adding to the component state
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  // //*filter numbers by name
  const handleFilterChange = (e) => {
    setFilter(e.target.value);

    // const personsToShow = persons.filter(({ name }) =>
    //   name.toLowerCase().includes(filter.toLocaleLowerCase().trim())
    // );
  };

  //* adding person as an object to the component state
  const addPerson = (e) => {
    e.preventDefault();
    //*if input is empty
    if (!newName.trim()) {
      alert("Please enter a name");
      return;
    }

    //*if name is already added
    const isDuplicate = persons.some(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });

    if (isDuplicate) {
      alert(`"${newName}" is already added to the phonebook!`);
      return;
    }

    const personObject = {
      name: newName.trim(),
      number: newNumber.trim(),
      id: String(persons.length + 1),
    };

    personsService.create(personObject).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };
  const handleDelete = (id, name, number) => {
    // confirm deleting person data
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          // delete data from react
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`Information of ${name} has already been removed from server`);
          // redraw page if data deleted in server
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };
  const personsToShow = persons.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        persons={persons}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
