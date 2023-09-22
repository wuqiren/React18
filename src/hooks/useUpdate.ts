/** 
 * 
 * 我们都知道如果想让 function 组件重新渲染，我们不得不更新 state，
 * 但是有时候业务需要的 state 是没必要更新的，我们不能仅仅为了让组件会重新渲染而强制让一个 state 做无意义的更新
 * 所以这个时候我们就可以自定义一个更新的 hook 来优雅的实现组件的强制更新，类似于 class 组件的 forceUpdate 的功能，实现代码如下

*/

import { useState, useCallback } from 'react';

const useUpdate = () => {
    const [, setState] = useState({});
    return useCallback(() => {
        return setState({})
    }, [])
}

export default useUpdate