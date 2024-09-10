"use client";

import { ContactSchema, ContactType } from "@/app/schema/contact/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "./Input";
import CheckboxField from "./Checkbox";
import TextareaField from "./Textarea";

const ContactForm = () => {
  const handleOnSubmit: SubmitHandler<ContactType> = (data) => {
    console.log(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: "onChange",
    resolver: zodResolver(ContactSchema),
  });

  return (
    <form
      method="post"
      onSubmit={(event) => {
        void handleSubmit(handleOnSubmit)(event);
      }}
      className="flex flex-col space-y-10"
    >
      <InputField
        label="メールアドレス"
        type="text"
        placeholder="例）mail@example.com"
        registration={register("email")}
        error={formatError.email}
      />

      <InputField
        label="電話番号"
        type="text"
        placeholder="例）09012345678"
        registration={register("telephone")}
        error={formatError.telephone}
      />

      <InputField
        label="お名前（姓）"
        type="text"
        placeholder="例）山田"
        registration={register("lastName")}
        error={formatError.lastName}
      />

      <InputField
        label="お名前（名）"
        type="text"
        placeholder="例）太郎"
        registration={register("givenName")}
        error={formatError.givenName}
      />

      <InputField
        label="企業名"
        type="text"
        placeholder="例）株式会社◯✕△"
        registration={register("organizationName")}
        error={formatError.organizationName}
      />

      <TextareaField
        label="お問い合わせ内容"
        registration={register("message")}
        error={formatError.message}
      />

      <CheckboxField
        label="個人情報取り扱いに同意する"
        registration={register("agree")}
        error={formatError.agree}
      />

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white disabled:bg-gray-300 md:self-center"
      >
        送信する
      </button>
    </form>
  );
};

export default ContactForm;
