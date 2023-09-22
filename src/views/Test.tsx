import {useState,useCallback} from 'react';
import {usePrevious,useDebounce} from '@/hooks/index'


const App: React.FC = () => {
  
    const [count, setCount] = useState(0);

    const previous = usePrevious(count)
  const fun = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  const run = useDebounce(fun, 1000);

  return (
    <div>
          

            <button type="button" onClick={() => { run(); }}>
        增加 {count}
      </button>
    </div>
  );
};

export default App;