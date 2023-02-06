import { useSelector } from "react-redux";
import Body from "../body/Body";

function Content() {
  // Hàm selector trả về state muốn lấy
  // thứ tự truy xuất state > key tương ứng dùng để khai báo reducer > các key đã khai báo ở initState
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="content">
      <h1>{count}</h1>
      <Body />
    </div>
  );
}

export default Content;
