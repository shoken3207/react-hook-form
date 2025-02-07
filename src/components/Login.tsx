import { signIn, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status != "authenticated") {
    return (
      <div>
        <p>あなたはログインしていません</p>
        <button onClick={() => signIn("google", {}, { prompt: "login" })}>
          Googleでログイン
        </button>
      </div>
    );
  }
  return <div>Login</div>;
};

export default Login;
