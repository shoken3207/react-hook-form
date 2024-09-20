"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const page = () => {
  const fetchFunc = async () => {
    console.log("aaa");
    const data = await axios
      .get(
        `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=5eebe8c528a186b5`,
        {
          params: {
            format: "json", // レスポンスフォーマット
          },
        }
      )
      .catch((err) => console.log("err: ", err));
    console.log("data: ", data);
  };
  useEffect(() => {
    fetchFunc();
  }, []);
  // const { data, isError, error, isPending } = useQuery({
  //   queryKey: ["gourmetData"],
  //   queryFn: async () =>
  //     await axios
  //       .get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/", {
  //         params: {
  //           key: process.env.NEXT_PUBLIC_RECRUIT_API_KEY,
  //           large_area: "Z011", // 東京
  //           genre: "G001", // 和食
  //           count: 10, // 最大10件取得
  //           format: "json", // レスポンスフォーマット
  //         },
  //       })
  //       .then((res) => res.data),
  // });
  // if (isError) {
  //   console.error(error);
  // }
  // console.log(data);

  return <div>page</div>;
};

export default page;
