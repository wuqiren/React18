import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化的样式一般都是放在最前面
import 'reset-css'
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss'
// 组将的样式
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
