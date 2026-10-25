const Filter = ({ handleFilterChange, filter }) => {
  return (
    <p>
      filter shown with &nbsp;
      <input name="filter" value={filter} onChange={handleFilterChange} />
    </p>
  );
};
export default Filter;
