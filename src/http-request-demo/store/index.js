import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slice/todo.slice";

// Root reducer object chứa tất các các reducer, các reducer được tạo dựa vào nhóm chức năng
const rootReducer = {
  todo: todoReducer,
};

// Hàm configureStore dùng để tạo Redux Store với tham số là 1 object chứa thông tin để khởi tạo store
export const rootStore = configureStore({
  reducer: rootReducer,
});
