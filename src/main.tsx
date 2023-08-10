import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化的样式一般都是放在最前面
import 'reset-css'
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss'
// 组将的样式
import App from '@/App'

import {Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store/index'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)
