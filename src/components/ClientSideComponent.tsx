"use client";

import { trpc } from "@/trpc/client";
import React from "react";

const ClientSideComponent = () => {
  const { data } = trpc.hello.useQuery();
  const { data: user } = trpc.getUserById.useQuery({ id: 2 });

  console.log("user: ", user);
  const addUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  return (
    <div>
      <h1>Client Side Component</h1>
      <div>{JSON.stringify(data)}</div>
      <button onClick={(e) => addUser(e)}>ユーザー追加</button>
    </div>
  );
};

export default ClientSideComponent;
