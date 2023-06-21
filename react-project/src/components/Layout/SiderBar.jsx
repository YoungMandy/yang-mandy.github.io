
import React, { useState } from 'react';
import
  {
    AppstoreOutlined,
    BarsOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const siderBar = () =>
{
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onMenuClick = (item, key) =>
  {
    console.log('onMenuClick',key)
    console.log('onMenuClick',item)
    navigate(item.key)
  }
  return (

    <Sider trigger={null} collapsible collapsed={collapsed} className="yn-sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}

        style={{
          height: '100%',
          borderRight: 0,

        }}
        onClick={onMenuClick}
        items={[
          {
            key: 'page1',
            icon: <AppstoreOutlined />,
            label: '页面一',

          },
          {
            key: 'page2',
            icon: <BarsOutlined />,
            label: '页面二',
          }
        ]}
      />
      <div className='collapsed-trigger'>
        {
          React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
          })
        }
      </div>


    </Sider>

  );
}

export default siderBar;