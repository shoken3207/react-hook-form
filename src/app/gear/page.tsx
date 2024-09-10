import React from "react";

const page = () => {
  const json = [
    {
      id: 1,
      authorId: 1,
      authorName: "unknown",
      authorImage:
        "https://images.microcms-assets.io/assets/c95eded33c534806af1f9253572d9879/317ddac26d4a41328a46906e38a993ab/shoes-8212405_1280.jpg",
      mainImage:
        "https://images.microcms-assets.io/assets/c95eded33c534806af1f9253572d9879/32a615b178a14c529b05e3db03a95fda/cybozu.png",
      title: "サイボウズフロントエンドエンジニアの作業環境",
      inputFields: [
        "PC",
        "キーボード",
        "マウス",
        "チェア",
        "デスク",
        "外部ディスプレイ",
      ],
      likeCount: 17,
    },
  ];
  return (
    <div>
      {json.map(
        ({
          id,
          authorName,
          authorImage,
          mainImage,
          title,
          inputFields,
          likeCount,
        }) => (
          <div></div>
        )
      )}
    </div>
  );
};

export default page;
