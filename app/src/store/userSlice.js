import { createSlice } from "@reduxjs/toolkit";
import { storeUser } from '../helpers/utils';

const initData = () => ({
  id: null,
  name: null,
  avatar: null,
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: initData()
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
      storeUser(action.payload);
    },
    resetUser(state) {
      state.data = initData();
      storeUser(initData());
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
