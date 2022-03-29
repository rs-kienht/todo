import React, { useState, useEffect } from "react";
import "./../style/Table.css";
interface IProps {
  textSearch: string;
  valSort: string;
  valueAdd: {};
}
const Table: React.FC<IProps> = ({ textSearch, valSort, valueAdd }: any) => {
  const listNews = [
    {
      id: new Date().valueOf(),
      name: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
      level: 2, // high
    },
    {
      id: new Date().valueOf(),
      name: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
      level: 0, // low
    },
    {
      id: new Date().valueOf(),
      name: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
      level: 1, // medium
    },
    {
      id: new Date().valueOf(),
      name: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
      level: 0, // low
    },
    {
      id: new Date().valueOf(),
      name: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
      level: 2, // high
    },
    {
      id: new Date().valueOf(),
      name: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
      level: 1, // medium
    },
  ];
  const [indexEdit, setIndexEdit] = useState<number>(Infinity);

  const [listItem, setListItem] = useState(listNews);
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
  const isObject = (value: any) => {
    return typeof value === "object" && value !== null;
  };
  useEffect(() => {
    if (textSearch !== "") {
      console.log('rtfff')
      var lisArr = [...listItem];
      lisArr = lisArr.filter((user) => {
        return user.name.toLowerCase().startsWith(textSearch.toLowerCase());
      });
    } else {
      console.log('opp')
      lisArr = [...listItem];
    }
    setListItem(lisArr);
  }, [textSearch]);
  useEffect(() => {
    if (valSort === "1") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => a.name.localeCompare(b.name));
      setListItem(newListItem);
    } else if (valSort === "0") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => b.name.localeCompare(a.name));
      setListItem(newListItem);
    } else if (valSort === "3") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => b.level - a.level);
      setListItem(newListItem);
    } else if (valSort === "2") {
      let newListItem = [...listItem];
      newListItem = newListItem.sort((a, b) => a.level - b.level);
      setListItem(newListItem);
    }
  }, [valSort]);

  useEffect(() => {
    if (isObject(valueAdd)) {
      if (valueAdd.value || valueAdd.level) {
        const obj = {
          id: new Date().valueOf(),
          name: valueAdd?.value,
          level: valueAdd?.level,
        };
        let newListItem = [...listItem, obj];
        setListItem(newListItem);
      }
    }
  }, [valueAdd]);

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
