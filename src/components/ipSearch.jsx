import React from "react";
import axios from "axios";
import { Button, Space } from "antd";
import { useState } from "react";

export default function IpSearch() {
  const [ip, setip] = useState(0);
  const [location, setlocation] = useState("暂无");
  async function Search() {
    let newip = 0;
    await axios
      .get("https://v.api.aa1.cn/api/myip/index.php?aa1=json")
      .then((res) => {
        setip(res.data.myip);
        newip = res.data.myip;
      });

    await axios
      .get("https://api.qqsuu.cn/api/dm-ipquery?ip=" + newip)
      .then((res) => {
        console.log(ip);
        setlocation(
          res.data.data.continent +
            res.data.data.country +
            res.data.data.province +
            "省" +
            res.data.data.city +
            "市" +
            res.data.data.district
        );
      });
  }

  return (
    <Space wrap>
      <Button type="primary" onClick={Search}>
        查询我的Ip
      </Button>
      <span>
        你的IP是：{ip === 0 ? null : ip} 你的地址是:{" "}
        {location === 0 ? null : location}
      </span>
    </Space>
  );
}
