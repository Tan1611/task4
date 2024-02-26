import "./a.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { input } from "./inputReducer";

const ComponentA = () => {
  const [data, setData] = useState({
    id: "",
    url: "",
    dateTime: "",
  });
  const { url } = data;

  const dataFromRedux = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const length = dataFromRedux.length + 1;
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  const handleOnchange = (e) => {
    setData({ ...data, id: length, url: e, dateTime: dateTime });
  };
  const handleClick = () => {
    if (!url) alert("Input your link!!!");
    else {
      const text =
        url.includes("youtube.com") ||
        url.includes("tiktok.com") ||
        (url.includes("instagram.com") && url.includes("embed"));
      if (text) {
        const action = input(data);
        dispatch(action);
        alert("Succed!!!");
        setData({ id: "", url: "", dateTime: "" });
      } else
        alert(
          "Invalid!! \n Only receive links from sources: Tiktok, Youtube, Instagram."
        );
    }
  };
  return (
    <>
      <div className="componentA">
        <div className="form-label">
          <label>Enter your link: </label>
          <input
            type="text"
            value={url}
            onChange={(e) => handleOnchange(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
};
export default ComponentA;
