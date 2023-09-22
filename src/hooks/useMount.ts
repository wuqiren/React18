/** 
 * 在DOM渲染之后执行的函数，类似Class中的componentDidMount
 * 只运行一次的effect(仅在组件挂载和卸载的时候执行)，可以传递一个空数组，作为第二个参数，这就告诉React 我的effect不依赖于props和state中任何数值
 * 它永远都不需要重复执行
*/

import { useEffect } from "react";


const useMount = (fn:(params?:unknown)=>void) => {
    useEffect(() => {
       fn()
    }, []);
}

export default useMount;