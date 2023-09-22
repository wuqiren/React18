import {useState,useEffect} from 'react';
import {usePrevious,useUpdate} from '@/hooks/index'


const App: React.FC = () => {
  
    const [count, setCount] = useState(0);

    const previous = usePrevious(count)
  return (
    <div>
          新值{count}
          <div>老数值:{previous}</div>
          <button onClick={()=>{setCount(e=>e+1)}}>增加</button>
    </div>
  );
};

export default App;