/**
 * 倒计时的自定义Hooks
 * 倒计时件一到执行对应的函数
*/
import { useState, useEffect } from 'react'

type CountDown = {
    maxNumber: number
    fn:(params?:unknown)=>void
}
const useCountDown= ({maxNumber,fn}:CountDown)=>{
    const [number, setNumber] = useState(maxNumber)
    useEffect(() => {
        if (number > 0) {
            const timer = setInterval(() => {
                const newNumber = number - 1;
                setNumber(newNumber);
             }, 1000)
            return () => clearInterval(timer);
        } else {
            fn()
        }
  
    }, [number,fn])
    return [number]
}
export default useCountDown



