import axios from "axios";
import React from "react";
import { useState } from "react";
import { Input, Space } from "antd";
const { Search } = Input;

const PhoneSearch = () => {
  const [loading, setloading] = useState(false);
  const [location, setlocation] = useState("暂无");

  function searchPhone(e) {
    setloading(true);

    axios
      .get("https://v.api.aa1.cn/api/phone/guishu-api.php?phone=" + e)
      .then((res) => {
        console.log(res.data);
        setlocation(
          res.data.data.province + res.data.data.city + res.data.data.sp
        );
        setloading(false);
      });
  }

  return (
    <Space direction="vertical" size="middle">
      <Space.Compact>
        <Search
          addonBefore="+86"
          placeholder="请输入手机号"
          allowClear
          onSearch={(e) => {
            searchPhone(e);
          }}
          loading={loading}
        />
      </Space.Compact>

      <span>手机号归属地为：{location}</span>
    </Space>
  );
};
export default PhoneSearch;
