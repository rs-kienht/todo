import React from "react";
import { TodoItem } from "./../dataType/interface";
interface IProps {
  listItem: TodoItem[]
  setListItem: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
const Sort:React.FC<IProps> = ({ listItem, setListItem }) => {
  const handleChangeSelect = (e: any) => {
    const val = e.target.value;
    if(val === '1') {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => a.name.localeCompare(b.name));
      setListItem(newListItem)
    } else if(val === '0') {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => a.name.localeCompare(b.name));
      setListItem(newListItem)
    } else if (val === "3") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => b.level - a.level);
      setListItem(newListItem);
    } else if (val === "2") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => a.level - b.level);
      setListItem(newListItem);
    }
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
