"use client";

import { trpc } from "@/trpc/client";
import React from "react";

const ClientSideComponent = () => {
  const { data } = trpc.hello.useQuery();
  return (
    <div>
      <h1>Client Side Component</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default ClientSideComponent;
