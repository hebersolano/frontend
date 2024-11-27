import { createStore } from "zustand/vanilla";
import { createJSONStorage, persist } from "zustand/middleware";
import { z } from "zod";

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
  isAuthenticated: boolean;
  accessToken: string | undefined;
  accessTokenData: string | undefined;

  setAccessToken: (accessToken: string | undefined) => void;
  setUserData: (userData: UserData | undefined) => void;
  clearTokens: () => void;
  // set tokens on the app start
  initAuthStore: (user?: UserData, accessToken?: string) => void;
};

const authStore = createStore<AuthStore>()(
  persist(
    (set, get) => ({
      userData: undefined,
      isAuthenticated: false,
      accessToken: undefined,
      accessTokenData: undefined,

      setAccessToken(accessToken: string | undefined) {
        set({
          accessToken,
          isAuthenticated: true,
        });
      },

      setUserData(userData) {
        set({
          userData: UserDataSchema.parse(userData),
        });
      },

      initAuthStore(userData, accessToken) {
        const { setAccessToken, setUserData } = get();
        setAccessToken(accessToken);
        setUserData(userData);
      },

      clearTokens() {
        set({
          userData: undefined,
          isAuthenticated: false,
          accessToken: undefined,
          accessTokenData: undefined,
        });
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
const accessIsAuthSelector = (state: ExtractState<typeof authStore>) =>
  state.isAuthenticated;
const accessTokenSelector = (state: ExtractState<typeof authStore>) =>
  state.accessToken;
const accessTokenDataSelector = (state: ExtractState<typeof authStore>) =>
  state.accessTokenData;

// getters
// Getting non-reactive fresh state
export const getUserData = () => accessUserDataSelector(authStore.getState());
export const getIsAuthenticated = () =>
  accessIsAuthSelector(authStore.getState());
export const getAccessToken = () => accessTokenSelector(authStore.getState());
export const getAccessTokenData = () =>
  accessTokenDataSelector(authStore.getState());

type AuthType = "clearTokens" | "initAuthStore";

export const getAuthActions = (action: AuthType) => {
  return authStore.getState()[action];
};

// Hooks
function useAuthStore<U>(selector: Params<U>[1]) {
  return useStore(authStore, selector);
}

export const useUserData = () => useAuthStore(accessUserDataSelector);
export const useIsAuthenticated = () => useAuthStore(accessIsAuthSelector);
export const useAccessToken = () => useAuthStore(accessTokenSelector);
export const useAccessTokenData = () => useAuthStore(accessTokenDataSelector);
export const useAuthActions = (action: AuthType) =>
  useStore(authStore, (state: ExtractState<typeof authStore>) => state[action]);
