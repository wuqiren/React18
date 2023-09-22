/** 
 * 
 * 防抖在我们日常开发中是非常常见的，比如：按钮点击、文本编辑保存等，为防止用户过于频繁操作
 * ，需要进行防抖处理。**防抖的定义：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时间，才执行代码一次。*
 * *类比于生活中的场景就例如坐公交，在一定时间内，如果有乘客陆续刷卡上车，司机就不会开车，当乘客没有刷卡了，司机才开车。
防抖功能的基本实现和相关注释如下所示
*/

import {useCallback,useRef} from 'react'



const useDebounce = (fn:(params?:unknown)=>void, delay = 300) => { 
    const timer = useRef<unknown>()
    return useCallback((...args: any) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            fn(...args)
        },delay)
    },[delay])
}

export default useDebounce