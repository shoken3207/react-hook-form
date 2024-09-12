"use client";
import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <p>セッションの期限: {session.expires}</p>
          <p>ようこそ、{session.user?.name}さん</p>
          <img
            src={session.user?.image ?? ""}
            alt=""
            style={{ borderRadius: "50px" }}
          />
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default page;
