"use client";
import React from "react";
import Input from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUserSchema, CreateUserType } from "@/app/schema/user/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/trpc/client";

const CreateUserForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<CreateUserType>({
    mode: "onChange",
    resolver: zodResolver(CreateUserSchema),
  });
  const createUser = trpc.createUser.useMutation({
    onSuccess: ({ message }) => {
      alert(message);
    },
    onError: ({ message }) => {
      alert(message);
    },
  });
  const handleOnSubmit: SubmitHandler<CreateUserType> = (data) => {
    const msg = createUser.mutate(data);
    console.log("msg: ", msg);
    reset();
  };
  return (
    <form
      className="flex flex-col space-y-10"
      method="post"
      onSubmit={(e) => {
        handleSubmit(handleOnSubmit)(e);
      }}
    >
      <Input
        label="名前"
        type="text"
        placeholder="田中 太郎"
        registration={register("name")}
        error={formatError.name}
      />
      <Input
        label="メールアドレス"
        type="text"
        placeholder="tanaka@gmail.com"
        registration={register("email")}
        error={formatError.email}
      />
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white disabled:bg-slate-300 md:self-center"
      >
        ユーザ登録
      </button>
    </form>
  );
};

export default CreateUserForm;
