import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: {
      id: null,
      name: null,
      avatar: null,
    }
  },
  reducers: {
    setUser(state, action) {
      console.log(action.payload)
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
