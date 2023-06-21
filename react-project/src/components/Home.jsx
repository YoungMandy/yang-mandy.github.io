import '../styles/home.css';
import React, { useState } from 'react';
import { Layout, Drawer, theme } from 'antd';
import { Button, Switch } from 'antd';
import { SettingOutlined, CloseOutlined } from '@ant-design/icons';


import nav1 from '../assets/nav-1.png';
import nav2 from '../assets/nav-2.png'

import Header from './Layout/Header.jsx';
import SiderBar from './Layout/SiderBar.jsx'
import Content from './Layout/Content.jsx'

const App = () =>
{

  const [theme, setTheme] = useState('blue');
  const changeTheme = (theme) =>
  {
    setTheme(theme);
    // setDocumentTheme(theme);
  }

  const setDocumentTheme = (theme) =>
  {
    const docElm = document.documentElement //html标签
    if (!docElm.hasAttribute('theme'))
    {
      docElm.setAttribute('theme', theme)
    } else
    {
      docElm.removeAttribute('theme');
      docElm.setAttribute('theme', theme)
    }
  }


  const [open, setOpen] = useState(false);
  const showDrawer = () =>
  {
    setOpen(true);
  };
  const onClose = () =>
  {
    setOpen(false);
  };

  const [navChecked, setNavChecked] = useState(true);
  const onNavChange = (checked) =>

  {
    setNavChecked(checked)
  }

  const [sidebarChecked, setSidebarChecked] = useState(true);
  const onSideBarChange = (checked) =>
  {
    setSidebarChecked(checked)
  }

  const [navMode, setNavMode] = useState('navTop');
  const onNavModeChange = ( mode ) =>
  {
    setNavMode(mode);
    console.log('navMode',navMode)
  }


  return (
    <Layout style={{ minHeight: '100vh' }} theme={theme} id="yn-app" mode={navMode}>
      {
        navMode === 'navTop' ?
          <>
            {navChecked && <Header ></Header>}

            <Layout>

              {sidebarChecked && <SiderBar></SiderBar>}
              <Content></Content>

            </Layout>
          </>
          :
          <>
            {sidebarChecked && <SiderBar></SiderBar>}
            <Layout>
              {navChecked && <Header ></Header>}
              <Content></Content>
            </Layout>
          </>
      }


      <Button className="fixed-btn" type="primary" icon={<SettingOutlined />} onClick={showDrawer} />

      <Drawer
        rootClassName="yn-drawer"
        className={navChecked? navMode :null}
        width={260}
        open={open}
        onClose={onClose}
        placement="right" >
        <div className='yn-drawer-item'>
          <div className='yn-drawer-item-title'>主题色</div>
          <div className='yn-drawer-item-box'>
            <div className='color-item blue-bg' onClick={() => changeTheme('blue')}></div>
            <div className='color-item red-bg' onClick={() => changeTheme('red')}></div>
            <div className='color-item purple-bg' onClick={() => changeTheme('purple')}></div>
          </div>

        </div>

        <div className='yn-drawer-item'>
          <div className='yn-drawer-item-title'>导航模式</div>
          <div className='yn-drawer-item-box'>
            <div className='img-item' onClick={() => onNavModeChange('navTop')}>
              <img src={nav1} alt="导航定格" width="42" height="42"></img>
            </div>
            <div className='img-item' onClick={() => onNavModeChange('sideTop')}>
              <img src={nav2} alt="左侧菜单定格" width="42" height="42"></img>
            </div>
          </div>
        </div>

        <div className='yn-drawer-item'>
          <div className='yn-drawer-item-title'>内容区域</div>
          <div className=' vertical-direction'>
            <div className='switch-item yn-drawer-item-box'>顶栏<Switch defaultChecked checked={navChecked} onChange={onNavChange} /></div>
            <div className='switch-item yn-drawer-item-box'>菜单栏 <Switch defaultChecked checked={sidebarChecked} onChange={onSideBarChange} /></div>
          </div>
        </div>

      </Drawer>

    </Layout>
  );
}

export default App;