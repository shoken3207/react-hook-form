import { z } from "zod";
import { EmailSchema, NameSchema, PasswordSchema } from "../common/schema";

export const CreateUserSchema = z.object({
  email: EmailSchema,
  name: NameSchema,
});
export type CreateUserType = z.infer<typeof CreateUserSchema>;

export const RegisterUserSchema = z
  .object({
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: z.string().min(1, "確認用パスワードを入力してください"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        path: ["newPasswordConfirm"],
        code: "custom",
        message: "パスワードが一致しません",
      });
    }
  });

export const LoginUserSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});
