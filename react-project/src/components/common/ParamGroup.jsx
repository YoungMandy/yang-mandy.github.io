
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {
  PlusCircleOutlined ,
  MinusCircleOutlined 
} from '@ant-design/icons';

const ParamGroup = () =>
{
  const [size] = useState('middle'); 
  const [list, setList] = useState(() => [{ prop: '', value: '' }, { prop: '', value: '' }]);

  const handlerRemove = (index) =>
  {
     list.splice(index, 1);
    const newList = [...list];
    setList(newList)
  }

  const handlerAdd = (index) =>
  {
    list.push({ props: '', value: '' });
    const newList = [...list];
    setList(newList);
  }

  const handlerChange = (value,name, index) =>
  {
    (list[index])[name] = value;
    const newList = [...list];
    setList(newList);
  }
  
  
  return (
    <div className='param-container'>
      {
        list.map((item,index) =>
         <div className='param-item' key={index}>
            <Input
              placeholder="prop"
              defaultValue={item.value}
              value={item.prop}
              className="prop-item"
              onChange={(e) => handlerChange(e.target.value, 'prop', index)}
            />
            <Input
              placeholder="value"
              defaultValue={item.value}
              value={item.value}
              className="value-item"
              onChange={(e) => handlerChange(e.target.value, 'value', index)}
            />
            <div className='action-wrapper'>
              {
                index > 0 &&
                <MinusCircleOutlined
                  className="action-icon remove-icon"
                  onClick={() => handlerRemove(index)}
              />}
              
              {
                index === list.length - 1 &&
                <PlusCircleOutlined
                  className="action-icon add-icon"
                  onClick={() => handlerAdd(index)}
                />
              }
              
          </div>
        </div>
      )}
      
    </div>
  );
}

export default ParamGroup;