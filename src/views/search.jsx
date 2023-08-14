import React, { useState } from 'react';
import { Card } from 'antd';
import IpSearch from '../components/ipSearch';
import PhoneSearch from '../components/phoneSearch';
import RubbishSearch from '../components/rubbishSearch';
const tabList = [
  {
    key: 'tab1',
    tab: '邮编查询',
  },
  {
    key: 'tab2',
    tab: 'ip查询',
  },
  {
    key: 'tab3',
    tab: '手机归属地查询',
  },
  {
    key: 'tab4',
    tab: '垃圾分类查询',
  },
];
const contentList = {
  tab1: <p>content1</p>,
  tab2: <IpSearch />,
  tab3:<PhoneSearch/>,
    tab4: <RubbishSearch/>,
};
const tabListNoTitle = [
  {
    key: 'article',
    label: 'article',
  },
  {
    key: 'app',
    label: 'app',
  },
  {
    key: 'project',
    label: 'project',
  },
];
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};
const Search = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <Card
        style={{
          width: '100%',
        }}
        title="查询应用"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={onTab2Change}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};
export default Search;