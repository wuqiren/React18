import { useState, useEffect } from 'react';

// function CountdownTimer({ initialSeconds }) {
//   const [seconds, setSeconds] = useState(initialSeconds);

//   useEffect(() => {
//     let intervalId;

//     if (seconds > 0) {
//       intervalId = setInterval(() => {
//         setSeconds(prevSeconds => prevSeconds - 1);
//       }, 1000);
//     }

//     return () => {
//       // 在组件卸载时清除计时器
//       clearInterval(intervalId);
//     };
//   }, [seconds]);

//   return (
//     <div>
//       <h1>倒计时: {seconds} 秒</h1>
//     </div>
//   );
// }

// export default CountdownTimer;


function useAdd() {
    const [a,setA] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            const b=a+1
            setA(b)
        }, 1000)
        return () => {
            if (a === 3) {
            clearInterval(intervalId)
                     
                 }
        }
    }, [a])
    return [a]
}

export default useAdd