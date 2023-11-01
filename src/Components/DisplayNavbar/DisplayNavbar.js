import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import "./DisplayNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../../DataAction/Action";

const getGroup = () => {
  const storedGroup = localStorage.getItem("group");
  return storedGroup ? storedGroup : "status";
};

const getOrder = () => {
  const storedOrder = localStorage.getItem("order");
  return storedOrder ? storedOrder : "priority";
};

const TopNav = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleValueChange = (e, isGroup) => {
    if (isGroup) {
      setGroupValue(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    const data = groupValue === 'user'
      ? { allTickets, allUser }
      : allTickets;

    dispatch(selectData(groupValue, data, orderValue));
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="top-header" style={{ paddingLeft: "10px" }}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <TiThList /> Display
        </button>
        {displayOnClick && (
          <div className="dropOnClick flex-gap-10 p-10">
            <div className="selectGroup flex-sb">
              <span>Grouping</span>
              <select
                value={groupValue}
                onChange={(e) => handleValueChange(e, true)}
                className="selectStyle"
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="selectGroup flex-sb">
              <span>Ordering</span>
              <select
                value={orderValue}
                onChange={(e) => handleValueChange(e, false)}
                className="selectStyle"
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
