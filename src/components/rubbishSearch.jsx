import { Card } from "antd";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;
const { Meta } = Card;

const RubbishSearch = () => {
  const [title, settitle] = useState("暂无");
  const [description, setdescription] = useState("暂无");
  const [url, seturl] = useState(
    "https://gw.alicdn.com/L1/723/1562136121/20/12/f1/2012f10fb1d836fdda6bd8fd52c20ccb.png"
  );
  const onSearch = (value) => {
    axios
      .get("https://api.gmit.vip/Api/AiLaji?format=json&kw=" + value)
      .then((res) => {
        settitle(res.data.data.title);
        setdescription(res.data.data.desc);
        seturl(res.data.data.pic);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="请输入垃圾"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(e) => {
          onSearch(e);
        }}
      />
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="分类结果" src={url} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </Space>
  );
};
export default RubbishSearch;
