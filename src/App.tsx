import React, { useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Sort from "./component/Sort";
import AddItem from "./component/AddItem";
import Table from "./component/Table";
const App: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const [valueAdd, setValueAdd] = useState({});
  const [valSort, setValSort] = useState<string>("");
  const valueSearch = (event: string) => {
    setTextSearch(event);
  };
  const itemAddValue = (event: string) => {
    setValueAdd(event);
  };
  const sortValue = (e: string) => {
    setValSort(e);
  };
  return (
    <div className="container">
      <h1 className="App-title">Project 01 - ToDo List ReactJS</h1>
      <div className="row wrap-content">
        <div className="col-lg-4">
          <Search valueSearch={valueSearch} />
        </div>
        <div className="col-lg-4">
          <Sort sortValue={sortValue} />
        </div>
        <div className="col-lg-4">
          <AddItem itemAddValue={itemAddValue} />
        </div>
      </div>
      <div className="wrap-table">
        <Table textSearch={textSearch} valSort={valSort} valueAdd={valueAdd} />
      </div>
    </div>
  );
};

export default App;
