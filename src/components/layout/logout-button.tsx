import { getAuthActions } from "@/hooks/auth-store";
import { removeAuthInterceptor } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const clearTokens = getAuthActions("clearTokens");

function LogoutButton({ children }: { children: ReactNode }) {
  const { push } = useRouter();

  function logout() {
    removeAuthInterceptor();
    clearTokens();
    push("/");
  }

  return <button onClick={logout}>{children}</button>;
}

export default LogoutButton;
