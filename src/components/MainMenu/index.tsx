import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,

} from '@ant-design/icons';
import {  Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom'
type MenuItem = {
    label: string
    key: string
    icon: JSX.Element,
    children?: {label:string,key:string}[]
}

const items: MenuItem[] = [
    {
        label: '栏目1',
        key: '/page1',
        icon: <PieChartOutlined />,
    },
      {
        label: '栏目2',
        key: '/page2',
        icon: <DesktopOutlined />,
    },
     {
        label: '栏目3',
        key: '/page3',
        icon: <FileOutlined />,
        children: [
            {
                label: '栏目3-1',
                key:'/page3/page'
            }
        ]
    },
       {
        label: '栏目4',
        key: '/page4',
        icon: <FileOutlined />,
        children: [
            {
                label: '栏目4-1',
                key:'/page4/page'
            }
        ]
    },
];

const Comp = () => {

    const [openKeys,setOpenKeys] = useState([''])
    const navigateTo = useNavigate();
      const menuClick = (e:{key:string}) => {
        console.log(e, 'eeee')
        //编程式跳转
        navigateTo(e.key)
    }
    const onOpenChange = (keys:string[]) => {
     setOpenKeys([keys[keys.length-1]]);
    }
    useEffect(() => {
        const keyObj = items.find(item => {
            if (item?.key === location.pathname) {
                return true
            }
            if (item?.children && item?.children.length > 0) {
               const newItem = item?.children.find(ele => {
                    return ele.key=== location.pathname
               })
                if (newItem) {
                    return true
                }
            }
        })
        if (keyObj?.key) {
        setOpenKeys([keyObj?.key])
        }
    },[])
    const location = useLocation()
    console.log(location,'locationlocation')
    return   <Menu
                  theme="dark"
                  defaultSelectedKeys={[location.pathname]}
                  mode="inline"
                  items={items}
                  onOpenChange={onOpenChange}
                  onClick={menuClick}
                   openKeys={openKeys}
              />

 }
export default  Comp;