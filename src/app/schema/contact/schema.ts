import { z } from "zod";

const email: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(255, { message: "255文字以内で入力してください" })
  .email({ message: "メールアドレスの形式で入力してください" });

const telephone: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(10, { message: "電話番号を入力してください" })
  .max(14, { message: "入力値が長すぎます。" });

const givenName: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます。" });

const lastName: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます。" });

const organizationName: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(50, { message: "入力値が長すぎます。" });

const message: z.ZodString = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(4098, { message: "入力値が長すぎます。" });

const agree = z.boolean().refine((value) => value === true, {
  message: "同意が必須です",
});

export const ContactSchema = z.object({
  email,
  telephone,
  givenName,
  lastName,
  organizationName,
  message,
  agree,
});

export type ContactType = z.infer<typeof ContactSchema>;
