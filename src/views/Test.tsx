import React from 'react';
import {useCountDown} from '@/hooks/index'


const App: React.FC = () => {
  const [number] =useCountDown({maxNumber:10,fn:()=>{console.log('我曹')}})
  return (
    <div>
        <div>{number}</div>
    </div>
  );
};

export default App;