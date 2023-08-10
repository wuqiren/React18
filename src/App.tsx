import { useRoutes,useLocation,useNavigate } from 'react-router-dom'
import routes from './router/index'
import { useEffect } from 'react'
import { message } from 'antd'


function ToPage1() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/page1')
  },[])
  return <div></div>
}
function ToLogin() {
   const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  },[])
  return <div></div>
}
function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  /**
   * 后台管理系统两种经典的跳转方式
   * 1 如果访问的是登录页面，有token 跳转到首页
   * 2 如果访问的不是登录页面，没有token ，跳转到登录页面
   * 
   * 其他都是正常方形
   */
  const token = localStorage.getItem('token')
  const location =useLocation()
  if (location.pathname === '/login' && token) {
    // 这里不能直接用useNavigate来实现跳转，因为BeforeRouterEnter使用正常的JSX组件
    return <ToPage1/>
  }
  if (location.pathname !== '/login' && !token) {
     message.warning('你还没有登录')
    // 这里不能直接用useNavigate来实现跳转，因为BeforeRouterEnter使用正常的JSX组件
    return <ToLogin/>
  }
  return <div>
      {outlet}
  </div>
}



function App() {
  return (
    <div>
      <BeforeRouterEnter/>
    </div>
  )
}
export default App
