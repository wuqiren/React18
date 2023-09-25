import {useEffect,useState,useRef} from 'react'

const useCountDown = (maxNumber,fn) => {
    const [number, setNumber] = useState(maxNumber)
    useEffect(() => {
        let timer = setInterval(() => {
            if (number <= 0) {
                clearInterval(timer)
                fn()
            }
            const newNumber = number - 1;
            setNumber(newNumber)
        }, 1000)
        return   clearInterval(timer)
    }, [number])
    return [number]
}

const useDebounce = (fn, delay) => {
    const timer = useRef()
    return () => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            fn()
        }, delay)
    }
}

const useThrottle = (fn, delay) => { 
    const timer = useRef();
    return () => {
        if (timer.current) {
            return
        }
        timer.current = setTimeout(() => {
            fn()
        },delay)
    }
}

const useInterval = (fn, delay) => {
    useEffect(() => { 
        const timer = setInterval(fn, delay)
        return () => {
            clearInterval(timer)
        }
    },[fn,delay])
}

const useTimeout = (fn, delay) => { 
    useEffect(() => {
        const timer = setTimeout(fn, delay)
        return () => {
            clearTimeout(timer)
        }
    },[delay,fn])
}

const useMount = (fn) => {
    useEffect(() => {
        fn()
    },[])
}

const useUnMount = (fn) => { 
    useEffect(() => {
        return () => {
            fn()
        }
    },[])
}

const usePrevious = (value) => { 
    const preRef = useRef();
    const curRef = useRef()
    preRef.current = curRef.current 
    curRef.current = value;
    return preRef.current
}