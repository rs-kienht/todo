import React, { useState, ChangeEvent } from "react";
import "./../style/AddItem.css";
import { TodoItem } from "./../dataType/interface";

interface IProps {
  listItem: TodoItem[]
  setListItem: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
const AddItem: React.FC<IProps> = ({listItem, setListItem}) => {
  const [statusClickAdd, setClickStatus] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState<string>('');
  const [valueInput, setValueInput] = useState<string>('');
  const handleClickAddItem = () => {
    setClickStatus(true);
  };
  const handleChangeStatus = (e: any) => {
    setValueSelect(e.target.value)
  }
  const handleSubmitAddForm = () => {
    const itemAdd = {
      id: new Date().valueOf(),
      name: valueInput,
      level: +valueSelect|| 0
    }
    setListItem([...listItem, itemAdd])
    setValueInput('')
  }
  const handleSetValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }
  const displayAreaAddItem = () => {
    if (statusClickAdd) {
      return (
        <div className="wrap-input-add">
          <form onSubmit={handleSubmitAddForm} className="d-flex">
            <div className="form-group">
              <input
                value={valueInput}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter name add"
                onChange={handleSetValueInput}
              />
            </div>
            <div className="form-group">
              <select onChange={handleChangeStatus} className="form-control">
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">Hight</option>
              </select>
            </div>
            <div className="form-group">
              <button onClick={handleSubmitAddForm} type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  };
  return (
    <div className="wrap-add">
      <button
        onClick={handleClickAddItem}
        className="btn btn-info btn-block mb-20 w-100"
      >
        Add Item
      </button>
      {displayAreaAddItem()}
    </div>
  );
};
export default AddItem;
