import React, { useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Sort from "./component/Sort";
import AddItem from "./component/AddItem";
import Table from "./component/Table";
import {TodoItem} from './dataType/interface'
const App: React.FC = () => {
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
  ]
  const [listItem, setListItem] = useState<TodoItem[]>(listNews);
  return (
    <div className="container">
      <h1 className="App-title">Project 01 - ToDo List ReactJS</h1>
      <div className="row wrap-content">
        <div className="col-lg-4">
          <Search listItem={listItem} setListItem={setListItem} />
        </div>
        <div className="col-lg-4">
          <Sort listItem={listItem} setListItem={setListItem} />
        </div>
        <div className="col-lg-4">
          <AddItem listItem={listItem} setListItem={setListItem} />
        </div>
      </div>
      <div className="wrap-table">
        <Table listItem={listItem} setListItem={setListItem} />
      </div>
    </div>
  );
};

export default App;
