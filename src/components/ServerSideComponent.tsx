import { createCaller } from "@/server";
import React from "react";

const ServerSideComponent = async () => {
  const caller = createCaller({});
  const data = await caller.hello();
  const users = await caller.getUsers();
  console.log("users: ", users);
  const user = await caller.getUserById({ id: 4 });
  console.log("user: ", user);
  return (
    <div>
      <h1>Server Side Component</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default ServerSideComponent;
