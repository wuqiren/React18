import { useEffect } from 'react'

type Timeout ={
    fn: (params?: unknown) => void
    delay:number
}

const useInterval = ({ fn, delay }:Timeout) => {
    useEffect(() => {
        const interval = setInterval(fn, delay)
        return () => {
            clearInterval(interval)
        }
     },[delay])
}

export default useInterval