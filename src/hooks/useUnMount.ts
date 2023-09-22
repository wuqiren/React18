/** 
 * 在DOM卸载之前执行相关函数，类似class组件的componentWillUnmount生命周期钩子的功能
 * 
*/

import { useEffect } from "react";

const useUnMount = (fn:()=>void) => {
    useEffect(() => {
        return () => {
          fn()
        }
    }, []);
}

export default useUnMount