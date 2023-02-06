import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoList = createAsyncThunk(
  "todo/fetchTodoList",
  async (payload, thunkAPI) => {
    const response = await axios.get("http://localhost:3000/todo-items");
    console.log(response.data);
    return response.data;
  }
);

const todoInitialState = {
  todoList: [],
  fetching: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state, action) => {
      state.fetching = true;
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.fetching = false;
      console.log("fetchTodoList.fulfilled", action.payload);
      state.todoList = action.payload;
    });
    builder.addCase(fetchTodoList.rejected, (state, action) => {
      state.fetching = false;
    });
  },
});

export const todoReducer = todoSlice.reducer;
