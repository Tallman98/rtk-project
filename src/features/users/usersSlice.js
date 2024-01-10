import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Igbokwe" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (store) => store.users;
export default usersSlice.reducer;
