import "./CostsFilter.css";

const CostsFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
    // console.log(event.target.value, "CostsFilter component")
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Вибір по року</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;