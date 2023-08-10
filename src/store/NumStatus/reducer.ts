import handleNum from './index'

const reducer = (state = { ...handleNum.state},action:{type:string,val:number}) => { 
    const newState = JSON.parse(JSON.stringify(state));
   
    for (const key in handleNum.actionNames) {
        if (action.type === handleNum.actionNames[key]) {
           handleNum.actions[action.type](newState,action)
       }
   }
    return newState
}
export default reducer;