import { getAuthActions } from "@/hooks/auth-store";
import { removeAuthInterceptor } from "@/lib/axios";
import { useRouter } from "next/navigation";

const clearTokens = getAuthActions("clearTokens");

function LogoutButton() {
  const { push } = useRouter();
  // const { clearTokens } = useAuthActions();
  // const { clearTokens } = authStore.getState();

  function logout() {
    console.log("logout");
    removeAuthInterceptor();
    clearTokens();
    push("/");
  }

  return <button onClick={logout}>Logout</button>;
}

export default LogoutButton;
