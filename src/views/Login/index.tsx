import { useEffect, useState } from 'react'
import { Button, Input,Space,message } from 'antd'
import {  UserOutlined } from '@ant-design/icons'
import { captchaAPI, loginAPI } from '@/request/api'
import { useNavigate} from 'react-router-dom'
import styles from './login.module.scss'
const Login = () => {
    const navigate = useNavigate()
    const getFormInfo = async() => {
        console.log(userinfo, 'userinfo')
        console.log(password, 'passwordpassword')
        console.log(cache, 'cachecachecache')
        //验证
        if (!userinfo?.trim() || !password?.trim() || !cache?.trim()) {
            message.error('请输入完整信息')
            return;
        }
        const {code,token} = await loginAPI({
            username: userinfo,
            password: password,
            code: cache,
            uuid:localStorage.getItem('uuid')
        })
        if (code === 200) {
            //登录成功   保存token  跳转到/page1  删除本地保存的uuid

            message.success('登录成功')
            localStorage.setItem('token', token);
            navigate('/page1')
            localStorage.removeItem('uuid')

        }
    }
    const [imgSrc, setImgSrc] = useState('')
    useEffect(() => {
        getCaptcha()
    }, [])
    const getCaptcha = async () => {
        const captchaRes = await captchaAPI()
        if (captchaRes.code === 200) {
            setImgSrc(captchaRes.img)
            localStorage.setItem('uuid',captchaRes.uuid)
        }
    }
    const [userinfo, setUserInfo] = useState <string|undefined>()
    const [password,setPassword] = useState<string|undefined>()
    const [cache,setCache] = useState<string|undefined>()
    return <div>
        <div className={styles.form}>
             <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Input onChange={(e) => {
                    setUserInfo(e.target.value)
                }} size="large" placeholder="账号" prefix={<UserOutlined />} />
                <Input.Password onChange={(e) => {
                    setPassword(e.target.value)
                }} size="large" placeholder="input password" />
                <div className={styles.cache}>
                     <Input onChange={(e) => {
                    setCache(e.target.value)
                }} placeholder='请输入验证码' style={{ width: '150px' }} />
                    <span onClick={getCaptcha}>
                        <img src={`data:image/jpg;base64,${imgSrc}`} />
                </span>
               </div>
                <Button onClick={getFormInfo} type='primary' style={{width:'300px'}}>登录</Button>
            </Space>
        </div>
    </div>
 }
export default Login