import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const slackconnector_get__read = createAsyncThunk(
  "slackconnector_response_get_Newdatacalls/slackconnector_get__read",
  async payload => {
    const response = await apiService.slackconnector_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const slackconnector_response_get_NewdatacallsSlice = createSlice({
  name: "slackconnector_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [slackconnector_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [slackconnector_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [slackconnector_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  slackconnector_get__read,
  slice: slackconnector_response_get_NewdatacallsSlice
}
