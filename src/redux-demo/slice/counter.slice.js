import { createSlice } from "@reduxjs/toolkit";

// State ban đầu
const initCounterState = {
  count: 0,
  color: "red",
};

// Mỗi slice được tạo sẽ xử state của 1 nhóm chức năng nhất định
// createSlice() là hàm được cung cấp bởi redux-toolkit giúp khởi tạo các action và các reducer 1 cách ngắn gọn hơn redux thuần
const counterSlice = createSlice({
  // tên slice
  name: "counter",
  // state khởi tạo của reducer
  initialState: initCounterState,
  // Khai báo các action và reducer
  // Ứng với mỗi action là 1 reducer được khai báo dưới dạng key value
  // key => action name
  // value => hàm reducer tương ứng
  reducers: {
    increase: (state, action) => {
      const data = action.payload;
      console.log(data);

      state.count += data;
    },
    decrease: (state, action) => {
      const data = action.payload;

      state.count -= data;
    },
  },
});

// Các action đã được khai báo ở slice
export const { increase, decrease } = counterSlice.actions;

// Reducer được tạo ra từ slice
export const counterReducer = counterSlice.reducer;
