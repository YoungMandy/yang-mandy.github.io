import logo from '../../assets/logo.png';
import portrait from '../../assets/portrait.jpg'

import { Layout } from 'antd';

const { Header } = Layout;

const headerDom = () => {
  return (
    <Header className="yn-header header">
      <div className='logo'>
        <img src={logo} alt=""/> 
        <span className='nav-text'>xx管理平台</span>
      </div>
      <div className='user'>
        <img src={portrait} alt=""/>
        <span className='nav-text'>阿信</span>
      </div>  
    </Header>
  );
}

export default headerDom;