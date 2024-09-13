"use client";
import { trpc } from "@/trpc/client";
import React, { useState } from "react";

const UploadImage = () => {
  // const { data: user } = trpc.getUserById.useQuery({ id: 2 });
  const uploadImageMutation = trpc.uploadImage.useMutation();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleImageUpload = () => {
    console.log(imageFile);
    if (!imageFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = async () => {
      const base64data = reader.result as string;
      const fileName = imageFile.name;
      const res = await uploadImageMutation.mutateAsync({
        imageData: base64data,
        fileName,
      });
      console.log("res: ", res);
    };
  };
  return (
    <div>
      <h1>画像アップロード</h1>
      <input
        type="file"
        name=""
        accept="image/*"
        onChange={(e) =>
          setImageFile(e.target.files ? e.target.files[0] : null)
        }
        id=""
      />
      <button onClick={() => handleImageUpload()}>アップロード</button>
    </div>
  );
};

export default UploadImage;
