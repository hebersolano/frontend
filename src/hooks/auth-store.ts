import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";
import { z } from "zod";
// import { jwtDecode } from "jwt-decode";
// import CookieService from "./cookie-service";

import { useStore } from "zustand";

export const UserDataSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  username: z.string(),
  email: z.string(),
});

type UserData = z.infer<typeof UserDataSchema>;

type AuthStore = {
  userData: UserData | undefined;

  accessToken: string | undefined;
  accessTokenData: string | undefined;

  actions: {
    setAccessToken: (accessToken: string | undefined) => void;
    setUserData: (userData: UserData | undefined) => void;
    // set tokens on the app start
    initAuthStore: (user?: UserData, accessToken?: string) => void;
    clearTokens: () => void;
  };
};

// export const decodeAccessToken = (accessToken: string) =>
//   TokenDataSchema.parse(jwtDecode<TokenData>(accessToken));

export const authStore = createStore<AuthStore>()(
  persist(
    (set, get) => ({
      userData: undefined,
      accessToken: undefined,
      accessTokenData: undefined,

      actions: {
        setAccessToken: (accessToken: string | undefined) => {
          set({
            accessToken,
          });
        },
        setUserData: (userData) => {
          set({
            userData: UserDataSchema.parse(userData),
          });
        },

        initAuthStore: (userData, accessToken) => {
          console.log("init auth action");
          const { setAccessToken, setUserData } = get().actions;
          setAccessToken(accessToken);
          setUserData(userData);
        },

        clearTokens: () =>
          set({
            userData: undefined,
            accessToken: undefined,
            accessTokenData: undefined,
          }),
      },
    }),
    { name: "auth-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

/**
 * Required for zustand stores, as the lib doesn't expose this type
 */
export type ExtractState<S> = S extends {
  getState: () => infer T;
}
  ? T
  : never;

type Params<U> = Parameters<typeof useStore<typeof authStore, U>>;

// Selectors
const accessUserDataSelector = (state: ExtractState<typeof authStore>) =>
  state.userData;
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.accessToken;
const accessTokenDataSelector = (state: ExtractState<typeof authStore>) =>
  state.accessTokenData;

const actionsSelector = (state: ExtractState<typeof authStore>) =>
  state.actions;

// getters
export const getUserData = () => accessUserDataSelector(authStore.getState());
export const getAccessToken = () => accessTokenSelector(authStore.getState());
export const getAccessTokenData = () =>
  accessTokenDataSelector(authStore.getState());
export const getActions = () => actionsSelector(authStore.getState());

// Hooks
function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

export const useUserData = () => useAuthStore(accessTokenSelector);
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useAccessTokenData = () => useAuthStore(accessTokenDataSelector);
export const useActions = () => useAuthStore(actionsSelector);
