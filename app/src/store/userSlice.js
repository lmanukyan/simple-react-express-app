import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
