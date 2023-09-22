/** 
 * 
 * 在实现平时需求的时候，需要保存上一次渲染时的state值，实现一个hooks用来保存上一次渲染状态
*/

import { useRef } from "react";

const usePrevious = <T>(state:T):T|undefined => {
    const prevRef = useRef<T>();
    const curRef = useRef<T>();
    prevRef.current = curRef.current;
    curRef.current = state;
    return prevRef.current;
}
export default usePrevious;