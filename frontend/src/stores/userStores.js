import {create} from "zustand";

const useUserStore = create((set) => ({
  username: null,
  setUser: (username) => set({ username }),
  isAuthenticated: () => !!localStorage.getItem("jwtToken"),
}));

export default useUserStore;