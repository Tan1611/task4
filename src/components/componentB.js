import { useSelector } from "react-redux";
import "./b.css";
import ComponentC from "./componentC";

const ComponentB = () => {
  const data = useSelector((state) => state.data.data);
  const data1 = data.map((element, index, arr) => arr[arr.length - 1 - index]);
  return (
    <>
      <div className="edit-table">
        <div className="edit-cell">Time</div>
        <div className="edit-cell">Video</div>
      </div>
      {data1 &&
        data1.length > 0 &&
        data1.map((item, index) => {
          return (
            <div className="edit-table" key={item.id}>
              <div className="edit-cell">{item.dateTime}</div>
              <div className="edit-cell">
                <div class="ratio ratio-16x9">
                  <ComponentC url={item.url} />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default ComponentB;
