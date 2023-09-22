/** 
 * 在hook中，使用setTimeout之后，需要dom卸载时，需要手动clearTImeout将定时器溢出，否则可能造成内存泄漏
 * 假设我们在项目中多次用到，那我们则需要多次重复写移除代码，并且有时候可能由于疏忽，将其遗忘。so，为什么不能将它封装成 hook，在需要的时候调用即可。
*/

import { useEffect } from "react";


type Timeout ={
    fn: (params?: unknown) => void
    delay:number
}
const useTimeout = ({fn,delay}:Timeout) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            fn()
        }, delay)
        return () => {
            clearTimeout(timer)
        }
    },[delay])
}

export default useTimeout