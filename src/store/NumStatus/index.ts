

const store = {
    state: {
        num:20
    },
    actions: { //只放同步的代码
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
          add2(newState: { num: number }, action: { type: string,val:number }) {
              newState.num += action.val;
        }
    },
    asyncActions: { //只放异步的代码
        asyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({type:'add1'})
            }, 1000);
        }
    },
    actionNames: {},

}

const actionNames = {}

for (const key in store.actions) {
    actionNames[key]=key
}
store.actionNames = actionNames;

export default store