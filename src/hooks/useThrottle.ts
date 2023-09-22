import { useCallback, useRef } from "react";


// eslint-disable-next-line @typescript-eslint/ban-types
const useThrottle = (fn:Function, delay:number) => {
    const timer = useRef<unknown>();
    return useCallback((...args) => {
        if (timer.current) {
            return
        }
        timer.current = setTimeout(() => {
            fn(...args)
        },delay)
    },[delay])
}


export default useThrottle