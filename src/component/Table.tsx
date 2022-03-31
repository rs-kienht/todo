import React, { useState } from "react";
import "./../style/Table.css";
import { TodoItem } from "./../dataType/interface";
interface IProps {
  listItem: TodoItem[]
  setListItem: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
const Table: React.FC<IProps> = ({ listItem, setListItem }) => {;
  const [indexEdit, setIndexEdit] = useState<number>(Infinity);

  const filterLow = (item: number) => {
    switch (item) {
      case 0:
        return "low";
      case 1:
        return "medium";
      case 2:
        return "hight";
    }
  };
  const filterStatus = (item: number) => {
    switch (item) {
      case 0:
        return "info";
      case 1:
        return "danger";
      case 2:
        return "warning";
    }
  };
  const handleClickItemDelete = (index: number) => {
    const newListItem = [...listItem];
    newListItem.splice(index, 1);
    setListItem(newListItem);
  };
  const handleClickItemEdit = (index: number) => {
    setIndexEdit(index);
  };
  const handleInputChange = (event: any) => {
    let newList = [...listItem];
    newList[indexEdit].name = event.target.value;
    setListItem(newList);
  };
  const onBlur = (e: any) => {
    let newList = [...listItem];
    newList[indexEdit].name = e.target.value;
    setListItem(newList);
    setIndexEdit(Infinity);
  };
  const ItemTable = () => {
    return listItem.map((item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td className="text-left">
            {indexEdit === index ? (
              <input
                onBlur={onBlur}
                className="form-control"
                value={item?.name}
                onChange={handleInputChange}
              />
            ) : (
              item?.name
            )}
          </td>
          <td className="text-center">
            <label className={`label label-${filterStatus(item.level)}`}>
              {filterLow(item.level)}
            </label>
          </td>
          <td className="wrap-btn text-center">
            <button
              onClick={() => handleClickItemEdit(index)}
              className="btn btn-warning btn-sm"
            >
              Edit
            </button>
            <button
              onClick={() => handleClickItemDelete(index)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="wrap-table">
      <div className="wrap-table__heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th className="text-center" style={{ width: "15%" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>{ItemTable()}</tbody>
      </table>
    </div>
  );
};
export default Table;
