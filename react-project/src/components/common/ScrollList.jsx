
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Input, Button } from 'antd';
import
{
  PlusCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons';

const getRand = function(min, max)//生成随机数
{
  return min + Math.floor(Math.random() * (max - min + 1))
}

const mockData = (length) =>
{
  const list = [];
  for (let i = 0; i < length - 1; i++)
  {
    const item = {
      name: '当下就是最好的我们，最好的时光' + getRand(i, 10000000),
      time_delayed: getRand(1, i),
      index:i,
    }
    list.push(item)
  }
  return list;

}


const ScrollList = () =>
{
  const listLength = 15;
  const mockList = mockData(listLength);

  const [list, setList] = useState(mockList);
  const [viewList, setViewList] = useState(mockList);

  const viewport = useRef(null); // 可视区域
  const listArea = useRef(null); // 渲染区域


  const [startIndex, setStartIndex] = useState(0);
  const [stopFlag, setStopFlag] = useState(false);
  const [vHeight, setVHeight] = useState(200);

  const handlerChange = (value) =>
  {
    setVHeight(value);
    setStartIndex(0);
    setViewList(mockList);
  }

  const onMouseenter = () =>
  {
    setStopFlag(true);
  }

  const onMouseleave = () =>
  {
    setStopFlag(false);
  }


  const onStartIndexChange = () =>
  {

    const itemHeight = document.querySelector('.scroll-basic-item').offsetHeight;
    const containerHeight = viewport.current.clientHeight;//不包含外边框

    const maxCount = itemHeight ? Math.floor(containerHeight / itemHeight) : listLength;
    // console.log('maxCount',maxCount)
    // console.log('startIndex', startIndex)

    let viewList;
    viewList = list.slice(startIndex, startIndex + maxCount);
    
    if (viewList.length < maxCount)
    {
      const tempList = list.slice(0, maxCount - viewList.length);
      viewList = viewList.concat(tempList);
    }

    setViewList(viewList);
  }

  useEffect(() =>
  {
    if (stopFlag)
    {
      return undefined;
    }

    const contentHeight = listArea.current.scrollHeight;
    const containerHeight = viewport.current.clientHeight;//不包含外边框

    console.log('contentHeight <= containerHeight', contentHeight <= containerHeight);

    if (contentHeight <= containerHeight)//内容没有超过容器，不需要滚动
    {
      return undefined;
    }

    let id = setInterval(() =>
    {
      if (startIndex < list.length - 2)
      {
        setStartIndex(startIndex + 1);
        onStartIndexChange();
      } else
      {
        setStartIndex(0);
        onStartIndexChange();
      }
    }, 1000);

    return () => clearInterval(id);
  });


  return (
    <>
      <div>
        容器高度：
        <Input
          placeholder="容器高度"
          defaultValue={vHeight}
          value={vHeight}
          className="height-container"
          onChange={(e) => handlerChange(e.target.value)}
        />
      </div>
       
   
    <div className='scroll-container viewport' ref={viewport} style={{height:`${vHeight}px`}}>
      <div className='list-area calculate-dom' ref={listArea} >
        {
          list.map((item, index) =>
          (<div className='flex-box scroll-basic-item' key={index}>
            <div className='content-text'>
              <span style={{ paddingRight: '8px' }}>[{item.index + 1}]</span>
              {item.name}
            </div>
            <div className='delay-text'>延期{item.time_delayed}天</div>
          </div>
          )
          )
        }
      </div>
      <div className='list-area actual-dom'  >
        {
          viewList.map((item, index) =>
          (<div className='flex-box scroll-basic-item' key={index}
            onMouseEnter={onMouseenter}
            onMouseLeave={onMouseleave}
          >
            <div className='content-text'>
              <span style={{ paddingRight: '8px' }}>[{item.index + 1}]</span>
              {item.name}
            </div>
            <div className='delay-text'>延期{item.time_delayed}天</div>
          </div>
          )
          )
        }
      </div>
      </div>
    </>
  );
}

export default ScrollList;