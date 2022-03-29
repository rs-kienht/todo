import React from "react";

const Sort = ({ sortValue }: any) => {
  const handleChangeSelect = (e: any) => {
    sortValue(e.target.value);
  };
  const options = [
    {
      label: "Choose a option",
      value: "DEFAULT",
    },
    {
      label: "NAME - DESC",
      value: "0",
    },
    {
      label: "NAME - ASC",
      value: "1",
    },
    {
      label: "LEVEL - DESC",
      value: "2",
    },
    {
      label: "LEVEL - ASC",
      value: "3",
    },
  ];
  return (
    <div className="wrap-sort">
      <select onChange={handleChangeSelect} className="form-select"  aria-label="Default select example">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label className="label label-success label-medium">Clear</label>
    </div>
  );
};
export default Sort;
