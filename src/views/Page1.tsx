import { useSelector, useDispatch } from 'react-redux'
import numStatus from '@/store/NumStatus'
const Page1 = () => {
    const { num } = useSelector((state:RootState) => ({ num: state.numReducer.num }))
    const dispatch = useDispatch()
    const changeNum = () => {
        dispatch({
            type: 'add1',
        })
    }
      const changeNum2 = () => {
       dispatch(numStatus.asyncActions.asyncAdd1)
    }
    return <div>
        这是Page1页面{num}
        <button onClick={changeNum}>按钮</button>
          <button onClick={changeNum2}>异步按钮2</button>
    </div>
}

export default Page1;