import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const todojsonplaceholder_get_todos_list = createAsyncThunk("todojsonplaceholder_response_get_GETTODOLists/todojsonplaceholder_get_todos_list", async payload => {
  const response = await apiService.todojsonplaceholder_get_todos_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const todojsonplaceholder_response_get_GETTODOListsSlice = createSlice({
  name: "todojsonplaceholder_response_get_GETTODOLists",
  initialState,
  reducers: {},
  extraReducers: {
    [todojsonplaceholder_get_todos_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [todojsonplaceholder_get_todos_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [todojsonplaceholder_get_todos_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  todojsonplaceholder_get_todos_list,
  slice: todojsonplaceholder_response_get_GETTODOListsSlice
};