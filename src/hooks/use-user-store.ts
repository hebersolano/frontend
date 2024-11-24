import { create } from "zustand";
// import { toast } from "./use-toast";
import { UserData } from "@/lib/user-schemas";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  user: {
    id: number;
    documentId: string;
    username: string;
    email: string;
  } | null;
  jwt: string | null;
  setUser: (userData: UserData) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      jwt: null,

      setUser(user: UserData) {
        console.log("set user data", user);
        set(user);
      },
    }),
    { name: "user-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useUserStore;
