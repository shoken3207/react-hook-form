import { z } from "zod";

export const EmailSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(255, { message: "255文字以内で入力してください" })
  .email({ message: "メールアドレスの形式で入力してください" });
export const NameSchema = z
  .string()
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます。" });
export const PasswordSchema = z
  .string()
  .min(8, "パスワードは8文字以上で入力してください")
  .regex(
    /^(?=.*?[a-zA-Z])(?=.*?\d)(?=.*?[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]{8,100}$/,
    "パスワードは半角英数字混合で入力してください"
  );

export const uploadImageSchema = z.object({
  imageData: z.string().refine((data) => data.startsWith("data:image/"), {
    message: "有効なBase64画像データではありません",
  }),
  fileName: z
    .string()
    .min(1, "ファイル名は必須です")
    .regex(
      /\.(png|jpg|jpeg|gif)$/i,
      "有効な画像ファイルの拡張子が必要です（png, jpg, jpeg, gif）"
    ),
});

export const uploadImagesSchema = z.array(uploadImageSchema);
